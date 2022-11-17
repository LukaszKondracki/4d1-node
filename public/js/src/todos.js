(async () => {
    // const todos = document.getElementById('todos');

    const result = await fetch('/todos');

    const res = await result.json();

    // Create todos
    todos.innerHTML = '';
    for (const todo of res) {
        todos.append(createTodo(todo.body, todo.date, todo.label));
    }

})();