audio = document.getElementById("som");
function tocar() {
    audio.play();
}
function pause() {
    audio.pause();
}

function stop() {
    audio.pause();
    audio.currentTime = 0;
}