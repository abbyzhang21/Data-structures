var chai = require("chai");
chai.should();
var toolQ = require("../quicksort.js");
var toolB = require("../bubblesort.js");
var toolM = require("../mergesort.js");
var arr = [5, 4, 6, 1, 12, 35];
// console.log(tools.sortA(arr));
describe("quick", function() {
  it("should sort the number in array with quick-sort", function() {
    var resultQ = toolQ.sortA(arr);
    // expect(results).to.equal([1, 4, 5, 6, 12, 35]);
    resultQ.should.deep.equal([1, 4, 5, 6, 12, 35]);
  });
});
describe("bubble", function() {
  it("should sort the number in array with bubble-sort", function() {
    var resultB = toolB.bubbleS(arr);
    // expect(results).to.equal([1, 4, 5, 6, 12, 35]);
    resultB.should.deep.equal([1, 4, 5, 6, 12, 35]);
  });
});
describe("merge", function() {
  it("should sort the number in array with merge-sort", function() {
    var resultM = toolM.mergeS(arr);
    // expect(results).to.equal([1, 4, 5, 6, 12, 35]);
    resultM.should.deep.equal([1, 4, 5, 6, 12, 35]);
  });
});
