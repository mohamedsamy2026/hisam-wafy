
    // عناصر DOM
    const addCard = document.getElementById('add-card');
    const modal = document.getElementById('modal');
    const openAdd = document.getElementById('open-add');
    const cancelModal = document.getElementById('cancel-modal');
    const startAnalysis = document.getElementById('start-analysis');
    const analysisArea = document.getElementById('analysis-area');
    const progressBar = document.getElementById('progress-bar');

    function openModal(){
      modal.style.display = 'flex';
      modal.querySelector('.modal').scrollTop = 0;
    }
    function closeModal(){
      modal.style.display = 'none';
      // reset
      analysisArea.style.display = 'none';
      progressBar.style.width = '0%';
    }

    addCard.addEventListener('click', openModal);
    addCard.addEventListener('keypress', (e)=> { if(e.key === 'Enter') openModal(); });
    openAdd.addEventListener('click', openModal);
    cancelModal.addEventListener('click', closeModal);

    // Simulate analysis
    startAnalysis.addEventListener('click', ()=>{
      analysisArea.style.display = 'block';
      let pct = 0;
      const steps = [
        {text:'استخراج النصوص والصور (OCR) من الملفات', duration:1000},
        {text:'تفريغ نصوص الفيديو (التفريغ الصوتي)', duration:1200},
        {text:'تحليل وتجزئة المنهج إلى Sessions', duration:1500}
      ];

      // simple async simulation of steps
      (async function simulate(){
        for(let i=0;i<steps.length;i++){
          let step = steps[i];
          let start = Date.now();
          let stepProgress = 0;
          while(stepProgress < 100){
            // increase smoothly
            pct += Math.random() * 6; // vary speed
            if(pct > 100) pct = 100;
            progressBar.style.width = pct + '%';
            await new Promise(r => setTimeout(r, 120));
            if(pct >= ( (i+1) / steps.length) * 100) break;
          }
          // short delay to mimic processing
          await new Promise(r => setTimeout(r, 300));
        }
        progressBar.style.width = '100%';
        await new Promise(r => setTimeout(r, 400));
        alert('اكتمل تحليل المصادر! تم اقتراح Sessions ويمكنك الآن مراجعتها في صفحة الكورس.');
        closeModal();
      })();
    });

    // close modal by clicking backdrop
    modal.addEventListener('click', (e)=>{
      if(e.target === modal) closeModal();
    });

    // Other buttons (demo actions)
    document.getElementById('view-courses').addEventListener('click', ()=>{
      alert('جارٍ الانتقال إلى صفحة كورساتي (هذه تجربة عرضية).');
    });
    document.getElementById('view-suggestions').addEventListener('click', ()=>{
      alert('جارٍ عرض الاقتراحات، سيتم اقتراح كورسات بناءً على اهتماماتك.');
    });
    document.getElementById('btn-settings').addEventListener('click', ()=> alert('فتح الإعدادات (تجريبي).'));
    document.getElementById('btn-notifs').addEventListener('click', ()=> alert('عرض الإشعارات (تجريبي).'));
    document.getElementById('btn-logout').addEventListener('click', ()=> {
      if(confirm('هل تريد الخروج من الحساب؟')) alert('تم تسجيل الخروج.');
    });

    // keyboard accessibility: ESC to close modal
    document.addEventListener('keydown', (e)=>{
      if(e.key === 'Escape') closeModal();
    });












    








// ==========================================
// الوضع الليلي/النهاري مع تغيير اللوجو
// ==========================================



(function(){
  const KEY = 'mode';
  const body = document.body;
  const toggle = document.getElementById('toggle');
  const circle = document.getElementById('circle');
  const logo = document.getElementById('logo'); // ضع هنا id الصورة الرئيسية

  // تطبيق الوضع المحفوظ أو الوضع الافتراضي
  const saved = localStorage.getItem(KEY) || 'light-mode';
  applyMode(saved, false);

  function toggleMode(){
    const isDark = body.classList.contains('dark-mode');
    const next = isDark ? 'light-mode' : 'dark-mode';
    applyMode(next, true);
  }












  function applyMode(mode, save){
    if(mode === 'dark-mode'){
      body.classList.remove('light-mode'); body.classList.add('dark-mode');
      circle.textContent = '🌙';
      if(logo) logo.src = 'img//Gemini_Generated_Image_ikgx5sikgx5sikgx.png'; // الصورة البديلة
      toggle.setAttribute('aria-pressed','true');
    } else {
      body.classList.remove('dark-mode'); body.classList.add('light-mode');
      circle.textContent = '☀️';
      if(logo) logo.src = 'img//Gemini_Generated_Image_xtah4kxtah4kxtah.png'; // الصورة الأصلية
      toggle.setAttribute('aria-pressed','false');
    }
    if(save) localStorage.setItem(KEY, mode);
  }

  toggle.addEventListener('click', toggleMode);
  toggle.addEventListener('keydown', e => { 
    if(e.key === 'Enter' || e.key === ' ') { 
      e.preventDefault(); 
      toggleMode(); 
    } 
  });
})();



















// ==========================================
//   الأقسام (أولى وتانية وتالته ثانوي)
// ==========================================



document.addEventListener("DOMContentLoaded", function () {
  function setupToggle(btnSelector, wrapperSelector) {
    const btn = document.querySelector(btnSelector);
    const section = document.querySelector(wrapperSelector);
    let isOpen = false;

    section.style.overflow = "hidden";
    section.style.maxHeight = "0";
    section.style.display = "none";


    btn.addEventListener("click", function () {
      if (!isOpen) {
        section.style.display = "block";
        section.style.maxHeight = section.scrollHeight + "px";
        const rect = section.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const target = rect.top + scrollTop - 20;
        window.scrollTo({ top: target, behavior: "smooth" });
        isOpen = true;
      } else {
        section.style.maxHeight = "0";
        setTimeout(() => { section.style.display = "none"; }, 500);
        isOpen = false;
      }
    });

    window.addEventListener("resize", function () {
      if (isOpen) {
        section.style.maxHeight = section.scrollHeight + "px";
      }
    });
  }

  // ربط كل الزرار بالغلاف

  setupToggle(".toggle-btn", ".materials-wrapper"); //اولي ثانوي
  setupToggle(".toggle-btn2", ".materials-wrapper2");//تانيه ثانوي
  setupToggle(".toggle-btn4", ".materials-wrapper4");//تالته ثانوي
});


















const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", function() {
  if (window.scrollY > 300) {
    scrollTopBtn.classList.add("show");
  } else {
    scrollTopBtn.classList.remove("show");
  }
});

scrollTopBtn.addEventListener("click", function() {
  window.scrollTo({ top: 0, behavior: "smooth" });
});








