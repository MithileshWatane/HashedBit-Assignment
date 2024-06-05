// Q1) Create an array of states in india.
// Remove all the names starting with vowels from the list. Use array.filter.
let states = ["Maharashtra", "Karnataka", "Andhra Pradesh", "Gujarat", "Uttar Pradesh"];
let filteredStates = states.filter(state => !['A', 'E', 'I', 'O', 'U'].includes(state[0].toUpperCase()));
console.log(filteredStates);




// Q2) let str = 'I love my India'
// output expected = 'India my love I'
// Write code for this.
let str = 'I love my India';
let reversedStr = str.split(' ').reverse().join(' ');
console.log(reversedStr);




// Q3) let string = 'INDIA'
// output = 'INDONESIA'
// Use array.splice
let string = 'INDIA';
string = string.split('').splice(3, 0, 'ONESI').join('');
console.log(string);




// Q4) Take any string with minimum 20 characters. Count number of consonant and vowel in the string.
let strings = 'hello this is Atul kashyap';
let vowels = strings.match(/[aeiou]/gi).length;
let consonants = strings.match(/[^aeiou]/gi).length;
console.log('Vowels:', vowels, 'Consonants:', consonants);




// Q5) Write a function to replace wrong word with correct word in any sentance.
// Like this - correctfn(string, wrong, correct)
// Use string.replace in function.
function correctFn(sentence, wrong, correct) {
    return sentence.replace(wrong, correct);
}
let correctedSentence = correctFn('This is some txt', 'txt', 'text');
console.log(correctedSentence);




// Q6) inputArr = [1,2,3,9,10,7,5,4,3]
// answer = [9, 10, 7]
// User array.filter and return numbers greater than 5.
let inputArr = [1,2,3,9,10,7,5,4,3];
let answer = inputArr.filter(num => num > 5);
console.log(answer);




// Q7)
// const students = [
// { name: "Ram", scores: [80, 70, 60] },
// { name: "Mohan", scores: [80, 70, 90] },
// { name: "Sai", scores: [60, 70, 80] },
// { name: "Hemang", scores: [90, 90, 80, 80] },
// ];
// Output = [
// { name: "Ram", average: 70 },
// { name: "Mohan", average: 80 },
// { name: "Sai", average: 70 },
// { name: "Hemang", average: 85 },
// ];
// Use array.map and array.reduce.
const students = [
    { name: "Ram", scores: [80, 70, 60] },
    { name: "Mohan", scores: [80, 70, 90] },
    { name: "Sai", scores: [60, 70, 80] },
    { name: "Hemang", scores: [90, 90, 80, 80] },
];

let output = students.map(student => {
    let average = student.scores.reduce((total, score) => total + score, 0) / student.scores.length;
    return { name: student.name, average: average };
});

console.log(output);




// Q8) Write a function to find repeated sum of digits until there is only a single digit in the number.
// Example - 456 - 4+5+6 = 15 - 1+5 = 6.
function repeatedSum(num) {
    while (num > 9) {
        num = String(num).split('').reduce((acc, digit) => acc + Number(digit), 0);
    }
    return num;
}

let result = repeatedSum(456);
console.log(result); 




// Q9) Write a function to count the number of words in a paragraph.
function countWords(paragraph) {
    return paragraph.split(/\s+/).filter(word => word !== '').length;
}

let paragraph = "This is a sample paragraph with some words.";
let wordCount = countWords(paragraph);
console.log(wordCount); 




// Q10) Write a function to reverse a string.
// Input - Hello
// Outpur - olleH
function reverseString(str) {
    return str.split('').reverse().join('');
}

let input = "Hello";
let reversed = reverseString(input);
console.log(reversed);




// Q11)
// Input

// [
//     student1: {
//         subject1: 44,
//         subject2: 56,
//         subject3: 87,
//         subject4: 97,
//         subject5: 37
//     },
//     student2: {
//         subject1: 44,
//         subject2: 56,
//         subject3: 87,
//         subject4: 97,
//         subject5: 37
//     },
//     student3: {
//         subject1: 44,
//         subject2: 56,
//         subject3: 87,
//         subject4: 97,
//         subject5: 37
//     }
// ]
    
// Output: -
// [
//     student1: {
//         average: 44
//     },
//     student2: {
//         average: 44
//     },
//     student3: {
//         average: 44
//     }
// ]
// Write code to find average as mentioned above. Use array and object methods.

let studentss = [
    { student1: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 } },
    { student2: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 } },
    { student3: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 } }
];

let outputt = studentss.map(student => {
    let scores = Object.values(student)[0];
    let average = Object.values(scores).reduce((acc, val) => acc + val, 0) / Object.keys(scores).length;
    return { [Object.keys(student)[0]]: { average: average } };
});

console.log(outputt);