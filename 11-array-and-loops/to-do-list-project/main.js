const todoList = [];

//first render when the page is loaded.
renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  todoList.forEach((item) => {
    const html = `
      <p class="list">${item}</p>
    `;

    todoListHTML += html;
  });
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo() {
  const inputEl = document.querySelector('input');
  const name = inputEl.value;
  todoList.push(name);

  // to clear input after clicking add btn
  inputEl.value = '';

  renderTodoList();
}
