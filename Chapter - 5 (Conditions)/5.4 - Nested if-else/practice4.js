// ৪. তোর বাসার ফ্রিজে খাবার আছে কি না, চেক করবি। যদি থাকে, খাবার গরম করবি। আর যদি না থাকে, চেক করবি, ফুড ডেলিভারি অ্যাপ কাজ করছে কি না। কাজ করলে অর্ডার করবি, না হলে বলবি, 'আজকে আমি রোজা।'

const hasFood = false;
const foodDeliveryWorking = true;

if (hasFood) {
    console.log('খাবার গরম করলাম।');
}
else {
    if (foodDeliveryWorking) {
        console.log('ফুড ডেলিভারি অ্যাপ কাজ করছে তাই ফুড ডেলিভারি অ্যাপে অর্ডার করলাম');
    }
    else {
        console.log('আজকে আমি রোজা');
    }
}
