// ১. ধর, তুই 1 থেকে 30 পর্যন্ত সংখ্যা প্রিন্ট করতে চাস, কিন্তু তোর ইচ্ছা হলো, 15-এর পরে প্রিন্ট করা বন্ধ হবে, থেমে যাবে।


for (let num = 1; num <= 30; num++) {
    console.log(num);
    if (num == 15) {
        break;
    }
}