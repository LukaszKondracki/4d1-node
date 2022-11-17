// Require the framework and instantiate it
import path from 'path';
import { fileURLToPath } from 'url';
import f from 'fastify';
import formbody from '@fastify/formbody';
import staticFiles from '@fastify/static';

const fastify = f({ logger: true });

// constants
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// plugins
fastify.register(formbody);
fastify.register(staticFiles, {
    root: path.join(__dirname, 'public'),
    prefix: '/public/',
});

// import routes
import { getAllTodos, getForm, postForm } from './routes/form.mjs';

// Declare a route
fastify.get('/', async (request, reply) => {
    return { hello: 'world!!!' };
});

fastify.get('/form', getForm);
fastify.post('/form', postForm);
fastify.get('/todos', getAllTodos);


// Run the server!
const start = async () => {
    try {
        await fastify.listen({ port: 3000 });
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
}
start();
