"use strict";
const fastify = require("fastify")();

module.exports = async function (fastify, opts) {
  fastify.get("/", (request, reply) => {
    fastify.log.info("knex", fastify.knex);
  });

  fastify.get("/user/:id", (req, reply) => {
    fastify.log.info("user id", req.params.id);
    fastify.pg.connect(onConnect);

    function onConnect(err, client, release) {
      if (err) return reply.send(err);

      client.query(
        "SELECT id, username, hash, salt FROM users WHERE id=$1",
        [req.params.id],
        function onResult(err, result) {
          release();
          reply.send(err || result);
        }
      );
    }
  });
};
