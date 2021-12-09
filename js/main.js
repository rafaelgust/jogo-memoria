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
];

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
};

console.log(createCards(items));

