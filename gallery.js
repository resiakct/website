const pictures = [
    "images/myHome.jpg",
    "images/myHouse.jpg",
    "images/tahanan.jpg"
];

const messages = [
    "I‘m sorry na my love",
    ":((",
    "sorryyyy"
];

let i = 0;

const img = document.getElementById("gallery-image");
const msg = document.getElementById("gallery-message");

function loadGallery() {
    img.src = pictures[i];
    msg.textContent = messages[i];
}

loadGallery();

document.getElementById("nextImg").onclick = () => {
    i = (i + 1) % pictures.length;
    loadGallery();
};

document.getElementById("prevImg").onclick = () => {
    i = (i - 1 + pictures.length) % pictures.length;
    loadGallery();
};