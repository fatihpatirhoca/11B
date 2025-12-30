const students = [
    "ESRA ÇETİN",
    "ASİYE KÖSE",
    "ZÜBEYDE ÖZ",
    "BELİNAY YALÇIN",
    "NEZİFE UYSAL",
    "DUDU NAZ KENÇEL",
    "AYŞE YILDIRIM",
    "DÜRÜYE İVGİN",
    "CEREN KUZUCU",
    "ZEHRA AKKANAT",
    "TUĞÇE KASAP",
    "AYŞENAZ AYDEMİR",
    "HATİCE KURT",
    "KADRİYE DOĞAN",
    "ŞERİFE KARA",
    "YASEMİN ÖZTÜRK"
];

document.addEventListener('DOMContentLoaded', () => {
    const studentGrid = document.getElementById('studentGrid');
    const searchInput = document.getElementById('studentSearch');
    const countDisplay = document.getElementById('count');

    function renderStudents(filter = '') {
        studentGrid.innerHTML = '';
        const filtered = students.filter(name =>
            name.toLowerCase().includes(filter.toLowerCase())
        );

        filtered.forEach((name, index) => {
            const card = document.createElement('a');
            card.href = `project-template.html`; // Linking to template for demo
            card.className = 'student-card';
            card.style.animationDelay = `${index * 0.05}s`;

            card.innerHTML = `
                <div class="std-icon">
                    <i class="fas fa-user-graduate"></i>
                </div>
                <h4>${name}</h4>
                <div class="view-btn">
                    Projeyi Görüntüle <i class="fas fa-chevron-right"></i>
                </div>
            `;

            studentGrid.appendChild(card);
        });

        countDisplay.innerText = filtered.length;
    }

    // Initial Render
    renderStudents();

    // Search Logic
    searchInput.addEventListener('input', (e) => {
        renderStudents(e.target.value);
    });

    // Theme Switcher Logic
    const themeBtns = document.querySelectorAll('.theme-btn');

    // Load Saved Theme
    const savedTheme = localStorage.getItem('nh-mtal-theme') || 'cyber';
    setTheme(savedTheme);

    themeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const theme = btn.getAttribute('data-theme');
            setTheme(theme);
        });
    });

    function setTheme(theme) {
        // Remove all themes
        document.body.classList.remove('theme-emerald', 'theme-sunset', 'theme-midnight', 'theme-royal');

        // Remove active class from buttons
        themeBtns.forEach(b => b.classList.remove('active'));

        // Add selected theme
        if (theme !== 'cyber') {
            document.body.classList.add(`theme-${theme}`);
        }

        // Set active button
        const activeBtn = document.querySelector(`.theme-btn[data-theme="${theme}"]`);
        if (activeBtn) activeBtn.classList.add('active');

        // Save preference
        localStorage.setItem('nh-mtal-theme', theme);

        // Update star colors based on theme
        const stars = document.querySelectorAll('.stars div');
        const starColor = theme === 'emerald' ? '#10b981' : (theme === 'sunset' ? '#f97316' : '#fff');
        stars.forEach(s => s.style.background = starColor);
    }

    // Add some cool star background elements
    const starsContainer = document.querySelector('.stars');
    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.style.position = 'absolute';
        star.style.width = Math.random() * 3 + 'px';
        star.style.height = star.style.width;
        star.style.background = 'white';
        star.style.borderRadius = '50%';
        star.style.top = Math.random() * 100 + '%';
        star.style.left = Math.random() * 100 + '%';
        star.style.opacity = Math.random();
        star.style.boxShadow = '0 0 10px white';
        starsContainer.appendChild(star);
    }
});
