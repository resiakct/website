const pictures = [
    "images/myHome.jpg",
    "images/myHouse.jpg",
    "images/tahanan.jpg"
];

const message = document.querySelectorAll("#sweetMessage p");

let i = 0;

const img = document.getElementById("gallery-image");
const msg = document.getElementById("gallery-message");

function loadGallery() {
    img.src = pictures[i];
    msg.textContent = message[i].textContent;
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