// https://www.codewars.com/kata/52bb6539a4cf1b12d90005b7/train/javascript

const compareArrays = (array1, array2) => {
    return array1.every((value, index) => value === array2[index]);
};

const validateBattlefield = (field) => {
    let coordinatesArray = [];

    let finalArray = [];

    const checkDiagonalCells = (field, i, j) => {
        if (!!field[i - 1]?.[j - 1] ||
            !!field[i - 1]?.[j + 1] ||
            !!field[i + 1]?.[j - 1] ||
            !!field[i + 1]?.[j + 1]) {
            return false;
        }
        return true;
    };

    const validateShips = (i) => {
        if (coordinatesArray.length === 0) return;
        const a = coordinatesArray[i][0];
        const b = coordinatesArray[i][1];

        let isVertical = false;
        let isHorizontal = false;

        let firstIteration = true;
        let count = 1;

        while (count < 4) {
            if ((isVertical && !isHorizontal) || firstIteration
                && coordinatesArray.some(elem => compareArrays(elem, [a + count, b]))) {
                isVertical = true;

                coordinatesArray = coordinatesArray
                    .filter(elem => (!compareArrays(elem, [a + count, b])));

                count++;
                firstIteration = false;
                continue;
            }
            if ((!isVertical && isHorizontal) || firstIteration
                && coordinatesArray.some(elem => compareArrays(elem, [a, b - count]))) {
                isHorizontal = true;

                coordinatesArray = coordinatesArray
                    .filter(elem => (!compareArrays(elem, [a, b - count])));

                count++;
                firstIteration = false;
                continue;
            }
            coordinatesArray = coordinatesArray
                .filter(elem => (!compareArrays(elem, [a, b])));
            break;
        }
        return finalArray.push(count);
    };

    const sortCoordinates = () => {
        for (let i = 0; i < 20; i++) {
            validateShips(i);
        }
    };

    for (let i = 0; i < 10; i++) {
        let row = field[i];

        for (let j = 0; j < 10; j++) {
            let cell = row[j];

            if (cell === 1) {
                if (!checkDiagonalCells(field, i, j)) {
                    return false;
                }

                coordinatesArray.push([i, j]);
            }
        }
    }

    if (coordinatesArray.length !== 20) {
        return false;
    }

    while (coordinatesArray.length > 0) {
        sortCoordinates();
    }

    return finalArray;
};


const testField = [
    [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
    [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

console.log(validateBattlefield(testField));
