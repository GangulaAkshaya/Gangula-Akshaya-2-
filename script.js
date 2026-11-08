const headings = document.querySelectorAll(".side-heading");

const startButton = document.getElementById("startButton");

const welcomeScreen = document.getElementById("welcomeScreen");

const portfolioContent = document.getElementById("portfolioContent");

let currentIndex = 0;

const headingInterval = setInterval(() => {

    headings[currentIndex].classList.remove("active");

    currentIndex++;

    if (currentIndex < headings.length) {

        headings[currentIndex].classList.add("active");

    } else {

        clearInterval(headingInterval);

        startButton.style.display = "block";

        startButton.style.animation = "appear 1.5s ease";

    }

}, 10000);


function openPortfolio() {

    welcomeScreen.style.display = "none";

    portfolioContent.style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}
