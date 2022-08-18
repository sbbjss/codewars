// https://www.codewars.com/kata/5263c6999e0f40dee200059d/train/javascript

const model = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [null, 0, null],
];

function isNil(value) {
    return value == null;
}

function processAdjacent(arr, elem) {
    let y;

    if (isNil(elem)) return false;

    for (let [i, row] of model.entries()) {
        if (row.some(val => val === elem)) {
            y = i;
            break;
        }
    }

    const x = model[y].findIndex(val => val === elem);

    let adjacentUp, adjacentDown, adjacentLeft, adjacentRight, original;
    let existingPossibleValues = [];

    try {
        adjacentUp = model[y - 1] && model[y - 1][x];
        adjacentDown = model[y + 1] && model[y + 1][x];
        adjacentLeft = model[y][x - 1];
        adjacentRight = model[y][x + 1];
        original = model[y][x];
    }
    finally {
        existingPossibleValues = [adjacentUp, adjacentDown, adjacentLeft, adjacentRight, original]
            .filter(elem => !!elem || elem === 0)
            .map(String);
        console.log(existingPossibleValues);
    }

    return existingPossibleValues;
}

function findCombinations(arr) {
    if (arr.length === 1) {
        return arr[0];
    } else {
        let result = [];
        let rest = findCombinations(arr.slice(1));
        for (let i = 0; i < rest.length; i++) {
            for (let j = 0; j < arr[0].length; j++) {
                result.push(arr[0][j] + rest[i]);
            }
        }
        return result;
    }
}

function getPINs(observed) {
    let combinations = [];

    for (let i = 0; i < observed.length; i++) {
        combinations.push(processAdjacent(observed.split(''), parseInt(observed[i])));
    }

    return findCombinations(combinations);
}

console.log(getPINs('7307'));