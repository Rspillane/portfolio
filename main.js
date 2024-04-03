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

// Wobble animation
function wobbleAnimation(elements) {
    elements.forEach((element, index) => {
        // Calculate delay for each element based on index
        const delay = index * 400; // Adjust the delay as needed
        element.style.animation = `wobble 1s ease-in-out ${delay}ms`;
        setTimeout(() => {
          element.style.animation = '';
        }, 4000); // Ensure animation duration matches the keyframes duration
      });
  }
  
  // Get all elements with the class 'elementToAnimate'
  const elementsToAnimate = document.querySelectorAll('.hero-image');
  
  // Call the function initially
  wobbleAnimation(Array.from(elementsToAnimate));
  
  // Set interval to repeat the animation every 4 seconds
  setInterval(() => {
    wobbleAnimation(Array.from(elementsToAnimate));
  }, 10000);
  