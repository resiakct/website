const audio = document.getElementById("audio");
const title = document.getElementById("song-title");
const currentTimeEl = document.getElementById("current-time");
const durationEl = document.getElementById("duration");
const progress = document.getElementById("progress");
const equalizer = document.getElementById("equalizer");

const songs = [
    "Alipin By Khel Pangilinan.mp3",
    "You'll Be Safe Here By Rico Blanco.mp3"
];



let index = 0;



loadSong();

function loadSong() {
    audio.src = "music/" + songs[index];
    title.innerText = songs[index].replace(".mp3", "");
}

document.getElementById("playBtn").onclick = () => {
    audio.play();
    equalizer.style.opacity = "1";
};

document.getElementById("pauseBtn").onclick = () => {
    audio.pause();
    equalizer.style.opacity = "0.2";
};

document.getElementById("nextBtn").onclick = () => {
    index = (index + 1) % songs.length;
    loadSong();
    audio.play();
};

document.getElementById("prevBtn").onclick = () => {
    index = (index - 1 + songs.length) % songs.length;
    loadSong();
    audio.play();
};

audio.onloadedmetadata = () => {
    durationEl.innerText = format(audio.duration);
};

audio.ontimeupdate = () => {
    currentTimeEl.innerText = format(audio.currentTime);
    
    progress.value = (audio.currentTime / audio.duration) * 100;
};

progress.oninput = () => {
    audio.currentTime = (progress.value / 100) * audio.duration;
};

audio.onended = () => {
    index = (index + 1) % songs.length;
    loadSong();
    audio.play();
};

function format(seconds) {
    let m = Math.floor(seconds / 60);
    let s = Math.floor(seconds % 60);
    if (s < 10) s = "0" + s;
    return `${m}:${s}`;
}