
document.addEventListener("DOMContentLoaded", () => {
  
  const newTask = document.getElementById(`new-task-description`)

  console.log(`test`)
  
  const createTaskForm = document.getElementById(`create-task-form`)

  const createTaskButton = document.getElementById(`task-button`)
  
  

  createTaskButton.addEventListener("click", (e) => {
    e.preventDefault()

    const toDoItem = document.createElement(`li`)

    tasks.appendChild(toDoItem);

    toDoItem.innerHTML = newTask.value

    console.log(newTask)
  
  }) 
  
})

