import FastifyPlugin from 'fastify-plugin';
import FastifyJWT from '@fastify/jwt';

export default FastifyPlugin(async (fastify, opts) => {
    fastify.register(FastifyJWT, {
        secret: 'supersecret',
    });
});
