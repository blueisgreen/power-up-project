"use strict";
const fastify = require("fastify")();

module.exports = async function (fastify, opts) {

  // fastify.get("/", async (request, reply) => {
  //   const articles = await fastify.knex.select().from("articles");
  //   reply.send(articles)
  // });

  fastify.get('/', async (request, reply) => {
    fastify.log.info('try knex select')
    const articles = await fastify.knex.select().from('articles')
    reply.send(articles)
  })

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
