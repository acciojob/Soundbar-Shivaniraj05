//your JS code here. If required.

let musicButtons  =  document.querySelectorAll('.btn');
let stopButton = document.querySelector('.stop');
let currentAudio = null;

function playSound(soundName){
    const audio = new Audio(`sounds/${soundName}.mp3`);
    audio.play();
    currentAudio = audio;
}

function stopSounds(){
    if(currentAudio){
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
}

musicButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const soundName = btn.dataset.sound;
        stopSounds();
        playSound(soundName);
    });
});

stopButton.addEventListener('click', () => {

    stopSounds();
});

it('should play audio correctly', () => {
    cy.visit('/'); // Replace with your application URL

    // Wait for the audio element to appear
    cy.get('audio', { timeout: 10000 }).should('be.visible');

    // Perform your test actions on the audio element
    // For example, check if it's playing
    cy.get('audio').should('have.prop', 'paused', false);
});

