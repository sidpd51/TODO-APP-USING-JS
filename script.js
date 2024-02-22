let todos = [];
let id=1;

function addTodo(){
    
    const titleInput = document.querySelector('.title').value
    const descriptionInput = document.querySelector('.description').value
    if(titleInput==='' || descriptionInput ==='') {
        alert('fill the fields!')
    } else{
        const todo = {
            id: id,
            title: titleInput,
            description: descriptionInput,
            completed: false
        };
        id++;
        todos.push(todo);
        updateTodos()
    }
}

function clearTodos(){
    todos.length=0
    id=0
}

function updateTodos(){
    const tbody = document.getElementById('tbody')
    
    tbody.innerHTML = '';

    todos.forEach(child=>{
        const row = document.createElement('tr')

        row.innerHTML=`  
            <td>${child.id}</td>
            <td>${child.title}</td>
            <td>${child.description}</td>
            <td><button onclick="markAsDone(${child.id})" class="check-btn ${child.completed ? 'done-btn': ''}"><i class="fa-solid fa-circle-check fa-xl"></i></button></td>
            <td><button onclick="" class="view-btn"><i class="fa-solid fa-eye fa-xl"></button></td>
            <td><button onclick="" class="delete-btn"><i class="fa-regular fa-trash-can fa-xl"></i></button></td>
            <td><button onclick="" class="edit-btn"><i class="fa-solid fa-pen-to-square fa-xl"></button</td>
        `
        tbody.appendChild(row)
    })
    console.log(todos)
}

function markAsDone(id){
    todos.forEach( child => {
        if(child.id===id){
            if(child.completed==false) {
                child.completed= true
            }else {
                child.completed=false}
        }
    })
    updateTodos()
}