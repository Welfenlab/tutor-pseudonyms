var superb = require('superb');
var fullPersons = require('./persons.json');
var persons = Object.keys(fullPersons);

var capitalize = function (word) {
  return word[0].toUpperCase() + word.substr(1);
};

var randomPerson = function () {
  return persons[Math.random() * persons.length | 0];
};

var pseudonym = function ()  {
  return capitalize(superb()) + ' ' + randomPerson();
};

var splitName = function (pseudonym) {
  var name = pseudonym.split(' ');
  name[0] = name[0][0].toLowerCase() + name[0].substr(1);
  var lastname = name[name.length - 1];
  name.pop();
  var firstname = name.join(' ');
  return [firstname, lastname];
};

pseudonym.fullname = function (pseudonym) {
  var fullName = fullPersons[splitName(pseudonym)[1]];
  if (typeof fullName  === 'string') {
    return fullName
  }
  return fullName[Math.random() * fullName.length | 0];
};

pseudonym.validate = function (pseudonym) {
  var name = splitName(pseudonym);
  return superb.words.indexOf(name[0]) >= 0 && typeof fullPersons[name[1]] !== 'undefined';
};

module.exports = pseudonym;
