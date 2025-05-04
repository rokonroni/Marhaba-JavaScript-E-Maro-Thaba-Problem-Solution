// ৩. তোর কাছে 60 টাকা আছে, তুই যদি প্রতিবার 15 টাকা করে খরচ করিস, কয়বার খরচ করতে পারবি? এবং খরচের পর কয় টাকা বাকি থাকবে, সেটা বের করতে একটা প্রোগ্রাম লিখ।

const hasMoney = 60;
const oneTimeCanExpenseMoney = 15;
const totalTimesExpenseMoney = hasMoney / oneTimeCanExpenseMoney;
console.log('Total:', totalTimesExpenseMoney, 'times I can expense money.');