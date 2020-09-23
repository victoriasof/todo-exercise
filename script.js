let todos = [
  {
    id: 1,
    title: "delectus aut autem",
    completed: true,
  },
  {
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
  {
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
  {
    id: 4,
    title: "et porro tempora",
    completed: true,
  },
];

const wrapper = document.getElementById("todos-wrapper");
const addBtn = document.getElementById("addTodoBtn");
const input = document.getElementById("todoTitle");

addBtn.addEventListener("click", () => {
  
  const inputValue = input.value;

  let newTodo = {
    id: todos.length + 1,
    title: inputValue,
    completed: false
  }; //object

  todos.push(newTodo);
  renderTodos();
});

function generateTodoElement(todo) {
  var divTodoItem = document.createElement("DIV");
  divTodoItem.classList.add("todo-item");
  divTodoItem.setAttribute('data-id', todo.id);

  var paragraph = document.createElement("P");
  paragraph.classList.add("todo-title");
  paragraph.textContent = todo.title;

  var button = document.createElement("BUTTON");
  button.classList.add("delete");
  button.textContent = "Delete";

  button.addEventListener("click", event => {
    event.target.parentElement.remove();
  });

  divTodoItem.appendChild(paragraph);
  divTodoItem.appendChild(button);
  
  return divTodoItem;
}

function renderTodos(){
  wrapper.innerHTML = "";
  todos.forEach(todo => {
    let newTodo = generateTodoElement(todo);
    wrapper.insertBefore(newTodo, wrapper.childNodes[0]);
  });
}

renderTodos();