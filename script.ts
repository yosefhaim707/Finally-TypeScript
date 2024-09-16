const num1: number = 3;
const num2: number = 4;

function add(num1: number, num2: number): number {
    return num1 + num2;
}

console.log(add(num1, num2));

function big(num1: number, num2: number): void {
    let log: number = 0;
    if (num1 > num2) {
        log = num1;
    }
    else {
        log = num2;
    }
    console.log(log);
}

big(15, 7)

function isEven(num: number): string {
    let message: string = 'The number is: ';
    if (num % 2 == 0) {
        message += 'Even'
    }
    else {
        message += 'Odd'
    }
    return message;
}
console.log(isEven(6))

function strLength(str: string): number {
    return str.length;
}
console.log(strLength('dkfjgh'))

function numArray(num: number): number[] {
    let array: number[] = [];
    for (let index = 1; index <= num; index++) {
        array.push(index);
    }
    return array;
}
console.log(numArray(5))

function highest(array: number[]): number {
    let result: number = 0;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element > result) {
            result = element;
        }
    }
    return result;
}
console.log(highest([5, 38, 55, 6, 0, 1, 22]));

type Person = {
    Name: string,
    Age: number,
    isStudent: boolean
}

const personExam: Person = {Name: 'Avi', Age: 18, isStudent: true};


function personPrinter(person: Person): void {
    let personStr: string = JSON.stringify(person);
    console.log(personStr);
}
personPrinter(personExam);

function isMinor(person: Person): boolean {
    const personAge: number = person.Age;
    if (personAge < 18) {
        return true;
    }
    return false;
}
console.log(isMinor(personExam));

interface Book {
    Title: string,
    Author: string,
    Year: number
}
const bookExam: Book = {
    Title: 'Lord Of The Rings',
    Author: 'J.R.R. Tolkin',
    Year: 1945
}
console.log(bookExam);


type Reader = {
    Person: Person,
    FavoriteBook: Book
}

const personExam2: Person = {Name: 'Sara', Age: 25, isStudent: false};
const bookExam2: Book = {
    Title: 'Harry Potter',
    Author: 'J.K. Rowling',
    Year: 1997
}
const readerExam: Reader = {Person: personExam, FavoriteBook: bookExam};
const readerExam2: Reader = {Person: personExam2, FavoriteBook: bookExam2};
console.log(readerExam);

const readerArray: Reader[] = [readerExam, readerExam2];

function theOldest(readerArray: Reader[]): Reader {
    let oldest: Reader = readerArray[0];
    let ageOldest: number = readerArray[0].Person.Age;
    for (let index = 0; index < readerArray.length; index++) {
        const element: Reader = readerArray[index];
        if (element.Person.Age > ageOldest) {
            oldest = element;
            ageOldest = element.Person.Age;
        }
    }
    return oldest;
}
console.log(theOldest(readerArray));
