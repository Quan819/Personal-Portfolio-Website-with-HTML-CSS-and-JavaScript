document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.getElementById("typing-text");

    const phrase = [
        "An undergraduate student from Universiti Teknologi Malaysia (UTM).",
        "Currently study Graphic and Multimedia Software course.",
        "Has some experience on different programming languages, such as C++, HTML, and Java."
    ];

    let phraseIndex = 0;
    let characterIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentPhrase = phrase[phraseIndex];

        if (isDeleting) {
            textElement.textContent = currentPhrase.substring(0, characterIndex - 1);
            characterIndex--;
        }
        else {
            textElement.textContent = currentPhrase.substring(0, characterIndex + 1);
            characterIndex++;
        }

        let typingSpeed = 100;

        if (isDeleting) {
            typingSpeed = 50;
        }

        if (!isDeleting && characterIndex === currentPhrase.length) {
            typingSpeed = 2000;
            isDeleting = true;
        }
        else if (isDeleting && characterIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrase.length;
            typingSpeed = 500;
        }

        setTimeout(typeEffect, typingSpeed);
    }

    typeEffect();
});