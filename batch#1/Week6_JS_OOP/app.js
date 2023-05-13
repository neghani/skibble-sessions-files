let todoContainer = document.querySelector("#todos");
let todoServerData;
class Todo {
  newElem = "";

  constructor(text, container, saved) {
    this.text = text;
    this.container = container;
    this.done = false;
    this.addToView();
  }
  saveTheTodo() {}
  addToView() {
    this.newElem = document.createElement("li");
    this.newElem.innerHTML = this.text;

    var markDoneBtn = document.createElement("button");
    markDoneBtn.innerHTML = "Done";
    var dltDoneBtn = document.createElement("button");
    dltDoneBtn.innerHTML = "X";
    dltDoneBtn.onclick = () => {
      this.deleteFromView();
    };
    markDoneBtn.onclick = () => {
      this.markAsDone();
    };
    this.newElem.appendChild(markDoneBtn);
    this.newElem.appendChild(dltDoneBtn);
    this.container.appendChild(this.newElem);
  }
  markAsDone() {
    this.newElem.style.color = "green";
    this.newElem.style.textDecoration = "line-through";
  }
  deleteFromView() {
    this.container.removeChild(this.newElem);
  }
}
var allTodos = [];

async function saveTodo() {
  let todoText = document.querySelector("#newTodo").value;
  const link = "http://localhost:3000/todo";
  const postSetting = {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text: todoText, done: false }),
  };
  const postTodoRes = await fetch(link, postSetting);
  const data = await postTodoRes.json();
  loadTodo();
}

async function loadTodo() {
  todoContainer.innerHTML = "";
  const link = "http://localhost:3000/todo";
  const res = await fetch(link);
  const data = await res.json();
  data.forEach((element) => {
    new Todo(element.text, todoContainer, true);
  });
}
