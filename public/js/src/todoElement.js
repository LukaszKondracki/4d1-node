function createTodo(body, date, label) {
    const t = document.createElement('div');
    const b = document.createElement('p');
    const d = document.createElement('time');
    const l = document.createElement('span');

    b.innerText = body;
    d.innerText = date;
    l.innerText = label;

    t.append(b);
    t.append(d);
    t.append(l);

    return t;
}