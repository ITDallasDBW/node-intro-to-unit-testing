const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {

  it('when divisible by 15, should return "fizz-buzz"', function(){
    [30, 60].forEach(function(input) {
      expect(fizzBuzzer(input)).to.equal('fizz-buzz');
    });
  });

  it('when divisible by 5, should return "buzz"', function() {
    [5, 20].forEach(function(input) {
      expect(fizzBuzzer(input)).to.equal('buzz');
    });
  });

  it('when divisible by 3, should return "fizz"', function() {
    [6, 12].forEach(function(input) {
      expect(fizzBuzzer(input)).to.equal ('fizz');
    });
  });

   it('when not a number, should throw an error', function () {
       const badInputs = [true, false, 'cat', function() {}, [1, 2, 3]];
       badInputs.forEach(function(input) {
         expect(function() {
             fizzBuzzer(input);
         }).to.throw(Error);
       });
     });

});
