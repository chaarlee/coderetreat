var hello = function() {
	return "Hello World!";
};

var a = [1,2,3,4,5];

var o = {
	a: 1,
	b: 2,
	c: 3
};

var c = function(a,b,c) {
	this.a = a;
	this.b = b;
	this.c = c;
}

var add = function(a) {
	return function(b) {
		return a+b;
	}
}

var operate = function(a,b,op) {
	return op(a,b);
}