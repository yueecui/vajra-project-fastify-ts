import type { FastifyInstance } from 'fastify';

export default async (fastify: FastifyInstance, opts: unknown) => {
    fastify.post('/signup', async function (request, reply) {
        console.log(request.body);
        const token = this.jwt.sign({
            username: (request.body as any).username,
        });
        return {
            token: token,
        };
    });

    fastify.post('/check', async function (request, reply) {
        const token = (request.body as any).token;
        const payload = this.jwt.verify(token);
        return payload;
    });
};
