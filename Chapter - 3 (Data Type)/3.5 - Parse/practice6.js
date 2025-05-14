// ৬. ধর, তোর কাছে '10.5678' আর '5.4321' আছে। তুই আউটপুটে দশমিকের পর 1 ঘর পর্যন্ত দেখতে চাস। সেটা কীভাবে দেখাবি?


let firstNumber = 10.5678;
let secondNumber = 5.4321;
let totalNumber = parseFloat(firstNumber + secondNumber).toFixed(1);
console.log(totalNumber);