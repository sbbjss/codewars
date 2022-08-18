const countMinutes = (time) => {
    console.log(time);

    const arr = time.split('-');

    const firstValueIsAM = arr[0].includes('am');
    const secondValueIsAM = arr[1].includes('am');

    const firstHoursAndMinutes = arr[0].split(':');
    const secondHoursAndMinutes = arr[1].split(':');

    let firstMinutes = parseInt(firstHoursAndMinutes[0]) * 60 + parseInt(firstHoursAndMinutes[1]);
    let secondMinutes = parseInt(secondHoursAndMinutes[0]) * 60 + parseInt(secondHoursAndMinutes[1]);

    if (!firstValueIsAM) {
        firstMinutes += 720;
    }

    if (!secondValueIsAM) {
        secondMinutes += 720;
    }

    return secondMinutes - firstMinutes;
}

console.log(countMinutes('9:00am-9:00pm'));
