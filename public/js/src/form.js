const form = document.getElementById('form');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = Object.values(form).map(x => {
        return { name: x.name, value: x.value }
    });

    const result = await fetch('/form', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'content-type': 'application/json'
        }
    });

    const res = await result.json();

    console.log(res);

});