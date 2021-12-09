const card = document.getElementsByClassName('card');

for(let i=0 ; i< card.length ; i++){
    card[i].addEventListener("click", function(e){
        let element = e.target;
        element.parentElement.className = 'card flip';
    },false );
}