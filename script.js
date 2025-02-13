const yesButton = document.getElementById('yes');
const noButton = document.getElementById('no');
const valentineText = document.getElementById('text');
const catAnimation = document.getElementById('cat');

const initialGap = 50; 
let noClickCount = 0;
const kuromiImage = document.getElementById('kuromi'); 
const buttonsContainer = document.querySelector('.buttons'); 



noButton.addEventListener('click', () => {
    noClickCount++;

    const newGap = Math.max(initialGap - noClickCount * 10, 0); 
    buttonsContainer.style.gap = `${newGap}px`;

    
    let newScaleNo = Math.max(1 - noClickCount * 0.15, 0.5); 
    noButton.style.transform = `scale(${newScaleNo})`;

    
    let newScaleYes = Math.min(1 + noClickCount * 0.1, 1.2); 
    yesButton.style.transform = `scale(${newScaleYes})`;


    const noTexts = ["Pookie,are you sure? 💔", "Think again! 🥺","Please pookie nooo", "Really? 😢", "Ouch... my heart! 💔"];
    if (noClickCount <= noTexts.length) {
        noButton.textContent = noTexts[noClickCount - 1];
    }

    
    if (noClickCount === 3) {
        kuromiImage.src = 'pic/sad kuromi.jpg';
    }
    
    if (noClickCount === 5) {
        kuromiImage.src = 'pic/very sad kuromi.jpg';
    }

});




yesButton.addEventListener('click', () => {
    valentineText.classList.add('fade-out');

    setTimeout(() => {
        valentineText.textContent = 'Thanks for being my Valentine! 💖';
        valentineText.classList.remove('fade-out');
        valentineText.classList.add('fade-in');

        kuromiImage.src = 'pic/happy kuromi.png';
        
        yesButton.style.display = 'none';
        noButton.style.display = 'none';
        catAnimation.style.display = 'none';
    }, 500);
});


