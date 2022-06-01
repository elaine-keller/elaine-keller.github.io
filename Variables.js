/*Instructions
 - Greet your friend by printing a message to the console.
*/
//your code here
var myFriend = "Ana";

///////////////

function greetings() {

  //also your code here
  `Welcome back, ${myFriend}!`
//`Greetings, ${myFriend}!`
  ///////////////
}

//leave this line unchanged to console log the results
console.log('results: ', greetings());
console.log (myFriend);

//don't change this line
if (typeof module !== 'undefined') {
  module.exports = greetings;
}