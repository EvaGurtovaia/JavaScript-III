/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Object Binding. When in the global scope, the value of “this” will be the window.
* 2. Implicit Binding. Whenever a function is called by a preceding dot, the object before that dot is this.
* 3. New. Whenever a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function.
* 4. Explicit Object. Whenever JavaScript’s call or apply method is used, this is explicitly defined.

*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function guessTheFruit(fruit) {
    console.log(this);
    return fruit;
  }
  guessTheFruit("Banana");

// Principle 2

// code example for Implicit Binding
const shopaholic = {
    name: 'Susan',
    item: 'a bag',
    buy: function(){
        console.log(`${this.name} wants to buy ${this.item}.`);
    }
}
shopaholic.buy();
// Principle 3

// code example for New Binding
function Stranger (asked) {
    this.asked = asked;
    this.question = "where are you from?";
    this.ask = function() {
      console.log(`${this.asked}, ${this.question}`)
    }
  }
  const bobby =  new Stranger ('Charlie');
  bobby.ask();

// Principle 4

// code example for Explicit Binding
const homeRobot = {
    name: 'Alexa'
}
 const skills = ['make coffee', 'sweep', 'close the door'];
 function introduce(skills1, skills2, skills3){
     console.log(`Hi there! My name is ${this.name}, and I can ${skills1}, ${skills2}, ${skills3}.`)
 }
 introduce.apply(homeRobot, skills);