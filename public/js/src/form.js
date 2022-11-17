const form = document.getElementById('form');
const todos = document.getElementById('todos');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const fields = Object.values(form);

    const data = fields
        .map(x => {
            return { name: x.name, value: x.value }
        })
        .filter(x => x.name !== '')
        .reduce((prev, current) => {
            return { ...prev, ...{ [current.name]: current.value } }
        }, {});

    const result = await fetch('/form', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'content-type': 'application/json'
        }
    });

    const res = await result.json();

    // clear form
    for (const field of fields) {
        field.value = null;
    }

    // Create todos
    todos.innerHTML = '';
    for (const todo of res) {
        todos.append(createTodo(todo.body, todo.date, todo.label));
    }

});
