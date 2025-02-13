// Open letter on button click
document.getElementById("openLetter").addEventListener("click", function() {
    document.getElementById("letterContent").classList.toggle("hidden");
});

// Floating hearts effect
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Generate hearts every 500ms
setInterval(createHeart, 500);
