import FastifyPlugin from 'fastify-plugin';
import FastifySensible from '@fastify/sensible';

/**
 * This plugins adds some utilities to handle http errors
 *
 * @see https://github.com/fastify/fastify-sensible
 */
export default FastifyPlugin(async (fastify, opts) => {
    fastify.register(FastifySensible, {});
});
