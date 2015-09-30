
var persons = require('./persons.json');

module.exports = function(pseudonym){
  var name = pseudonym.split(" ")[1];
  var fullName = persons[name];
  if(typeof(fullName) === "string"){
    return fullName
  }
  return fullName[Math.random() * fullName.length | 0];
}
