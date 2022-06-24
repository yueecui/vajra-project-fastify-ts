import FastifyPlugin from 'fastify-plugin';

// the use of fastify-plugin is required to be able
// to export the decorators to the outer scope

export default FastifyPlugin(async (fastify, opts) => {
    fastify.decorate('someSupport', () => {
        return 'hugs';
    });
});
