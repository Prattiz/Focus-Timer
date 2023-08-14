let darkMode = true
const buttonToggle = document.getElementById('toggle-mode')
import * as audio from './FocusTimer/sounds.js'

buttonToggle.addEventListener('click', (event) => {
    document.documentElement.classList.toggle('light')
    const mode = darkMode ? 'light' : 'dark'
    event.currentTarget.querySelector('span').textContent = `${ mode } mode ativado!`
    darkMode = !darkMode
})




const divMusic = document.querySelector("#divMusic")
const divFlorest = document.querySelector("#divFlorest")
const divRain = document.querySelector("#divRain")
const divFire = document.querySelector("#divFire")


let status = false;

document.getElementById("music").addEventListener("click", function () {
    if (!status) {
        audio.bgAudio.play();
    } else {
        audio.bgAudio.pause();
        audio.bgAudio.currentTime = 0;
    }
    status = !status;

    divMusic.classList.toggle("on");

    audio.florestAudio.pause();
    audio.rainAudio.pause();
    audio.fireAudio.pause();

    divFire.classList.remove("on");
    divRain.classList.remove("on");
    divFlorest.classList.remove("on");
});




document.getElementById("florest").addEventListener("click", function () {
    if (!status) {
        audio.florestAudio.play();
    } else {
        audio.florestAudio.pause();
        audio.florestAudio.currentTime = 0;
    }
    status = !status;

    divFlorest.classList.toggle("on");

    audio.bgAudio.pause();
    audio.rainAudio.pause();
    audio.fireAudio.pause();

    divFire.classList.remove("on");
    divRain.classList.remove("on");
    divMusic.classList.remove("on");
});




document.getElementById("rain").addEventListener("click", function () {
    if (!status) {
        audio.rainAudio.play();
    } else {
        audio.rainAudio.pause();
        audio.rainAudio.currentTime = 0;
    }
    status = !status;

    divRain.classList.toggle("on");

    audio.bgAudio.pause();
    audio.florestAudio.pause();
    audio.fireAudio.pause();

    divFire.classList.remove("on");
    divMusic.classList.remove("on");
    divFlorest.classList.remove("on");
});

document.getElementById("fire").addEventListener("click", function () {
    if (!status) {
        audio.fireAudio.play();
    } else {
        audio.fireAudio.pause();
        audio.fireAudio.currentTime = 0;
    }
    status = !status;

    divFire.classList.toggle("on");

    audio.bgAudio.pause();
    audio.florestAudio.pause();
    audio.rainAudio.pause();

    divMusic.classList.remove("on");
    divRain.classList.remove("on");
    divFlorest.classList.remove("on");
});
