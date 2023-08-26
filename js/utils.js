'use strict'
function toggleMenu() {
    document.body.classList.toggle('menu-open')
}
function closeModal() {
    document.querySelector('.dialog').close()
    // document.querySelector('.backdrop').classList.remove('opaque')
}
function HideMeme(){
document.querySelector('.editor').classList.add('.hidden')
}
function ShowMemeEditor(){
    document.querySelector('.editor').classList.remove('.hidden')
    document.querySelector('.gallery').classList.add('.hidden')
}
function showGallery(){
    document.querySelector('.gallery').classList.remove('.hidden')
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }
  
  function saveToStorage(key, value) {
    const str = JSON.stringify(value)
    localStorage.setItem(key, str)
}

function loadFromStorage(key) {
    const str = localStorage.getItem(key)
    return JSON.parse(str)
}