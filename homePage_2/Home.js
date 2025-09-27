
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
  