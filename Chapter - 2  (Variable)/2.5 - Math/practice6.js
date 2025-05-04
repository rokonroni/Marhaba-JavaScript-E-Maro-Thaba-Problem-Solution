//৬. তোর কাছে 500 টাকা আছে, প্রতিবার তুই 75 টাকা খরচ করবি। কয়বার খরচ করতে পারবি আর শেষে কয় টাকা বাকি থাকবে, সেটা বের করার একটা প্রোগ্রাম লিখ।


const totalMoney = 500;
const expensePerTime = 75;

const remainder = totalMoney % expensePerTime;
const expenseTimes = (totalMoney - remainder) / expensePerTime;

console.log(expenseTimes, 'times I can expense money');
console.log(remainder, 'tk will remain');
