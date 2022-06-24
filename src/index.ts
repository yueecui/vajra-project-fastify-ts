import path from 'path';
import AutoLoad from '@fastify/autoload';
import Fastify from 'fastify';

const fastify = Fastify();

fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
});

fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: {
        prefix: '/api',
    },
});

fastify.listen({ port: 8080 }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening at ${address}`);
});
