import {readFile} from 'fs/promises';

export async function getForm(request, response) {

    response.headers({
        'content-type': 'text/html'
    });

    const html = await readFile('./views/form.html');

    return html;
}

export function postForm(request, response) {
    const {text} = request.body;

    return {
        text: text
    };
}