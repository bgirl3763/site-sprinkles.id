var low = require('lowdb');
var db = low('db.json');

var addEmail = function (req, res) {
  var email = req.query.email;
  
  var now = new Date();
  var data = {
    "email": email,
    "timeInMillisec": now.getTime(),
    "timeInString": now.toString()
  }

  db('emails').push(data);
  res.render('emailAdded', data);
}

var removeEmail = function (req,res) {
  var email = req.query.email;

  db('emails').remove({ 'email': email });
  res.json({ "status" : "ok" });
}

var count = function (req, res) {
  var emailCount = db('emails').size();
  res.json({ "count" : emailCount });
}

module.exports = {
  addEmail: addEmail,
  removeEmail: removeEmail,
  count: count
}