window.addEventListener('load',()=> {
    const form = document.querySelector('#new-todo-form')
    const input = document.querySelector('#new-todo-input')
    const listEl = document.querySelector('#todos')
    
    
        form.addEventListener('submit', function(e){
            e.preventDefault()
            let todo = input.value
            if(!todo) {
                alert('Please fill out the task')
                return;
            }
            
    
    
        //creating task html
        const taskEl = document.createElement('div')
        taskEl.classList.add('todo')
    
        const taskContentEl = document.createElement('div')
        taskContentEl.classList.add('content')
    
        taskEl.appendChild(taskContentEl)
    
        const taskInputEl = document.createElement('input')
        taskInputEl.classList.add('text')
        taskInputEl.type='text'
        taskInputEl.value= todo
        taskInputEl.setAttribute('readonly','readonly')
    
        taskContentEl.appendChild(taskInputEl)
    
        const taskActionsEl = document.createElement('div')
        taskActionsEl.classList.add('actions')
    
        const taskEditEl = document.createElement('button')
        taskEditEl.classList.add('edit')
        taskEditEl.innerHTML= 'Edit'
    
        const taskDeleteEl = document.createElement('button')
        taskDeleteEl.classList.add('delete')
        taskDeleteEl.innerHTML= 'Delete'
    
        taskActionsEl.appendChild(taskEditEl)
        taskActionsEl.appendChild(taskDeleteEl)
    
    
        taskEl.appendChild(taskActionsEl)
        listEl.appendChild(taskEl)
        input.value= ''
    
        //Event handlers
    
        taskEditEl.addEventListener("click", () => {
            if (taskEditEl.innerText.toLowerCase() == "edit") {
              taskInputEl.removeAttribute("readonly");
              taskInputEl.focus();
              taskEditEl.innerText = "Save";
            } else {
              taskEditEl.setAttribute("readonly", "readonly");
              taskEditEl.innerText = "Edit";
            }
          });
      
          taskDeleteEl.addEventListener("click", () => {
            listEl.removeChild(taskEl);
          });
    
        })
    
        
    
    
    
    
    
    
    })