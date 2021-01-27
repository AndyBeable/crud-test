//SELECTORS
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//EVENT LISTENERS
todoButton.addEventListener('click', addTodo);

//FUNCTIONS
function addTodo(event) {
  event.preventDefault();
  //TODO DIV
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  //CREATE LI
  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);
  //CHECKBOX BUTTON
  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add('complete-btn');
  todoDiv.appendChild(completedButton);
  //TRASH BUTTON
  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add('trash-btn');
  todoDiv.appendChild(trashButton);
  //APEND TO LIST
  todoList.appendChild(todoDiv);
  //Clear todo input value
  todoInput.value = '';
}
