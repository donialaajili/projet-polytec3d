const titleElement = document.getElementById("typewriter-title");
const titleText = "Ils m'ont fait confiance !";
let charIndex = 0;

function typeWriter() {
    if (charIndex < titleText.length) {
        titleElement.textContent += titleText.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 50); // Délai entre chaque caractère (ajustez selon vos préférences)
    } else {
        setTimeout(eraseText, 1000); // Attendre 1 seconde avant d'effacer le texte
    }
}

function eraseText() {
    if (charIndex > 0) {
        const newText = titleText.substring(0, charIndex - 1);
        titleElement.textContent = newText;
        charIndex--;
        setTimeout(eraseText, 30); // Délai entre chaque caractère effacé (ajustez selon vos préférences)
    } else {
        charIndex = 0;
        setTimeout(typeWriter, 1000); // Attendre 1 seconde avant de recommencer l'écriture
    }
}

// Démarrez l'animation typewriter
typeWriter();

