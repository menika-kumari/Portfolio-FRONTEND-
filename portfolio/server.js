// ===== Hamburger Menu Toggle =====
function hamburg() {
    document.querySelector(".dropdown").style.display = "flex";
}

function cancel() {
    document.querySelector(".dropdown").style.display = "none";
}

// ===== Typewriter Effect =====
const typewriterText = document.querySelector(".typewriter-text");
const words = ["Frontend Web Developer", "Data Analyst", "Prompt Engineer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
        charIndex--;
        typewriterText.textContent = currentWord.substring(0, charIndex);
        if (charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    } else {
        charIndex++;
        typewriterText.textContent = currentWord.substring(0, charIndex);
        if (charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(type, 1000); // Pause before deleting
            return;
        }
    }
    setTimeout(type, isDeleting ? 70 : 150);
}
type();

// ===== Scroll to Contact Section on Button Click =====
document.querySelectorAll("button").forEach(btn => {
    if (btn.textContent.toLowerCase().includes("hire") || btn.textContent.toLowerCase().includes("chat")) {
        btn.addEventListener("click", () => {
            const contactSection = document.getElementById("contact");
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    }
});

// ===== AOS Initialization Fix =====
AOS.init({
    offset: 0,
    duration: 1200,
    once: true
});
