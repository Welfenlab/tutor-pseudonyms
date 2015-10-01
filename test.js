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

test('returns a full name for a pseudonym', function (t) {
  var pseudo = 'Cat\'s pajamas Mayer';
  var fullName = pseudonym.fullname(pseudo);
  t.assert(typeof(fullName) === "string");
  t.assert(fullName.length > 0);
  t.end();
});

test('returns a random full name for an ambiguous pseudonym', function (t) {
  var pseudo = 'Cat\'s pajamas Conway';
  var fullName = pseudonym.fullname(pseudo);
  t.assert(typeof(fullName) === 'string');
  t.assert(fullName.length > 0);
  t.end();
});

test('returns true when validating a valid pseudonym', function (t) {
  t.assert(pseudonym.validate('Astounding Berners-Lee') === true);
  t.end()
});

test('returns false when validating an invalid pseudonym', function (t) {
  t.assert(pseudonym.validate('Bad Pseudonym') === false);
  t.assert(pseudonym.validate('Astounding Pseudonym') === false);
  t.assert(pseudonym.validate('astounding Pseudonym') === false);
  t.assert(pseudonym.validate('Astounding liskov') === false);
  t.end()
})
