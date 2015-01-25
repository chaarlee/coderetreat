describe("Demo", function() {
	it("function", function() {
		expect(hello).toBeDefined();
		expect(typeof hello).toEqual("function");
		expect(hello()).toEqual("Hello World!");
	})

	xit("array", function() {
		expect(a).toEqual([]);		
	})

	it("array", function() {
		expect(a.length).toEqual(5);
		expect(a[2]).toEqual(3);
	})

	it("object", function() {
		expect(typeof o).toEqual("object");
		expect(o.a).toEqual(1);
		expect(o['b']).toEqual(2);
	})

	it("class", function() {
		expect(typeof c).toEqual("function");
		var o = new c(1,2,3);
		expect(o.a).toEqual(1);
		expect(o['b']).toEqual(2);
	})

	it("add", function() {
		expect(add(1)(2)).toBe(3);
		expect(add(4)(5)).toBe(9);
		expect(add(0)(0)).toBe(0);

		var add2 = add(2);

		expect(add2(8)).toBe(10);
	})

	it("operate", function() {
		expect(operate(10,7, function(a,b) {
			return a * b;
		})).toBe(70);
	})
})