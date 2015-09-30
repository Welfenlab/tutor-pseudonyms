var test = require('ava');
var pseudonym = require('./');
var fullnames = require('./fullname');

test('returns a pseudonym', function (t) {
  t.assert(pseudonym().length > 0);
  t.end();
});

test('capitalizes the superb word', function (t) {
  var pseudo = pseudonym();
  t.assert(pseudo[0] == pseudo[0].toUpperCase());
  t.end();
});

test('returns a full name for a pseudonym', function(t){
  var pseudo = pseudonym();
  var fullName = fullnames(pseudo);
  t.assert(typeof(fullName) === "string");
  t.assert(fullName.length > 0);
  t.end();
});

test('returns a random full name for an ambiguous pseudonym', function(t){
  var pseudo = "A Conway";
  var fullName = fullnames(pseudo);
  t.assert(typeof(fullName) === "string");
  t.assert(fullName.length > 0);
  t.end();
});
