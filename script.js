var num1 = 3;
var num2 = 4;
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(num1, num2));
function big(num1, num2) {
    var log = 0;
    if (num1 > num2) {
        log = num1;
    }
    else {
        log = num2;
    }
    console.log(log);
}
big(15, 7);
function isEven(num) {
    var message = 'The number is: ';
    if (num % 2 == 0) {
        message += 'Even';
    }
    else {
        message += 'Odd';
    }
    return message;
}
console.log(isEven(6));
function strLength(str) {
    return str.length;
}
console.log(strLength('dkfjgh'));
function numArray(num) {
    var array = [];
    for (var index = 1; index <= num; index++) {
        array.push(index);
    }
    return array;
}
console.log(numArray(5));
function highest(array) {
    var result = 0;
    for (var index = 0; index < array.length; index++) {
        var element = array[index];
        if (element > result) {
            result = element;
        }
    }
    return result;
}
console.log(highest([5, 38, 55, 6, 0, 1, 22]));
var personExam = { Name: 'Avi', Age: 18, isStudent: true };
function personPrinter(person) {
    var personStr = JSON.stringify(person);
    console.log(personStr);
}
personPrinter(personExam);
function isMinor(person) {
    var personAge = person.Age;
    if (personAge < 18) {
        return true;
    }
    return false;
}
console.log(isMinor(personExam));
var bookExam = {
    Title: 'Lord Of The Rings',
    Author: 'J.R.R. Tolkin',
    Year: 1945
};
console.log(bookExam);
var personExam2 = { Name: 'Sara', Age: 25, isStudent: false };
var bookExam2 = {
    Title: 'Harry Potter',
    Author: 'J.K. Rowling',
    Year: 1997
};
var readerExam = { Person: personExam, FavoriteBook: bookExam };
var readerExam2 = { Person: personExam2, FavoriteBook: bookExam2 };
console.log(readerExam);
var readerArray = [readerExam, readerExam2];
function theOldest(readerArray) {
    var oldest = readerArray[0];
    var ageOldest = readerArray[0].Person.Age;
    for (var index = 0; index < readerArray.length; index++) {
        var element = readerArray[index];
        if (element.Person.Age > ageOldest) {
            oldest = element;
            ageOldest = element.Person.Age;
        }
    }
    return oldest;
}
console.log(theOldest(readerArray));
