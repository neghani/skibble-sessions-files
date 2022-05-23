var listArray = [
  'I need to go to super market',
  'I need to go to temple at 9',
  'I need to go to Gym at 10',
  'I need to go to office at 11',
];
var todoList = document.getElementById('todoList');

function initApp() {
  todoist.innerHTML='';
  const count =0; 
  count =1;
  for (var i = 0; i < listArray.length; i++) {
    addItem(i);
  }
}
function addNewTodo(){
  console.log(listArray);
  var note = window.prompt('What is the note?');
  listArray.push(note);
  initApp();
  
}

function addItem(i){
  var li = document.createElement('li');
  li.innerHTML= '<span>'+listArray[i]+'</span>' + ' <span><button>Mark as done</button> <button>Delete</button></span>';
  todoList.appendChild(li);
}


function myFunction(x, y = 2) {
  return x * y;
}