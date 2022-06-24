import FastifyPlugin from 'fastify-plugin';
import FastifyMongodb from '@fastify/mongodb';

export default FastifyPlugin(async (fastify, opts) => {
    fastify.register(FastifyMongodb, {
        url: 'mongodb://localhost:27017/local',
        forceClose: true,
        // name: 'db',  // 需要多个数据库时可以指定名称
    });
});
