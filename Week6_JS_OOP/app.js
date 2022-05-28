let todoContainer = document.querySelector("#todos");

class Todo {
  newElem = "";

  constructor(text, container, saved) {
    this.text = text;
    this.container = container;
    this.done = false;
    this.addToView();
    if (saved==false) {
      this.saveTheTodo();
    }
  }
  saveTheTodo() {
    let existingData = localStorage.getItem("todo");
    existingData = existingData
      ? existingData + " |!@ " + this.text
      : this.text;
    localStorage.setItem("todo", existingData);
  }
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

function saveTodo() {
  let todoText = document.querySelector("#newTodo").value;
  allTodos.push(new Todo(todoText, todoContainer, false));
}

function undoDelete() {
  allTodos[0].addToView();
}

function startTheApp() {
  let notesData = localStorage.getItem("todo");
  notesData = notesData.split(" |!@ ");
  notesData.forEach((element) => {
    new Todo(element, todoContainer, true);
  });
}
