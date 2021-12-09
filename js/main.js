const FRONT = 'card_front', BACK = 'card_back';
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

startGame = () => {
    let cards = createCards(items);
    randomCards(cards);
    console.log(cards);
};

startGame();