import type { FastifyInstance } from 'fastify';

export default async (fastify: FastifyInstance, opts: unknown) => {
    fastify.get('/', async function (request, reply) {
        return { root: true };
    });
};
