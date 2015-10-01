
var persons = require('./persons.json');

module.exports = function(pseudonym) {
  console.warn('This method is deprecated, use pseudonym.fullname() instead!');
  
  var name = pseudonym.split(" ")[1];
  var fullName = persons[name];
  if(typeof(fullName) === "string"){
    return fullName
  }
  return fullName[Math.random() * fullName.length | 0];
}
