//submit poga parādās, kad sāku rakstīt
//pievienot uzrakstu, ja nekas netiek ievad;its inputā
//drag and drop


//Selectors

const todoInput = document.querySelector('.todo-input');
const todoBtn = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

//Event Listeners

//add new todo
todoBtn.addEventListener("click", addTodo);
//deleting or cheking todo
todoList.addEventListener("click", deleteCheck);
//filtering added todos
filterOption.addEventListener("click", filterTodo);


//Functions
function addTodo (e) {
  //prevents form from submitting
  e.preventDefault();
  //create todo div
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  // create li
  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);
  //completed todo button
  const completeBtn = document.createElement('button');
  completeBtn.innerHTML = '<i class="far fa-check-circle"></i>';
  completeBtn.classList.add("complete-btn");
  todoDiv.appendChild(completeBtn)
  //delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
  deleteBtn.classList.add("delete-btn");
  todoDiv.appendChild(deleteBtn)
  //append to list
  todoList.appendChild(todoDiv);
  //clear input
  todoInput.value = "";
};


function deleteCheck (e){
  const item = e.target;
  const todo = item.parentNode;
  //delete todo
  if(item.classList[0] === 'delete-btn'){
    todo.classList.add('fall');
    //function waits when the animation is executed and then deletes todo
    todo.addEventListener('transitionend', function(){
        todo.remove();
    });
  }
  //check todo
  if(item.classList[0] === 'complete-btn'){
    todo.classList.toggle('completed')
  }
}


function filterTodo(e){
  const todos = todoList.childNodes;
  todos.forEach(function(todo) {
    switch(e.target.value){
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if(todo.classList.contains('completed')){
          todo.style.display = "flex";
        }else{
          todo.style.display = "none";
        }
        break;
       case "uncompleted":
         if(!todo.classList.contains('completed')){
           todo.style.display = "flex";
         }else{
           todo.style.display = "none"
         }
         break;
    }
  })
}


