import FastifyPlugin from 'fastify-plugin';
import FastifyCors from '@fastify/cors';

export default FastifyPlugin(async (fastify, opts) => {
    fastify.register(FastifyCors, {
        origin: ['http://localhost:3000'],
    });
});
