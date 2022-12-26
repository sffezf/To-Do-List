let button = document.getElementById("push");
let input = document.getElementById("input");
let tasks = document.getElementById("tasks");
let dele = document.getElementsByClassName("delete");
button.addEventListener("click", function() {
    if (input.value.length == 0) {
        alert("Please Enter a Task")
    } else {
        tasks.innerHTML += `
        <div class="task">
        <span class="taskname">
        ${input.value}
        </span>
        <button class="delete">
        Delete
        </button>
        </div>
        `;
        input.value = '';
        for(let i=0; i<dele.length; i++) {
            // del[i].addEventListener("click", function() {
            //     this.parentNode.remove();
            
            // })
            dele[i].onclick = function () {
                this.parentNode.remove();
            }
        }
    }
})





