const tBody = document.querySelector('tbody');

async function fetchTasks() {
  const resp = await fetch(
    "https://create-tasks-api-production.up.railway.app/tasks",
    { method: "GET", mode: "cors", headers: { "Content-Type": "application/json" } }
  );
  return await resp.json();
}

const createElement = (tag, innerText = '', innerHTML = '') => {
    const element = document.createElement(tag);
    if (innerText) {
        element.innerText = innerText;
    } else {
        element.innerHTML = innerHTML;
    }
    return element;
}

const createSelect = (value) => {
    const options = `
        <option value="pendente">Pendente</option>
        <option value="em andamento">Em Andamento</option>
        <option value="concluída">Concluída</option>
    `;
    
    const select = createElement('select', '', options);

    select.value = value;

    return select;
}

const createRow = (task) => {
    const {id, title, status, created_at} = task;
    const tr = createElement('tr');
    const tdTitle    = createElement('td', title);
    const tdStatus   = createElement('td');
    const tdCreated  = createElement('td', new Date(created_at).toLocaleDateString('pt-BR'));
    const tdActions  = createElement('td');

    const select = createSelect(status);

    const editButton = createElement('button', '', '<span class="material-symbols-outlined">edit</span>');
    const deleteButton = createElement('button', '', '<span class="material-symbols-outlined">delete</span>');

    editButton.classList.add('btn-action');
    deleteButton.classList.add('btn-action');

    tdStatus.appendChild(select);   

    tdActions.appendChild(editButton);
    tdActions.appendChild(deleteButton);

    tr.appendChild(tdTitle);
    tr.appendChild(tdStatus);
    tr.appendChild(tdCreated);
    tr.appendChild(tdActions);
}
