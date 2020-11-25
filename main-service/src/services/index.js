const members = require('./members/members.service.js');
const codes = require('./codes/codes.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(members);
  app.configure(codes);
};
