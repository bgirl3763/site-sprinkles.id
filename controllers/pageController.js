// Consolidate, library untuk render template + JSON
var cons = require('consolidate');

var pageMain = function (req, res) {
  var data = {};
  res.render('pageMain', data);
}

module.exports = {
  pageMain: pageMain
}