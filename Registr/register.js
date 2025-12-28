// الحصول على النموذج
const form = document.getElementById("registerForm");

// حدث عند الضغط على زر التسجيل
form.addEventListener("submit", function(event) {
  event.preventDefault(); // منع الإرسال التلقائي

  // الحصول على القيم من الحقول
  const username = document.getElementById("username").value.trim();
  const fullname = document.getElementById("fullname").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const age = document.getElementById("age").value;
  const stage = document.getElementById("stage").value;

  // التحقق من تطابق كلمة المرور
  if (password !== confirmPassword) {
    alert("⚠️ كَلِمَتَا الْمُرُورِ غَيْرُ مُتَطَابِقَتَيْنِ!");
    return;
  }

  // التحقق من إدخال المرحلة الدراسية
  if (stage === "") {
    alert("⚠️ يُرْجَى اخْتِيَارُ الْمَرْحَلَةِ الدِّرَاسِيَّةِ!");
    return;
  }

  // التحقق من السن
  if (age < 6 || age > 100) {
    alert("⚠️ السِّنُّ غَيْرُ صَالِحٍ!");
    return;
  }

  // لو كل شيء تمام
  alert("✅ تَمَّ التَّسْجِيلُ بِنَجَاحٍ، أَهْلًا بِكَ يَا " + username + "!");
});
