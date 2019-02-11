var testFunc = require("./func");
var assert = require("assert");

describe("The func should return an array", function(){

	// var data;

	// beforeEach();

	it("Func should return an array", function(done){
		var arr = testFunc("Apple, Orange, Banana", function(res){
			assert(Array.isArray(res));
			done();
		});
	});

	it("Func should return an array", function(done){
		var arr = testFunc("Apple, Orange, Banana", function(arr){
			assert(Array.isArray(arr));
			done();
		});
		
	});

	// it("should return an arrya with the length of 3", function(){
	// 	var arr = testFunc("Apple, Orange, Banana");
	// 	assert.equal(arr.length, 3);
	// });

	// it("should return a ref array", function(){
	// 	var refArr = ["Apple", "Orange", "Banana"];
	// 	var arr = testFunc("Apple,Orange,Banana");
	// 	assert.deepEqual(arr, refArr); /// Compares objects
	// });

	it("should thorow an error if arg is not a string", function(){
		assert.throws(function(){
			testFunc({});
		});
	});

	it("jdfhj", function(){});

});