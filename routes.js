/**
 * Routes.
 * Mapping the 'path' to the controller that handles it.
 */

// Controllers. Code that handles the request.
var emailController = require('./controllers/emailController');
var pageController = require('./controllers/pageController');

var routes = function(app) {
  // Handle Add Email.
  app.get('/emails/add', emailController.addEmail);

  app.get('/emails/remove', emailController.removeEmail);

  app.get('/emails/count', emailController.count);
  // Handle Page Request.
  app.get('/', pageController.pageMain);  
}

module.exports = routes;