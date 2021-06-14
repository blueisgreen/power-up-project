"use strict";

const fp = require("fastify-plugin");

/**
 * This plugin handles favicon service.
 *
 * @see https://github.com/smartiniOnGitHub/fastify-knexjs
 */
module.exports = fp(async function (fastify, opts) {
  fastify.log.info("loading fastify-postgres");
  fastify.register(require("fastify-postgres"), {
    connectionString: "postgres://powerup_admin:blue!$Green@localhost/powerup_db-dev",
  });
});

