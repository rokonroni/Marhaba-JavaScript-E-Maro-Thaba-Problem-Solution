// ৭. একজন শিক্ষার্থীকে পরীক্ষা দিতে দেয়া হবে, যদি তার উপস্থিতি 80 শতাংশের বেশি এবং হোমওয়ার্ক জমা দেয়া থাকে। নচেৎ অটো ফেল। এই শর্তের জন্য প্রোগ্রাম লিখ।

const present = 90;
const homeWorkSubmit = true;
if (present > 80 && homeWorkSubmit) {
    console.log('পরীক্ষা দিতে দেয়া হবে');
}
else {
    console.log(' অটো ফেল');
}