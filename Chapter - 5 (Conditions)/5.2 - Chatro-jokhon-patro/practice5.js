// ৫. তোর ফ্রিজের ভেতর ডিমের সংখ্যা 12-এর বেশি অথবা মুরগি না থাকে, তাহলে তুই ডিমের কোরমা রান্না করবি। আর না হলে পাউরুটি আর কলা খাবি। এমন একটা কোড লিখ।


const haveEggs = 15;
const haveChicken = false;
if (haveEggs > 12 || haveChicken == false) {
    console.log('ডিমের কোরমা রান্না করবো');
}
else {
    console.log('পাউরুটি আর কলা খাবো');
}