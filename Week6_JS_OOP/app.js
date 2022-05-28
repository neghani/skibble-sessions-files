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
  saveTheTodo() {
    // let existingData = localStorage.getItem("todo");
    // existingData = existingData
    //   ? existingData + " |!@ " + this.text
    //   : this.text;
    // localStorage.setItem("todo", existingData);
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

async function startTheApp(link="https://api.themoviedb.org/3/movie/now_playing?api_key=aa0456e75f0edfa414c490da77f7ef48&language=en-US&page=1") {
  try {
    const options = {
      method: "GET",
    };
    
    fetch(
      link,
      options
    )
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  } catch (error) {
    console.log(
      "I have failed to load the todo from server please create your own"
    );
  }
}
startTheApp("https://api.themoviedb.org/3/movie/628900?api_key=aa0456e75f0edfa414c490da77f7ef48&language=en-US");

