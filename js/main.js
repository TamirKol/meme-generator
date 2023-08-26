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