const content = {
    en: {
        "1.1": {
            text: "In the city of Ayodhya, King Dasharatha ruled wisely. He had three queens and four sons, among whom the eldest was Rama.",
            audio: "audio_en_1.mp3"
        },
        "1.2": {
            text: "The king decided to crown Rama as the king, but due to a promise made to his second queen, he had to exile Rama to the forest.",
            audio: "audio_en_2.mp3"
        }
        // Add more content here
    },
    hi: {
        "1.1": {
            text: "अयोध्या नगरी में, राजा दशरथ बुद्धिमानी से शासन कर रहे थे। उनके तीन रानियां और चार पुत्र थे, जिनमें से सबसे बड़े राम थे।",
            audio: "audio_hi_1.mp3"
        },
        "1.2": {
            text: "राजा ने राम को राजा बनाने का निर्णय लिया, लेकिन अपनी दूसरी रानी को की गई प्रतिज्ञा के कारण, उन्हें राम को वनवास पर भेजना पड़ा।",
            audio: "audio_hi_2.mp3"
        }
        // Add more content here
    },
    gu: {
        "1.1": {
            text: "અયોધ્યામાં, રાજા દશરથ બુદ્ધિમાન રીતે શાસન કરતા હતા. તેમના ત્રણ રાણીઓ અને ચાર પુત્રો હતા, જેમાંથી મોટો રામ હતો.",
            audio: "audio_gu_1.mp3"
        },
        "1.2": {
            text: "રાજાએ રામને રાજા બનાવવાનો નિર્ણય લીધો, પરંતુ પોતાની બીજી રાણી સાથેની વચનના કારણે, તેમણે રામને વનમાં જવા મોકલવા પડ્યું.",
            audio: "audio_gu_2.mp3"
        }
        // Add more content here
    }
};

function displayContent(lang) {
    const bookContentSection = document.getElementById('book-content');
    bookContentSection.innerHTML = '';

    for (const [key, value] of Object.entries(content[lang])) {
        const sectionDiv = document.createElement('div');
        sectionDiv.classList.add('section');
        
        const textPara = document.createElement('p');
        textPara.innerText = `Text: ${value.text}`;
        
        const audioPlayer = document.createElement('audio');
        audioPlayer.controls = true;
        audioPlayer.classList.add('audio-player');
        audioPlayer.src = value.audio;
        
        sectionDiv.appendChild(textPara);
        sectionDiv.appendChild(audioPlayer);
        bookContentSection.appendChild(sectionDiv);
    }
}

function changeLanguage(lang) {
    displayContent(lang);
}

// Set default language
changeLanguage('en');
