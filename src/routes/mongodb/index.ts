import type { FastifyInstance } from 'fastify';

export default async (fastify: FastifyInstance, opts: unknown) => {
    fastify.get('/', async function (request, reply) {
        const configs = this.mongo.db!.collection('startup_log');
        const result = await configs.find({}, { limit: 3 }).toArray();
        return result;
    });
};
