const cards = document.querySelectorAll(".card"),
timeTag = document.querySelector(".time b"),
scoreTag = document.querySelector(".score b"),
refreshBtn = document.querySelector(".details button");


let maxTime = 20;
let timeLeft = maxTime;
let score = 0;
let matchedCard = 0;
let disableDeck = false;
let isPlaying = false;
let cardOne, cardTwo, timer;

function initTimer() {
    if(timeLeft <= 0) {
        return clearInterval(timer);
    }
    timeLeft--;
    timeTag.innerText = timeLeft;
}

function flipCard({target: clickedCard}) {
    if(!isPlaying) {
        isPlaying = true;
        timer = setInterval(initTimer, 1000);
    }
    if(clickedCard !== cardOne && !disableDeck && timeLeft > 0) {
        clickedCard.classList.add("flip");
        if(!cardOne) {
            return cardOne = clickedCard;
        }
        cardTwo = clickedCard;
        disableDeck = true;
        let cardOneImg = cardOne.querySelector(".back-view img").src,
        cardTwoImg = cardTwo.querySelector(".back-view img").src;
        matchCards(cardOneImg, cardTwoImg);
    }

    if (timeLeft<=0){
        window.alert("Game Over. Your score is "+ score);
    }
}

function matchCards(img1, img2) {
    if(img1 === img2) {
        matchedCard++;
        if(matchedCard == 6 && timeLeft > 0) {
            return clearInterval(timer);
        }
        cardOne.removeEventListener("click", flipCard);
        cardTwo.removeEventListener("click", flipCard);
        cardOne.classList.add("glow");
        cardTwo.classList.add("glow");
        cardOne = cardTwo = "";
        score++;
        scoreTag.innerText = score;
        return disableDeck = false;
    }

    setTimeout(() => {
        cardOne.classList.add("shake");
        cardTwo.classList.add("shake");
    }, 400);

    setTimeout(() => {
        cardOne.classList.remove("shake", "flip", "glow");
        cardTwo.classList.remove("shake", "flip", "glow");
        cardOne = cardTwo = "";
        disableDeck = false;
    }, 1200);
}

function shuffleCard() {
    let gamelevel = document.getElementById("level").value;
    if (gamelevel == "l1"){
        timeLeft = 60;
    }
    else if (gamelevel == "l2"){
        timeLeft = 50;
    }
    else if (gamelevel == "l3"){
        timeLeft = 40;
    }
    else{
        return;
    }
    //timeLeft = maxTime;
    flips = matchedCard = 0;
    cardOne = cardTwo = "";
    clearInterval(timer);
    timeTag.innerText = timeLeft;
    scoreTag.innerText = score;
    disableDeck = isPlaying = false;

    let arr = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6];
    arr.sort(() => Math.random() > 0.5 ? 1 : -1);

    cards.forEach((card, index) => {
        card.classList.remove("flip","glow");
        let imgTag = card.querySelector(".back-view img");
        setTimeout(() => {
            imgTag.src = `images/img-${arr[index]}.png`;
        }, 500);
        card.addEventListener("click", flipCard);
    });
}

shuffleCard();

refreshBtn.addEventListener("click", shuffleCard);
document.getElementById("level").onchange = shuffleCard;

cards.forEach(card => {
    card.addEventListener("click", flipCard);
});