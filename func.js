function testFunc(str, callbackFunc){

	if(typeof str !== "string"){
		throw new Error("Arg should be a STRING!");
	}

	setTimeout(function(){
		var result = str.split(",");
		callbackFunc(result);
	}, 1000);

};

module.exports = testFunc;

