const texts = {
    en: "Here is the English translation of Bhagavad Gita...",
    es: "Aquí está la traducción al español del Bhagavad Gita...",
    hi: "यहाँ भगवद गीता का हिंदी अनुवाद है..."
};

const images = {
    en: ["/bg.jpg", "/bg.jpg"],
    es: ["image1_es.jpg", "image2_es.jpg"],
    hi: ["image1_hi.jpg", "image2_hi.jpg"]
};

function changeLanguage(lang) {
    document.getElementById('text-content').innerText = texts[lang] || texts['en'];
    
    const imageSection = document.getElementById('images');
    imageSection.innerHTML = '';
    images[lang].forEach(imgSrc => {
        const img = document.createElement('img');
        img.src = imgSrc;
        imageSection.appendChild(img);
    });
}

// Set default language
changeLanguage('en');

