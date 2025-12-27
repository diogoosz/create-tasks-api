const tBody = document.querySelector("tbody");
const addForm = document.querySelector(".add-form");
const inputTask = document.querySelector(".input-task");

const token = localStorage.getItem("token");

if (!token) {
  window.location.href = "login.html";
}

const API_URL = "https://create-tasks-api-production.up.railway.app";

async function fetchTasks() {
  try {
    const resp = await fetch(`${API_URL}/tasks`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!resp.ok) {
      throw new Error(`Erro ao buscar tasks (${resp.status})`);
    }

    return await resp.json();
  } catch (error) {
    console.log("Não foi possível buscar as tasks:", error);
    throw error;
  }
}


async function addTask(event) {
  event.preventDefault();

  const title = inputTask.value.trim();

  if (!title) return;

  try {
    const resp = await fetch(`${API_URL}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ title }),
    });

    const data = await resp.json();

    if (!resp.ok) {
      throw new Error(data.message || "Erro ao criar task");
    }

    inputTask.value = "";
    loadTasks();
  } catch (error) {
    console.log("Erro ao criar task:", error);
  }
}

async function deleteTask(id) {
  try {
    const resp = await fetch(`${API_URL}/tasks/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!resp.ok) {
      throw new Error(`Erro ao deletar task (${resp.status})`);
    }

    loadTasks();
  } catch (error) {
    console.log("Não foi possível deletar a task:", error);
  }
}

async function updateTask({ id, title, status }) {
  try {
    const resp = await fetch(`${API_URL}/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ title, status }),
    });

    const data = await resp.json();

    if (!resp.ok) {
      throw new Error(data.message || "Erro ao atualizar task");
    }

    loadTasks();
  } catch (error) {
    console.log("Não foi possível atualizar a task:", error);
  }
}


const createElement = (tag, innerText = "", innerHTML = "") => {
  const element = document.createElement(tag);
  if (innerText) {
    element.innerText = innerText;
  } else {
    element.innerHTML = innerHTML;
  }
  return element;
};

const createSelect = (value) => {
  const options = `
    <option value="pendente">Pendente</option>
    <option value="em andamento">Em andamento</option>
    <option value="concluída">Concluída</option>
  `;

  const select = createElement("select", "", options);
  select.value = value;

  return select;
};

const createRow = (task) => {
  const { id, title, status, created_at } = task;

  const option = { dateStyle: "long", timeStyle: "short" };

  const tr = createElement("tr");
  const tdTitle = createElement("td", title);
  const tdStatus = createElement("td");
  const tdCreated = createElement(
    "td",
    new Date(created_at).toLocaleString("pt-BR", option)
  );
  const tdActions = createElement("td");

  const select = createSelect(status);

  select.addEventListener("change", ({ target }) => {
    updateTask({ id, title, status: target.value });
  });

  const editButton = createElement(
    "button",
    "",
    '<span class="material-symbols-outlined">edit</span>'
  );

  const deleteButton = createElement(
    "button",
    "",
    '<span class="material-symbols-outlined">delete</span>'
  );

  editButton.classList.add("btn-action");
  deleteButton.classList.add("btn-action");

  const editForm = createElement("form");
  const editInput = createElement("input");

  editInput.value = title;
  editForm.appendChild(editInput);

  editForm.addEventListener("submit", (event) => {
    event.preventDefault();
    updateTask({ id, title: editInput.value, status });
  });

  editButton.addEventListener("click", () => {
    tdTitle.innerText = "";
    tdTitle.appendChild(editForm);
  });

  deleteButton.addEventListener("click", () => {
    deleteTask(id);
  });

  tdStatus.appendChild(select);
  tdActions.appendChild(editButton);
  tdActions.appendChild(deleteButton);

  tr.appendChild(tdTitle);
  tr.appendChild(tdStatus);
  tr.appendChild(tdCreated);
  tr.appendChild(tdActions);

  return tr;
};


const loadTasks = async () => {
  const tasks = await fetchTasks();
  tBody.innerHTML = "";

  tasks.forEach((task) => {
    const tr = createRow(task);
    tBody.appendChild(tr);
  });
};


addForm.addEventListener("submit", addTask);
loadTasks();
