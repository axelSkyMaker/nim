var expect = require("chai").expect;
var nim  = require("../js/main.js");
console.log("move", nim.stateSpace.length);
describe("test of winning moves", function(){

  it("it should give 1 0 0 when given 2 0 0", function(){
    var startArr = [2, 0, 0];
    var myMove = nim.move(startArr);
	  expect(myMove[0]).to.equal(1);
  });


  it("it should give 2 2 0 when given 2 2 1", function(){
    var startArr = [2, 2, 1];
    var myMove = nim.move(startArr);
	  expect(myMove[0]).to.equal(2);
  });
  
  
  it("makeMove should find find optimal in second list", function(){
    var stateSpace = nim.stateSpace;
    stateSpace[0][1][2] = 3;
    var midArr = nim.stateSpace[0];
    var myMove = nim.findBestMidMove(midArr);
	  expect(myMove.index).to.equal(2);
  });
   it("makeMove should find find optimal in last list", function(){
    var stateSpace = nim.stateSpace;
    stateSpace[0][0][5] = 3;
    var lastArr = stateSpace[0][0];
    var myMove = nim.findBestLastMove(lastArr);
	  expect(myMove.index).to.equal(5);
  });
 
}); 

describe("test of utility functions", function(){

   it("it should see that it's a valid move 1 0 0 when given 2 0 0", function(){
    var startArr = [2, 0, 0];
    var nextMove = [1,0,0];
    var isValid = nim.isValidMove(startArr, nextMove);
	  expect(isValid).to.equal(true);
  });

   it("it should see that it's not a valid move 1 1 0 when given 2 2 0", function(){
    var startArr = [2, 2, 0];
    var nextMove = [1,1,0];
    var isValid = nim.isValidMove(startArr, nextMove);
	  expect(isValid).to.equal(false);
  });
});
