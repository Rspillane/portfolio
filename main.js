const heroImages = document.getElementsByClassName('hero-image');

const changeCard = (event) => {
    card = document.getElementById(event.target.id);
    card.style.zIndex -= 1;
}

for (i=0; i< heroImages.length; i++){
    images[i].addeventlistener('click', changeCard);
}