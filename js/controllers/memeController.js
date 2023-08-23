'use strict'
let gElCanvas
let gCtx
let currentImg
let currentColor
let selectedLine

//init
function onInit() {
    renderGallery()
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
}

function renderMeme() {
    onClearCanvas()
    currentImg
    coverCanvasWithImage(currentImg)
    const elMeme = onGetMeme(currentImg.id)
    const elMemeLine = elMeme.lines[elMeme.selectedLineIdx]
    console.log(elMeme)
    const elMemeSelectedLine=selectedLine
    drawText(elMemeLine.txt, elMemeLine.color,elMemeLine.size,elMemeSelectedLine)


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
function drawText(text, color = 'white', size = 30,selectedLine, x, y) {
    console.log(gElCanvas.height, gElCanvas.width / 2);
    gCtx.lineWidth = 1
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = color
    gCtx.font = size + 'px Arial'
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'
    switch(selectedLine){
        case 1:
            gCtx.fillText(text, gElCanvas.height / 2, 50)
            gCtx.strokeText(text, gElCanvas.height / 2, 50)
            break;
        case 2:
            gCtx.fillText(text, gElCanvas.height /2, gElCanvas.width / 2)
            gCtx.strokeText(text, gElCanvas.height / 2, gElCanvas.width / 2)
            break;
        }
    // gCtx.fillText(text, gElCanvas.height / 2, 50)
    // gCtx.strokeText(text, gElCanvas.height / 2, 50)
}

//get
function onGetMeme(imgId) {
    const meme = getMeme(imgId)
    return meme
}
//create

function onAddLine() {
    setNewLine()

}

//update
function OnSetLineTxt(text, lineNumber) {
    setLineTxt(text, lineNumber)
    selectedLine=lineNumber
    console.log(selectedLine)
    renderMeme()
}
function onImgSelect(img) {
    console.log(img);
    setImg(img)
    currentImg = img
    renderMeme()
}

function onSetColor(color) {
    currentColor = setColor(color)
    renderMeme()
}

function onTextSizeChange(diff) {
    setTextSize(diff)
    renderMeme()
}
//download

function downloadCanvas(elLink) {
    const dataUrl = gElCanvas.toDataURL()
    console.log('dataUrl', dataUrl)

    elLink.href = dataUrl
    // Set a name for the downloaded file
    elLink.download = 'my-meme'
}
