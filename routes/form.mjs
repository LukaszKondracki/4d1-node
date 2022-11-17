import {readFile, writeFile} from 'fs/promises';

export async function getForm(request, response) {

    response.headers({
        'content-type': 'text/html'
    });

    const html = await readFile('./views/form.html');

    return html;
}

export async function postForm(request, response) {
    const res = await writeFile('data.json', JSON.stringify(request.body), {flag: 'w'});

    return request.body.filter(x => x.name !== '');
}