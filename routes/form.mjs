import { existsSync } from 'fs';
import { readFile, writeFile } from 'fs/promises';

export async function getForm(request, response) {

    response.headers({
        'content-type': 'text/html'
    });

    const html = await readFile('./views/form.html');

    return html;
}

const filename = 'data.json';

export async function postForm(request, response) {

    if (!existsSync(filename)) {
        await writeFile(filename, JSON.stringify([]), { flag: 'wx' });
    }

    const file = await readFile(filename);

    let fileData = JSON.parse(file);

    fileData = [
        ...fileData,
        ...[{
            body: request.body.body,
            label: request.body.label,
            date: new Date()
        }]
    ];

    await writeFile(filename, JSON.stringify(fileData, null, 2));

    return fileData;
}

export async function getAllTodos(request, response) {
    const file = await readFile(filename);

    let fileData = JSON.parse(file);

    return fileData;
}