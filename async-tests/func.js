function testFunc(str){
	if(typeof str !== "string"){
		throw new Error("Arg should be a STRING!");
	}
	return str.split(",");
};

module.exports = testFunc;

