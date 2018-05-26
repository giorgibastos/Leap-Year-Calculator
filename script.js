var year = document.querySelector('#year');
var answer = document.querySelector('#answer');
var msg = '';

function clearInput() {
    year.value = '';
    msg = '';
    answer.innerHTML = '';
}

function isLeapYear() {

    if (isNaN(year.value)) {
        msg = 'It is not a number. Please, insert a valid number!';
        answer.innerHTML = msg;
        return false;
    } else if (year.value === '') {
        msg = 'Please, enter a valid number!';
        answer.innerHTML = msg;
        return false;
    }

    if ((year.value % 4 === 0 && year.value % 100 !== 0) || year.value % 400 === 0) {
        msg = "It is a leap year.";
        answer.innerHTML = msg;
        return;
    } else {
        msg = "It is not a leap year.";
        answer.innerHTML = msg;
        return;
    }
}