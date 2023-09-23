function loadTodos()
{
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then(res=>res.json())
  .then(data=>displayTodus(data))



}

function displayTodus(todus)
{
    const todoContainer =document.getElementById('todo-conatiner');
    
    for (const todo of todus) {
        const todoDiv=document.createElement('div');
        todoDiv.innerHTML=`
        <h3>title: ${todo.title}</h3>
        <p>User: ${todo.userId}</p>
        <p> IsCompleted: ${todo.completed == true ? 'completed' : 'not cpmplted'}</p>
        `
        todoContainer.appendChild(todoDiv);

    }

}
loadTodos()