'use strict'
let gElCanvas
let gCtx
let currentImg

//init
function onInit(){
    renderGallery()
 gElCanvas= document.querySelector('canvas')
 gCtx= gElCanvas.getContext('2d')
}

function renderMeme(){
    onClearCanvas()
    currentImg
    coverCanvasWithImage(currentImg)
    const elMeme=onGetMeme(currentImg.id)
    console.log(elMeme);
    drawText(elMeme.lines[elMeme.selectedLineIdx].txt)


}
//canvas functions
function coverCanvasWithImage(elImg) {
    gElCanvas.height = (elImg.naturalHeight / elImg.naturalWidth) * gElCanvas.width
    gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
    
}

function onClearCanvas() {
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
    // We may clear part of the canvas
    // gCtx.clearRect(0, 0, gElCanvas.width / 2, gElCanvas.height / 2)
  }
//draw
function drawText(text, x, y) {
    console.log(gElCanvas.height,gElCanvas.width/2);
    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = 'white'
    gCtx.font = '30px Arial'
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'
  
    gCtx.fillText(text, gElCanvas.height/2,50)
    gCtx.strokeText(text, gElCanvas.height/2,50)
  }

//get
function onGetMeme(imgId){
const meme=getMeme(imgId)
return meme
}
//create

//update
function OnSetLineTxt(text){
SetLineTxt(text)
renderMeme()
}
function onImgSelect(img){
    console.log(img);
    setImg(img)
    currentImg=img
    renderMeme()
}