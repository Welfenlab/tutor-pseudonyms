var superb = require('superb');
var persons = Object.keys(require('./persons.json'));

var capitalize = function (word) {
  return word[0].toUpperCase() + word.substr(1);
};

var randomPerson = function () {
  return persons[Math.random() * persons.length | 0];
};

module.exports = function ()  {
  return capitalize(superb()) + ' ' + randomPerson();
};
