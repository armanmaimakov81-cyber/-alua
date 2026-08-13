const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const startScreen = document.getElementById("startScreen");
const birthdayScreen = document.getElementById("birthdayScreen");
const songScreen = document.getElementById("songScreen");

const songButton = document.getElementById("songButton");
const backButton = document.getElementById("backButton");
const backButtonBottom = document.getElementById("backButtonBottom");

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

        noBtn.style.paddingLeft = `${Math.max(38 - noClicks * 7, 12)}px`;
        noBtn.style.paddingRight = `${Math.max(38 - noClicks * 7, 12)}px`;
        noBtn.style.fontSize = `${Math.max(17 - noClicks * 2, 11)}px`;

        if (noClicks === 4) {
            noBtn.style.transform = "scale(0.55)";
        }
    }
});

yesBtn.addEventListener("click", () => {
    startScreen.classList.remove("active");
    birthdayScreen.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

songButton.addEventListener("click", () => {
    birthdayScreen.classList.remove("active");
    songScreen.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

function returnToBirthday() {
    songScreen.classList.remove("active");
    birthdayScreen.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

backButton.addEventListener("click", returnToBirthday);
backButtonBottom.addEventListener("click", returnToBirthday);
