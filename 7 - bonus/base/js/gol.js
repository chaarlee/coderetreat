var RULES = [
    {isAlive: true, neighboursNum: 2},
    {isAlive: true, neighboursNum: 3},
    {isAlive: false, neighboursNum: 3}
];

var NEIGHBOURS = [
    {x: -1, y: -1}, {x:  0, y: -1}, {x:  1, y: -1},
    {x: -1, y:  0},                 {x:  1, y:  0},
    {x: -1, y:  1}, {x:  0, y:  1}, {x:  1, y:  1}
];

function willAlive(isAlive, neighboursNum) {
    return RULES.some(function(r) {
        return r.isAlive === isAlive && r.neighboursNum === neighboursNum;
    });
}

function isAlive(cell,generation) {
    return generation.some(function(c) {
        return cell.x === c.x && cell.y === c.y;
    });
}

function neighbours(cell) {
    return NEIGHBOURS.map(function(n) {
       return {x: cell.x + n.x, y: cell.y + n.y};
    });
}

function neighboursNum(cell,generation) {
    return neighbours(cell).filter(function(n) {
        return isAlive(n,generation);
    }).length;
}

function candidates(generation) {
    return generation.reduce(function(candidates,cell) {
        return candidates.concat(neighbours(cell)).concat([cell]);
    },[]);
}

function nextGeneration(generation) {
    return candidates(generation).reduce(function(nextGeneration,cell) {
        return !isAlive(cell,nextGeneration) && willAlive(isAlive(cell,generation),neighboursNum(cell,generation)) ? nextGeneration.concat([cell]): nextGeneration;
    },[]);
}