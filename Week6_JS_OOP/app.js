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

async function loadData(link) {
  try {
    const options = {
      method: "GET",
    };
    const res = await fetch(link);
    const data = await res.json();
    return await data;
  } catch (error) {
    console.log(
      "I have failed to load the todo from server please create your own"
    );
  }
}
async function loadAmovie(id) {
  var allMovies = await loadData(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=aa0456e75f0edfa414c490da77f7ef48&language=en-US&page=1"
  );
  console.log(allMovies)
  allMovies.results.forEach((element) => {
    let newMovie = document.createElement("img");
    newMovie.src =
      "https://www.themoviedb.org/t/p/w220_and_h330_face/" +
      element.backdrop_path;
    // newMovie.onclick = async () => {
    //   const fullDetailsMovie = await fullDetails(element.id);

    //   document.body.innerHTML = fullDetailsMovie.original_title;
    //   console.log(fullDetailsMovie);
    // };

    document.body.appendChild(newMovie);
  });
}

// async function fullDetails(movieId) {
//   return await loadData(
//     `https://api.themoviedb.org/3/movie/${movieId}?api_key=aa0456e75f0edfa414c490da77f7ef48&language=en-US`
//   );
// }
