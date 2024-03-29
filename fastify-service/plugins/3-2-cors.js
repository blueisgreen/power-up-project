"use strict";

const fp = require("fastify-plugin");

/**
 * This plugin handles things in the header.
 *
 * @see https://github.com/fastify/fastify-cors
 */
module.exports = fp(async function (fastify, opts) {
  fastify.log.info("loading fastify-cors");
  fastify.register(
    require("fastify-cors"),
    // Example disables the `contentSecurityPolicy` middleware but keeps the rest.
    { origin: false }
  );
});
