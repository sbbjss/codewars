const runLengthEncoding = (string) => {
    const latinOnlyRegex = /^[a-zA-Z]+$/;

    if (!latinOnlyRegex.test(string)) {
        return false;
    }

    const array = string.split('');

    let result = [];
    let count = 1;

    for (let i = 0; i < array.length; i++) {
        let currentLetter = array[i];
        if (!!array[i + 1] && array[i] === array[i + 1]) {
            count++;
        } else {
            result.push(count.toString());
            result.push(currentLetter);
            count = 1;
        }
    }

    return result.join('');

}

console.log(runLengthEncoding('aaawwddjjjjfdsfs'));
