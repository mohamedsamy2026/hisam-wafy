
// مصفوفة الصور الخاصة بالخلفية
const images = [
  "images/OIP.jpeg",
  "images/download.webp",
  "images/OIP (1).jpeg",
  "images/OIP.webp",
  "images/OIP.webp"
];

// اختيار العنصر الخلفية
const background = document.querySelector(".background");

// متغير لتتبع الصورة الحالية
let currentIndex = 0;

// دالة لتغيير الصورة
function changeBackground() {
  background.style.backgroundImage = `url(${images[currentIndex]})`;
  currentIndex = (currentIndex + 1) % images.length; // للانتقال للصورة التالية وإعادة من الأول
}

// تغيير الصورة أول ما الصفحة تفتح
changeBackground();

// تغيير الصورة كل 3 ثواني
setInterval(changeBackground, 3000);
