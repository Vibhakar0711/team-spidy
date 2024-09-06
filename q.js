const texts = {
    en: "Here is the English translation of Quran...",
    The Bhagavad Gita (/ˈbʌɡəvəd ˈɡiːtɑː/;[1] Sanskrit: भगवद्गीता, IPA: [ˌbʱɐɡɐʋɐd ˈɡiːtɑː], romanized: bhagavad-gītā, lit. 'God's Song'),[a] often referred to as the Gita (IAST: gītā), is a 700-verse Hindu scripture, which is part of the epic Mahabharata. The Bhagavad Gita is dated to the second half of the first millennium BCE. Although Hinduism includes several denominations, the Gita holds a unique pan-Hindu influence as the most prominent sacred text. It has been said that if there is any one text that comes near to embodying the totality of Hindu thought, it is the Bhagavad Gita.

The Bhagavad Gita is set in a narrative framework of dialogue between the Pandava prince Arjuna and his charioteer guide Krishna, an avatar of Vishnu. At the start of the Kurukshetra War between the Pandavas and the Kauravas, Arjuna despairs thinking about the violence and death the war will cause in the battle against his kin and becomes emotionally preoccupied with a dilemma. Wondering if he should renounce the war, Arjuna seeks the counsel of Krishna, whose answers and discourse constitute the text. Krishna counsels Arjuna to "fulfil his Kshatriya (warrior) duty" for the upholding of dharma. The Krishna–Arjuna dialogue covers a broad range of spiritual topics, touching upon moral and ethical dilemmas, and philosophical issues that go far beyond the war that Arjuna faces.
 The setting of the text in a battlefield has been interpreted as an allegory for the struggles and vagaries of human life.

Summarizing the Upanishadic conceptions of God, the Gita posits the existence of an individual self (Atman) and the supreme self (Brahman) within each being.[note 1] The dialogue between the prince and his charioteer has been interpreted as a metaphor for an immortal dialogue between the human self and God.[note 2] Commentators of Vedanta read varying notions in the Bhagavad Gita about the relationship between the Atman (individual Self) and Brahman (supreme Self); Advaita Vedanta affirms on the non-duality of Atman and Brahman, whereas Vishishtadvaita asserts qualified non-dualism with Atman and Brahman being related but different in certain aspects, while Dvaita Vedanta declares the complete duality of Atman and Brahman.[note 3]

As per traditional accounts of Hindu mythology, the Gita was written by Ganesha, as told to him by the sage Veda Vyasa. The Gita forms the chapters 23–40 in book 6 of the Mahabharata called the Bhishma Parva, and forms a central text in the Vaishnava Hindu tradition and prasthanatrayi. The Gita covers the core beliefs of Hinduism; including difference between the transient body and the eternal self, the transmigration of self, actuality of gunas, necessity of doing one's duties, and the importance of detachment. The text analyses the paths of Jñāna, Bhakti, Karma, and Rāja yogas for the purpose of Moksha (spiritual liberation) and asserts that the path of Bhakti (devotion) is the foremost and easiest of all.[note 4] Numerous classical and modern thinkers have written commentaries on the Gita with differing views on its essence and essentials
    es: "Aquí está la traducción al español del Quran...",
    hi: "यहाँ भगवद गीता का हिंदी अनुवाद है..."
};

const images = {
    en: ["/q.jpg", "/q.jpg"],
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

