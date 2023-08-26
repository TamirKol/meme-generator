'use strict'
let gElCanvas
let gCtx
let currentImg
let currentColor
let gSelectedLine
let gLineStartPos
const TOUCH_EVS = ['touchstart', 'touchmove', 'touchend']

//init
function onInit() {
  HideMeme()
  renderGallery()
  gElCanvas = document.querySelector('canvas')
  gCtx = gElCanvas.getContext('2d')
  addListeners()
  gSelectedLine = 0
}

function renderMeme() {
  onClearCanvas()
  currentImg
  coverCanvasWithImage(currentImg)
  const elMeme = onGetMeme(currentImg.id)

  drawMeme(elMeme)


}
//canvas functions
function coverCanvasWithImage(elImg) {
  resizeCanvas()
  gElCanvas.height = (elImg.naturalHeight / elImg.naturalWidth) * gElCanvas.width
  gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)

}

function onClearCanvas() {
  gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
  // We may clear part of the canvas
  // gCtx.clearRect(0, 0, gElCanvas.width / 2, gElCanvas.height / 2)
}
//draw
function drawText(text, color = 'white',font='Impact',alignment='center' ,size = 30, x, y) {
  gCtx.lineWidth = 2
  gCtx.strokeStyle = 'black'
  gCtx.fillStyle = color
  gCtx.font = size + 'px '+font
  gCtx.textAlign = alignment
  gCtx.textBaseline = 'middle'
  
  gCtx.fillText(text, x, y)
  gCtx.strokeText(text, x, y)


}

function drawMeme(elMeme) {
  let elMemeSelectedline = gSelectedLine
  elMeme.lines.map((line) => {

    drawText(line.txt, line.color,line.font,line.alignment,line.size,line.pos.x, line.pos.y)
    elMemeSelectedline++

  })
}
function drawFrame(x, y, size) {
  onClearCanvas()
  renderMeme()
  gCtx.lineWidth = 2;
  gCtx.strokeStyle = 'black';
  gCtx.beginPath();
  gCtx.moveTo(0, y - 20);
  gCtx.lineTo(x, y - 20);
  gCtx.lineTo(x, y + size);
  gCtx.lineTo(0, y + size);
  gCtx.closePath();
  gCtx.stroke();
}
//get
function onGetMeme(imgId) {
  const meme = getMeme(imgId)
  return meme
}
//create

function onAddLine() {
  setNewLine()
  renderMeme()
}

//update
function OnSetLineTxt(text) {
  const lineNumber = gSelectedLine
  setLineTxt(text, lineNumber)
  renderMeme()
}
function onImgSelect(img) {
  console.log(img);
  setImg(img)
  currentImg = img
  ShowMemeEditor()
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

function onTextAlignment(alignment){
  setAlignment(alignment)
  renderMeme()
    
  }

function onSwichLine() {
  console.log(gSelectedLine)
 
  const elMeme = onGetMeme()
  console.log(elMeme);
  switch(gSelectedLine){
    case 0:{
      if (elMeme.lines.length===1){
        break
      }
      else{
        gSelectedLine++
        setCurrentLine(gSelectedLine)
        break
      }
    }
    case 1:{
      if(elMeme.lines.length===2){
        gSelectedLine=0
        setCurrentLine(gSelectedLine)
        break
      }
      else{
        gSelectedLine++
        setCurrentLine(gSelectedLine)
        break
      }
    }
    case 2:{
        gSelectedLine=0
        setCurrentLine(gSelectedLine)
        break
      }
    }

  
  renderMeme()
  let x = gElCanvas.width
  let y = elMeme.lines[elMeme.selectedLineIdx].pos.y
  let size = elMeme.lines[elMeme.selectedLineIdx].size
  drawFrame(x, y, size + 10)
}

//delete
function onDeleteLine() { 
  deleteLine(gSelectedLine)
  renderMeme()
}

//event listeners

//Handle the listeners
function addListeners() {
  addMouseListeners()
  addTouchListeners()
  //Listen for resize ev
  window.addEventListener('resize', () => {
    resizeCanvas()
    //Calc the center of the canvas
    const center = { x: gElCanvas.width / 2, y: gElCanvas.height / 2 }

    renderMeme()
  })
}

function addMouseListeners() {
  gElCanvas.addEventListener('mousedown', onDown)
  gElCanvas.addEventListener('mousemove', onMove)
  gElCanvas.addEventListener('mouseup', onUp)
}

function addTouchListeners() {
  gElCanvas.addEventListener('touchstart', onDown)
  gElCanvas.addEventListener('touchmove', onMove)
  gElCanvas.addEventListener('touchend', onUp)
}

function onDown(ev) {
  // console.log('onDown')
  // Get the ev pos from mouse or touch
  const pos = getEvPos(ev)
  // console.log('pos', pos)

  gSelectedLine=checkLineSwichOnSelect(pos)

  if (!isLineClicked(pos)) return
  setLineDrag(true)
  //Save the pos we start from
  gLineStartPos = pos
  document.body.style.cursor = 'grabbing'
}

function onMove(ev) {
  // console.log('onMove')
  let meme = getMeme()
  const isDrag = meme.lines[meme.selectedLineIdx].isDrag
  if (!isDrag) return
  console.log('Moving the line')

  const pos = getEvPos(ev)
  // Calc the delta, the diff we moved
  const dx = pos.x - gLineStartPos.x
  const dy = pos.y - gLineStartPos.y
  moveLine(dx, dy)
  // Save the last pos, we remember where we`ve been and move accordingly
  gLineStartPos = pos
  // The canvas is render again after every move
  renderMeme()
}

function onUp() {
  // console.log('onUp')
  setLineDrag(false)
  document.body.style.cursor = 'grab'
}

function resizeCanvas() {
  const elContainer = document.querySelector('.canvas-container')
  gElCanvas.width = elContainer.offsetWidth
  gElCanvas.height = elContainer.offsetHeight
}

function getEvPos(ev) {

  let pos = {
    x: ev.offsetX,
    y: ev.offsetY,
  }

  if (TOUCH_EVS.includes(ev.type)) {
    // Prevent triggering the mouse ev
    ev.preventDefault()
    // Gets the first touch point
    ev = ev.changedTouches[0]
    // Calc the right pos according to the touch screen
    pos = {
      x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
      y: ev.pageY - ev.target.offsetTop - ev.target.clientTop,
    }
  }
  return pos
}
//fonts
function onChangeFont(fontValue){
  setFont(fontValue)
  renderMeme()
}

