// ২. যদি তোর বাসায় মেহমান আসে, প্রথমে জিজ্ঞেস করবি, তারা চা খাবে কি না। যাদি চা খেতে চায়, তাহলে জিজ্ঞেস করবি, সাথে বিস্কুট খাবে কি না। না চাইলে বলবি, 'শুধু চা রেডি।' আর যদি চা-ও না খেতে চায়, বলবি, বসে বসে স্টার জলসা দেখুন


const drinkTea = true;
const eatBiscuit = true;
if (drinkTea) {
    if (eatBiscuit) {
        console.log('বিস্কুট সহ চা রেডি');
    }
    else {
        console.log('শুধু চা রেডি');
    }

}
else {
    console.log('বসে বসে স্টার জলসা দেখুন');
}