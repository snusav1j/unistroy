const cards = document.querySelectorAll('.card__inner');

for (const card of cards) {
    card.addEventListener('click', function handleClick() {
        if(this.classList.contains('is-flipped')){
            card.classList.remove('is-flipped'); 
        } else{
            card.classList.add('is-flipped');
        }
    });
}