// ৪. তুই 3.456 আর 2.789 যোগ করলি। আউটপুটে তুই দশমিকের পর মাত্র 2 ঘর পর্যন্ত দেখতে চাস। কীভাবে দেখাবি? একটা প্রোগ্রাম লিখ। 


let firstNumber = 3.456;
let secondNumber = 2.789;
const totalNumber = parseFloat(firstNumber + secondNumber).toFixed(2);
console.log(totalNumber);