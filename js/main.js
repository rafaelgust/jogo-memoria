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
], cards = null;

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
            flipped: false,
        },
        {
            id: `card-${item}-${parseInt(Math.random() * 100)}`,
            icon: item,
            flipped: false,
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

flipCard = () => {
    const card = document.getElementsByClassName('card');

    for(let i=0 ; i< card.length ; i++){
        card[i].addEventListener("click", function(e){
            let element = e.target;
            element.parentElement.className = 'card flip';
        },false);
    }
}

startGame = () => {
    cards = createCards(items);
    randomCards(cards);
    cardsToFront(cards);
    flipCard();
};

startGame();