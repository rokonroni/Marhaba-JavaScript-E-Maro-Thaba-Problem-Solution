// ২. একটা প্রোগ্রাম লিখ। যা চেক করবে, একজন শিক্ষার্থী ভর্তি হওয়ার যোগ্য কি না। গণিত স্কোর 80 -এর বেশি অথবা ইংরেজি স্কোর 85-এর বেশি হতে হবে। আর এইগুলোর কোনোটাই সত্যি না হলে বলবি- তোকে বিয়ে দিয়ে দিব।


const mathScore = 84;
const englishScore = 70;
if (mathScore > 80 || englishScore > 85) {
    console.log('ভর্তি হয়ে যা');
}
else {
    console.log('তোকে বিয়ে দিয়ে দিব');
}