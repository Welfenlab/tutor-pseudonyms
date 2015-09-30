var test = require('ava');
var pseudonym = require('./');

test('returns a pseudonym', function (t) {
  t.assert(pseudonym().length > 0);
  t.end();
});

test('capitalizes the superb word', function (t) {
  var pseudo = pseudonym();
  t.assert(pseudo[0] == pseudo[0].toUpperCase());
  t.end();
});
