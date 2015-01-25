describe("Game of Life", function() {
    var blinker = [
        {x: 1, y:-1},
        {x: 1, y: 0},
        {x: 1, y: 1}
    ];

    it("willAlive", function() {
        expect(willAlive(true,2)).toBe(true);
        expect(willAlive(true,3)).toBe(true);
        expect(willAlive(false,3)).toBe(true);
        expect(willAlive(true,1)).toBe(false);
        expect(willAlive(false,2)).toBe(false);
    });

    it("isAlive", function() {
        expect(isAlive({x: 1, y:-1},blinker)).toBe(true);
        expect(isAlive({x: 0, y:-1},blinker)).toBe(false);
    });

    it("neighbours", function() {
        expect(neighbours({x: 0, y: 0})).toEqual(NEIGHBOURS);
    });

    it("neighboursNum", function() {
        expect(neighboursNum({x: 0, y: 0},blinker)).toEqual(3);
        expect(neighboursNum({x: 1, y: 0},blinker)).toEqual(2);
        expect(neighboursNum({x: 1, y: 1},blinker)).toEqual(1);
    });

    it("candidates", function() {
        expect(candidates(blinker).length).toEqual(27);
    });

    it("nextGeneration", function() {
        expect(nextGeneration(nextGeneration(blinker))).toEqual(blinker);
    });
});