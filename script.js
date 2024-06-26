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



