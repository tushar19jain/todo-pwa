let todo = [];
let getTask = document.getElementById("newTaskInput");
let addTask = document.getElementById("newTaskSubmit");
let taskList = document.getElementById("list");
function addToTodo(){ 
  let taskValue = getTask.value;
  todo.push(taskValue);
  for(let i = 0 ; i < todo.length ; i++)
  {
    if(todo[i] != "")
    {
    taskList.innerText = [].concat("",todo);
    }
    else
    todo++;
  }
  //console.log(todo);
  event.preventDefault();
  return todo;
}
function renderList(){
  for(let i = 0; i < todo.length; i++)
  {
    taskList = document.createElement("li");
    taskList.innerHTML = todo[i];
    let finalList = document.body.appendChild(taskList);
    finalList.style.fontSize = "20px";
    finalList.style.backgroundColor = "#504d4d";
    finalList.style.color = "#fff";
    finalList.style.fontWeight = "500";
    finalList.style.padding = "20px 30px";
    finalList.style.marginLeft = "40px";
    finalList.style.marginRight = "1300px";
    finalList.style.borderRadius = "50px";
    finalList.style.marginBottom = "20px";
    finalList.style.listStyle = "none";
  }
  event.preventDefault();
}