const heroImages = document.getElementsByClassName('hero-image');

const changeCard = (event) => {
    card = document.getElementById(event.target.id);
    console.log(card);
    card.style.zIndex -= 1;
    console.log(card);
}

for (i=0; i< heroImages.length; i++){
    heroImages[i].addEventListener('click', changeCard);
}
