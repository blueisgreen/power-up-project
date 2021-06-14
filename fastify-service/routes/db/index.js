"use strict";

module.exports = async function (fastify, opts) {
  fastify.get("/", (request, reply) => {
    fastify.log.info('knex', fastify.knex)
  });
};
