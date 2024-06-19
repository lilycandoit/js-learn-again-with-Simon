const todoList = JSON.parse(localStorage.getItem('todoList')) || [];

//first render when the page is loaded.
renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  todoList.forEach((itemObject, index) => {
    const { name, dueDate } = itemObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <div>
        <button onclick="
          todoList.splice(${index}, 1);
          renderTodoList();
        ">Delete</button>
      </div>
    `;

    todoListHTML += html;
  });

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo() {
  const inputNameEl = document.querySelector('.js-input-name');
  const name = inputNameEl.value;

  const dueDateEl = document.querySelector('.js-input-due-date');
  const dueDate = dueDateEl.value;

  todoList.push({
    // name: name,
    // dueDate: dueDate,
    name,
    dueDate,
  });
  saveToStorage();

  // to clear input after clicking add btn
  inputNameEl.value = '';
  dueDateEl.value = '';

  renderTodoList();
}

function saveToStorage() {
  localStorage.setItem('todoList', JSON.stringify(todoList));
}
