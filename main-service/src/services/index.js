const members = require('./members/members.service.js');
const codes = require('./codes/codes.service.js');
const lessons = require('./lessons/lessons.service.js');
const passages = require('./passages/passages.service.js');
const courses = require('./courses/courses.service.js');
const feedback = require('./feedback/feedback.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(members);
  app.configure(codes);
  app.configure(lessons);
  app.configure(passages);
  app.configure(courses);
  app.configure(feedback);
};
