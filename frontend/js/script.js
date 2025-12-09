const tBody = document.querySelector("tbody");
const addForm = document.querySelector(".add-form");
const inputTask = document.querySelector(".input-task");

async function fetchTasks() {
  try {
    const resp = await fetch(
      "https://create-tasks-api-production.up.railway.app/tasks",
      {
        method: "GET",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
      }
    );
    return await resp.json();
  } catch (error) {
    console.log("Não foi possivel buscar as tasks: ", error);
    throw error;
  }
}

async function addTask(event) {
  event.preventDefault();
  const task = { title: inputTask.value };
  try {
    const resp = await fetch(
      "https://create-tasks-api-production.up.railway.app/tasks",
      {
        method: "POST",
        mode: "cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      }
    );
    return await resp.json();
  } catch (error) {
    console.log("Erro ao criar task: ", error);
    throw error;
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
        <option value="em andamento">Em Andamento</option>
        <option value="concluída">Concluída</option>
    `;

  const select = createElement("select", "", options);

  select.value = value;

  return select;
};

const createRow = (task) => {
  const { id, title, status, created_at } = task;
  const tr = createElement("tr");
  const tdTitle = createElement("td", title);
  const tdStatus = createElement("td");
  const tdCreated = createElement(
    "td",
    new Date(created_at).toLocaleDateString("pt-BR")
  );
  const tdActions = createElement("td");

  const select = createSelect(status);

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

  tasks.forEach((task) => {
    const tr = createRow(task);
    tBody.appendChild(tr);
  });
};

addForm.addEventListener("submit", addTask);
loadTasks();
