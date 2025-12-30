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
