// ৫. কোনো বইয়ের পৃষ্ঠাসংখ্যা 100-এর কম হলে বলবি "Small book", 100 থেকে 500-এর মধ্যে হলে বলবি "Mid-size book", আর 500-এর বেশি হলে বলবি "heart-attack size book"

const bookPages = 577;

if (bookPages < 100) {
    console.log('Small Book');
}
else if (bookPages >= 100 && bookPages <= 500) {
    console.log('Mid Size Book');
}
else if (bookPages > 500) {
    console.log('heart-attack size book');
}