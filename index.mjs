// Require the framework and instantiate it
import f from 'fastify';
const fastify = f({ logger: true });

// import routes
import { getForm, postForm } from './routes/form.mjs';

// Declare a route
fastify.get('/', async (request, reply) => {
    return { hello: 'world' };
});

fastify.get('/form', getForm);
fastify.post('/form', postForm);


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
