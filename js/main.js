let items = [
    'bootstrap',
    'css',
    'electron',
    'firebase',
    'html',
    'javascript',
    'jquery',
    'mongo',
    'node',
    'react',
],
clickCard = true,
cards = null,
cardsTotal = 20,
cardOne = '',
cardTwo = '',
points = 0,
total = document.getElementById('total'),
point = document.getElementById('points')
;

function reset(){
    clickCard = true,
    cards = null,
    cardsTotal = 20,
    cardOne = '',
    cardTwo = '',
    points = 0,
    endgame = document.getElementById('endGame'),
    gameBoard = document.querySelector('body div.board');

    gameBoard.innerHTML = "";
    endgame.style.display = "none";
    startGame();
}

function game(id){
    if(cardOne === '' && cardTwo === ''){
        cardOne = id;
        cardsTotal--;
        clickCardBool();
    }else if(cardOne !== '' && cardTwo === ''){
        cardTwo = id;
        cardsTotal--;
        compara();
        clickCardBool();
    }
    statusCard();
}

function compara(){
    if(cardOne === cardTwo){
        points++;
        cardOne = '',
        cardTwo = '';
    }else{
        cardOne = '',
        cardTwo = '';
    }

    if(cardsTotal == 0){
        endGame();
    }
}

function clickCardBool(){
    clickCard = !clickCard;
}

function statusCard(){
    total.innerHTML = cardsTotal;
    point.innerHTML = points;
}

const createCards = (items) => {
    let cards = [];
    for(let item of items){
        cards.push(createPair(item));
    }
    return cards.flatMap(pair => pair);
},
createPair = (item) => {
    return [
        {
            id: `card-${item}-${parseInt(Math.random() * 100)}`,
            icon: item,
            flip: false,
        },
        {
            id: `card-${item}-${parseInt(Math.random() * 100)}`,
            icon: item,
            flip: false,
        }
    ];
},
randomCards = (cards) => {
    let currentIndex = cards.length;
    let randomIndex = 0;

    while(currentIndex !== 0){
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [cards[randomIndex], cards[currentIndex]] = [cards[currentIndex], cards[randomIndex]];
    }
},
cardsToFront = (cards) => {
    let gameBoard = document.querySelector('body div.board');
    cards.forEach((card) => {
        let cardElement = document.createElement('div');
        cardElement.id = card.id;
        cardElement.classList.add('card');
        cardElement.dataset.icon = card.icon;

        gameBoard.appendChild(cardElement);
        cardElement.innerHTML = `
        <div class="card_front">
            <img src="./img/${card.icon}.png" alt="${card.icon}" class="icon">
        </div>
        <div class="card_back">
            ?
        </div>
        `;
    });
},
flipCard = (cards) => {
    for(let i=0 ; i < cards.length ; i++){
        let card = document.getElementById(cards[i].id);
        card.addEventListener("click", function(){
            if(clickCard && !cards[i].flip){
                clickCardBool();
                game(cards[i].icon);
                cards[i].flip = true;
                card.className = 'card flip';
            }
        },false);
    }
}
startGame = () => {
    statusCard();
    cards = createCards(items);
    randomCards(cards);
    cardsToFront(cards);
    flipCard(cards);
},
endGame = () => {
    let endgame = document.getElementById('endGame');
    endgame.removeAttribute('style');
};

startGame();