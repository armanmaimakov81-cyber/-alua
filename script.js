const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const startScreen = document.getElementById("startScreen");
const birthdayScreen = document.getElementById("birthdayScreen");

const noTexts = [
    "ну пожалуйста",
    "не стоит",
    "прошу",
    "подумай еще раз"
];

let noClicks = 0;

noBtn.addEventListener("click", () => {
    if (noClicks < 4) {
        noBtn.textContent = noTexts[noClicks];
        noClicks++;

        yesBtn.style.transform = `scale(${1 + noClicks * 0.18})`;

        const newWidth = Math.max(80 - noClicks * 15, 35);
        const newPadding = Math.max(38 - noClicks * 7, 12);

        noBtn.style.paddingLeft = `${newPadding}px`;
        noBtn.style.paddingRight = `${newPadding}px`;
        noBtn.style.fontSize = `${Math.max(17 - noClicks * 2, 11)}px`;

        if (noClicks === 4) {
            noBtn.style.transform = "scale(0.55)";
        }
    }
});
const songButton = document.getElementById("songButton");
const playerContainer = document.getElementById("playerContainer");

songButton.addEventListener("click", () => {
    playerContainer.classList.add("show");
    songButton.style.display = "none";
});
yesBtn.addEventListener("click", () => {
    startScreen.classList.remove("active");

    setTimeout(() => {
        birthdayScreen.classList.add("active");
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, 200);
});
