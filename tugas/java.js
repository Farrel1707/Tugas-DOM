const displayCountFarrel = document.getElementById('displayCountFarrel')
const likeBtnFarrel = document.getElementById('likeBtnFarrel')
let currentCountFarrel = 0;

displayCountFarrel.innerHTML = currentCountFarrel

const likeFarrel = () => {
    displayCountFarrel.innerHTML = currentCountFarrel += 1
}

const displayCountFeral = document.getElementById('displayCountFeral')
const likeBtnFeral = document.getElementById('likeBtnFeral')
let currentCountFeral = 0;

displayCountFeral.innerHTML = currentCountFeral

const likeFeral = () => {
    displayCountFeral.innerHTML = currentCountFeral += 1
}

const displayCounArya = document.getElementById('displayCountArya')
const likeBtnArya = document.getElementById('likeBtnArya')
let currentCountArya = 0;

displayCountArya.innerHTML = currentCountArya

const likeArya = () => {
    displayCountArya.innerHTML = currentCountArya += 1
}

function showtable() {
    const table = button.nextElementSibling;
    if (table.style.display === "none") {
        table.style.display = "table";
        button.textContent = "Hide Table";
    } else {
        table.style.display = "none";
        button.textContent = "Show Table";
    }
}