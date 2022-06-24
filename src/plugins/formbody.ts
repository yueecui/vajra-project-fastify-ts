import FastifyPlugin from 'fastify-plugin';
import FastifyFormbody from '@fastify/formbody';

export default FastifyPlugin(async (fastify, opts) => {
    fastify.register(FastifyFormbody);
});
