function getInnerText(id)
{
    const value = document.getElementById(id).innerText;
    return parseFloat(value);

}
function getElementById(id)
{
    const value = document.getElementById(id);
    return value;
}
function setInnerText(id,value)
{
    document.getElementById(id).innerText = value;
}
function getFormattedTime() {
    return new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: true });
  }
  


function taskCompleted(taskId,title)
{
    document.getElementById(taskId).addEventListener("click",
        function(event){
            event.preventDefault();
            const task = getInnerText("task");
            const taskCompleted = getInnerText("task-completed");
            const sum = task - 1;
            const comp = taskCompleted + 1;
            setInnerText("task", sum);
            setInnerText("task-completed", comp);
            const button = getElementById(taskId);
            button.disabled = true;

            alert("Board Updated Successfully!");
            const taskTitle = document.getElementById(title).innerText;
            
            if(sum === 0){
                alert("Congratulations! All tasks completed!");
            }
            const parent = document.getElementById("history");

            const taskDiv = document.createElement("div");
            taskDiv.classList.add("mb-4","bg-gray-50","p-3","rounded-lg");
            const p1 = document.createElement("p");
            p1.classList.add("text-sm", "text-gray-600"); 
            p1.innerText = `You have completed the task ${taskTitle}`;

            const p2 = document.createElement("p");
            p2.classList.add("text-xs", "text-gray-400", "mt-1"); 
            p2.textContent = `${getFormattedTime()}`;
            taskDiv.appendChild(p1);
            taskDiv.appendChild(p2);
            parent.appendChild(taskDiv);            
        }
    )
}
taskCompleted("first-task","title-1");
taskCompleted("second-task","title-2");
taskCompleted("third-task","title-3");
taskCompleted("fourth-task","title-4");
taskCompleted("fifth-task","title-5");
taskCompleted("sixth-task","title-6");

document.getElementById("clear-history").addEventListener("click",
    function(event)
    {
        event.preventDefault();
        document.getElementById("history").innerHTML = "";
    }
)
document.getElementById("theme-btn").addEventListener("click",
    function(event){
        event.preventDefault();
        const a = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256); 
        const c = Math.floor(Math.random() * 256);
        const randomColor = `rgb(${a}, ${b}, ${c})`;
        document.body.style.backgroundColor = randomColor;

    
    }
)

document.getElementById('todayDate').textContent = new Date().toDateString();