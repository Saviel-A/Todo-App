
newTaskInput = document.querySelector(".newTaskInput");
addTask = document.querySelector(".addTask");
tasks = document.querySelector(".tasks");


addTask.onclick = function () {
    if (newTaskInput.value.length == 0) {
       alert("Please enter a task");
    }
    else {
        tasks.innerHTML +=
            `
        <div class="task>
        <span id="taskname">${newTaskInput.value}</span>
        
        <button class="deleteBtn">Delete</button>

        </div>
        `
        var currentTasks = document.querySelectorAll('.deleteBtn');
        for (let i = 0; i < currentTasks.length; i++) {
            currentTasks[i].onclick = function () {
                this.parentNode.remove();
            }

        }

    }

 



}