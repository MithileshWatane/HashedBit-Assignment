// 1. Write code to display from 1 to 100 but just even numbers.
for (let i = 2; i <= 100; i += 2) {
    console.log(i);
}




// 2. Write a function to calculate which can add, subtract, multiply and divide two numbers. Use switch inside function.
function calculate(operation, num1, num2) {
    switch (operation) {
        case 'add':
            return num1 + num2;
        case 'subtract':
            return num1 - num2;
        case 'multiply':
            return num1 * num2;
        case 'divide':
            if (num2 === 0) {
                return 'Cannot divide by zero';
            } else {
                return num1 / num2;
            }
        default:
            return 'Invalid';
    }
}





// 3. You need to write a function findTax() that takes a number type variable as an argument which is the salary of a person. You need to calculate the tax amount on his salary by using the Js switch control flow. The tax rates are given below.

// if 500000 >= salary > 0 then 0% tax on the entire salary.
// If 1000000 >= salary > 500000 then 10% tax on the entire salary.
// If 1500000 >= salary > 1000000 then 20% tax on the entire salary.
// If the salary > 1500000 then 30% tax on the entire salary.

function findTax(salary) {
    let taxRate;
    switch (true) {
        case (salary > 0 && salary <= 500000):
            taxRate = 0;
            break;
        case (salary > 500000 && salary <= 1000000):
            taxRate = 0.1;
            break;
        case (salary > 1000000 && salary <= 1500000):
            taxRate = 0.2;
            break;
        case (salary > 1500000):
            taxRate = 0.3;
            break;
        default:
            return 'Invalid salary';
    }
    return salary * taxRate;
}

// 4. Write a function to perform this. You are given two numbers n1 and n2. You need to find the sum of the products of their corresponding digits. So, for a number n1= 6 and n2 = 34, you'll do (6*4)+(0*3) = 24.

function sumOfProducts(n1, n2) {
    let str1 = n1.toString();
    let str2 = n2.toString();

    while (str1.length < str2.length) str1 = '0' + str1;
    while (str2.length < str1.length) str2 = '0' + str2;

    let sum = 0;
    for (let i = 0; i < str1.length; i++) {
        sum += parseInt(str1[i]) * parseInt(str2[i]);
    }
    return sum;
}

console.log(sumOfProducts(6, 34)); // 24
console.log(sumOfProducts(123, 456)); // 32