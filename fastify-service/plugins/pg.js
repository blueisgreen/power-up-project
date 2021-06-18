"use strict";

const fp = require("fastify-plugin");

/**
 * This plugin handles favicon service.
 *
 * @see https://github.com/smartiniOnGitHub/fastify-knexjs
 */
module.exports = fp(async function (fastify, opts) {
  const { PG_CONNECTION } = fastify.config;
  fastify.log.info("loading fastify-postgres");
  fastify.register(require("fastify-postgres"), {
    connectionString: PG_CONNECTION,
  });
});
