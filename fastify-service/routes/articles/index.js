"use strict";

module.exports = async function (fastify, opts) {
  // fastify.get("/", async function (request, reply) {
  //   const now = new Date();
  //   return [
  //     {
  //       id: "1234",
  //       headline: "Read All About It",
  //       byline: "Zanzibar",
  //       createdAt: now,
  //       updatedAt: now,
  //       content: "Things are going to be <b>amazing</b>.",
  //     },
  //   ];
  // });

  fastify.get("/", (req, reply) => {
    fastify.pg.connect(onConnect);
    function onConnect(err, client, release) {
      if (err) return reply.send(err);
      client.query(
        "SELECT * FROM articles",
        function onResult(err, result) {
          release();
          reply.send(err || result.rows);
        }
      );
    }
  });

  fastify.get("/:id", (req, reply) => {
    fastify.log.info("article id", req.params.id);
    fastify.pg.connect(onConnect);

    function onConnect(err, client, release) {
      if (err) return reply.send(err);

      client.query(
        "SELECT id, headline, byline, content FROM articles WHERE id=$1",
        [req.params.id],
        function onResult(err, result) {
          release();
          reply.send(err || result.rows);
        }
      );
    }
  });
};
