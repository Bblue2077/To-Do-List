document.addEventListener('DOMContentLoaded', function() {
    const todoInput = document.getElementById('todoInput');
    const addBtn = document.getElementById('addBtn');
    const todoList = document.getElementById('todoList');

    addBtn.addEventListener('click', function() {
        const todoText = todoInput.value.trim();
        if (todoText !== '') {
            const newTodo = document.createElement('li');
            newTodo.textContent = todoText;
            todoList.appendChild(newTodo);
            todoInput.value = '';

            newTodo.addEventListener('click', function() {
                newTodo.classList.add('crossed-out');
                setTimeout(function() {
                    todoList.removeChild(newTodo);
                }, 1000);
            });
        }
    });

    // Challenge: Load and save to-dos from localStorage
    function loadTodos() {
        const todos = JSON.parse(localStorage.getItem('todos')) || [];
        todos.forEach(todo => {
            const newTodo = document.createElement('li');
            newTodo.textContent = todo;
            todoList.appendChild(newTodo);

            newTodo.addEventListener('click', function() {
                newTodo.classList.add('crossed-out');
                setTimeout(function() {
                    todoList.removeChild(newTodo);
                    saveTodos();
                }, 1000);
            });
        });
    }

    function saveTodos() {
        const todos = [];
        todoList.querySelectorAll('li').forEach(todo => {
            todos.push(todo.textContent);
        });
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    loadTodos();
});
