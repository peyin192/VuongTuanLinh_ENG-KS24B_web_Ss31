let todoList = [
    { id: 1, task: 'Hit the gym', completed: false },
    { id: 2, task: 'Pay bills', completed: true },
    { id: 3, task: 'Meet George', completed: false },
    { id: 4, task: 'Buy eggs', completed: false },
    { id: 5, task: 'Read a book', completed: false },
    { id: 6, task: 'Organize office', completed: false }
  ];
  
  function renderTodoList() {
    let ul = document.getElementById('myUL');
    ul.innerHTML = '';
  
    todoList.forEach(item => {
      let li = document.createElement('li');
      li.textContent = item.task;
      
      if (item.completed) {
        li.classList.add('checked');
      }
  

      li.addEventListener('click', function () {
        item.completed = !item.completed;
        renderTodoList();
      });
  

      let closeBtn = document.createElement('span');
      closeBtn.textContent = '×';
      closeBtn.classList.add('close');
      closeBtn.addEventListener('click', function (event) {
        event.stopPropagation();
        todoList = todoList.filter(todo => todo.id !== item.id);
        renderTodoList();
      });
  
      li.appendChild(closeBtn);
      ul.appendChild(li);
    });
  }
  
renderTodoList();
  