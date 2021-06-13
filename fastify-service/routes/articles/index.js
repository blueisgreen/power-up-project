"use strict";

module.exports = async function (fastify, opts) {
  fastify.get("/", async function (request, reply) {
    const now = new Date();
    return [
      {
        id: "1234",
        headline: "Read All About It",
        byline: "Zanzibar",
        createdAt: now,
        updatedAt: now,
        content: "Things are going to be <b>amazing</b>.",
      },
    ];
  });
};
