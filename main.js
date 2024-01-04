let taskInput = document.getElementById("task-input")
let addBtn = document.getElementById("add-btn")
let taskList = []

addBtn.addEventListener("click", addTask)

function addTask() {
    let task = {
        id:
        taskContent: taskInput.value,
        isComplete:false
    }
    taskList.push(task)
    console.log(taskList)
    render()
}

function render(){
   let resultHTML = ``
    for(let i=0; i<taskList.length; i++){
        resultHTML += `<div class="task">
                            <div>${taskList[i].taskContent}</div>
                            <div>
                                <button onclick="toggleComplete()">Check</button>
                                <button>Delete</button>
                            </div>
                        </div>`
    }


   document.getElementById("task-board").innerHTML = resultHTML;
}

function toggleComplete(e){

}

function  randomIDGenerate(){
    return '_' + Math.random().toString(36).substr(2,9);
}