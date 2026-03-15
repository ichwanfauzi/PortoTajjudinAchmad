// ==========================================

// PENANDA: DATABASE (HANYA EDIT DI SINI)

// ==========================================

const DATABASE = {

    professional: [

        {

            id: "Intership KAI",

            tag: "",

            title: "Intern Engineer",

            company: "Kereta Api Indonesia (KAI)",

            github: "", // Kosongkan jika tidak ada repo

            desc: "Menjadi teknisi mesin",

            media: [""]

        },

                {

            id: "PIK-R Abisatya",

            tag: "",

            title: "Public Relations",

            company: "Pusat Informasi Konseling Remaja Ungaran Timur (PIK-R Abisatya)",

            github: "", // Kosongkan jika tidak ada repo

            desc: "Menjadi narahubung PIK-R",

            media: [""]

        },


                {

            id: "MPK SMK Negeri 7 Semarang",

            tag: "",

            title: "Public Order Division",

            company: "Majelis Perwakilan Kelas (MPK) SMK Negeri 7 Semarang",

            github: "", // Kosongkan jika tidak ada repo

            desc: "BErtanggung Jawab mengatur ketertiban siswa",

            media: [""]

        }

    
    ],

    projects: [

        {

            id: "Design",

            tag: "Autocad - 2024",

            title: "Belt Drive Design",

            company: "CAD Design",

            github: "", // Tambahkan repo di sini

            desc: "Pengembangan website perpustakaan berbasis C++.",

            media: [""]

        },


        {

            id: "Design",

            tag: "Autocad - 2024",

            title: "Mikrometer Design",

            company: "CAD Design",

            github: "", // Tambahkan repo di sini

            desc: "Pengembangan website perpustakaan berbasis C++.",

            media: [""]

        },

    ]

};



// ==========================================

// PENANDA: SISTEM OTOMATIS (JANGAN DIUBAH)

// ==========================================



function init() {

    renderGrid('prof-grid', DATABASE.professional);

    renderGrid('project-grid', DATABASE.projects);

    runTypewriter();

}



function renderGrid(containerId, data) {

    const container = document.getElementById(containerId);

    container.innerHTML = data.map(item => `

        <div class="card" onclick="showDetails('${item.id}')">

            ${item.github ? `

                <a href="${item.github}" target="_blank" class="github-repo-link" onclick="event.stopPropagation()">

                    <i class="fab fa-github"></i>

                </a>

            ` : ''}

            <div class="tag" style="font-size:10px; color:var(--primary); font-weight:700;">${item.tag}</div>

            <h3 style="margin: 15px 0 5px 0;">${item.title}</h3>

            <p style="font-size: 13px; color: var(--secondary); margin:0;">${item.company}</p>

            <p style="font-size: 11px; opacity:0.4; margin-top:15px;"><i class="fas fa-search-plus"></i> Lihat Dokumentasi</p>

        </div>

    `).join('');

}



function showDetails(id) {

    const allData = [...DATABASE.professional, ...DATABASE.projects];

    const item = allData.find(d => d.id === id);

    if(!item) return;



    const content = document.getElementById('details-content');

    content.innerHTML = `

        <div style="animation: fadeIn 0.5s ease;">

            <span class="tag" style="background:rgba(0, 210, 255, 0.1); color:var(--primary); padding:5px 15px; border-radius:5px; font-size:12px;">${item.tag}</span>

            <h2 style="font-size:2.5rem; margin:15px 0 5px 0; color:var(--primary);">${item.title}</h2>

            <p style="color:var(--secondary); font-weight:600; margin-bottom:30px;">${item.company}</p>

            <p style="line-height:1.8; opacity:0.8; max-width:800px;">${item.desc}</p>

            <h3 class="section-title" style="margin-top:60px;">Dokumentasi & Media</h3>

            <div class="doc-grid">

                ${item.media.map(m => `<img src="${m}" onerror="this.src='https://via.placeholder.com/400x300?text=Image+Not+Found'">`).join('')}

            </div>

        </div>

    `;



    showPage('details');

}



function showPage(page) {

    document.getElementById('home-page').style.display = page === 'home' ? 'block' : 'none';

    document.getElementById('details-page').style.display = page === 'details' ? 'block' : 'none';

    window.scrollTo(0,0);

}



function runTypewriter() {

    const texts = ["Software Dev", "Design Grapic"];

    let count = 0; let index = 0;

    (function type() {

        if(count === texts.length) count = 0;

        let currentText = texts[count];

        let letter = currentText.slice(0, ++index);

        document.getElementById("typewriter").textContent = `> ${letter}_`;

        if(letter.length === currentText.length) { count++; index = 0; setTimeout(type, 2000); }

        else { setTimeout(type, 100); }

    }());

}



init();