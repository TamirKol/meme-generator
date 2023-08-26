var gImgs = [{ id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat'] }]
var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'I sometimes eat Falafel',
            size: 30,
            alignment: 'center',
            color: 'red',
            font:'Impact',
            pos: { x: 200, y: 50 },
            isDrag: false

        }
    ]
}
var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }

function getMeme(imgIdx) {
    gMeme.selectedImgId = imgIdx
    return gMeme
}

function setLineTxt(text, selectedLine) {
    gMeme.selectedLineIdx = selectedLine
    gMeme.lines[gMeme.selectedLineIdx].txt = text
    console.log(gMeme);
}

function setNewLine() {
    let linesNumber = gMeme.lines.length

    console.log(gMeme.lines.length);
    if (linesNumber >= 3) return -1
    else {
        let line
        (linesNumber === 2) ? line = _createLine('change line text', 30, 'white', { x: 200, y: 200 })
            : line = _createLine('change line text', 30, 'white', { x: 200, y: 350 })
        gMeme.lines.push(line)
        console.log('gmeme+ line', gMeme)
        return gMeme.lines.length
    }
}
//delete line
function deleteLine(selectedLine) {
    let selectedLineIdx = selectedLine
    gMeme.lines.splice(selectedLineIdx, 1)

}
function setCurrentLine(currentLine) {
    console.log('after switch', currentLine)
    gMeme.selectedLineIdx = currentLine
    console.log(gMeme.selectedLineIdx)
}

function setImg(img) {
    const imgUrl = img.src
    const imgId = img.id
    const inGImgs = gImgs.some(img => img.url === imgUrl)
    if (!inGImgs) {
        let img = _createMemeImg(imgId, imgUrl,)
        gImgs.push(img)
    }

}

function setColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].color = color
    console.log(gMeme)
    return color
}

function setTextSize(diff) {
    gMeme.lines[gMeme.selectedLineIdx].size += diff
}

function setFont(font){
    gMeme.lines[gMeme.selectedLineIdx].font=font
}

function setAlignment(alignment) {
    if (alignment === 1) gMeme.lines[gMeme.selectedLineIdx].alignment = 'left'
    else if (alignment === 2) gMeme.lines[gMeme.selectedLineIdx].alignment = 'center'
    else gMeme.lines[gMeme.selectedLineIdx].alignment = 'right'

}



function setLinePos(x, y) {
    gMeme.lines.pos.x = x
    gMeme.lines.pos.y = y

}
function _createMemeImg(id, url, keywords = []) {
    const meme = {
        id,
        url,
        keywords
    }
    return meme
}
function _createLine(txt, size, color, pos) {
    const line = {
        txt,
        size,
        color,
        pos,
        isDrag: false
    }
    return line

}

//select lines
function isLineClicked(clickedPos) {
    const islineClicked = isInTextRectangle(gMeme.lines[gMeme.selectedLineIdx], clickedPos)
    console.log(islineClicked);
    if (islineClicked) {
        setCurrentTextInput()
        return true
    }
    else {
        console.log('line is not clicked');
    }
}
function setLineDrag(isDrag) {
    gMeme.lines[gMeme.selectedLineIdx].isDrag = isDrag
}
function moveLine(dx, dy) {
    gMeme.lines[gMeme.selectedLineIdx].pos.x += dx
    gMeme.lines[gMeme.selectedLineIdx].pos.y += dy
}
function setCurrentTextInput() {
    document.querySelector('.input-text').value = gMeme.lines[gMeme.selectedLineIdx].txt
    document.querySelector('.input-text').ariaPlaceholder = gMeme.lines[gMeme.selectedLineIdx].txt
}

function checkLineSwichOnSelect(clickedPos) {
    let currentIndex = gMeme.selectedLineIdx
    for (let i = 0; i < gMeme.lines.length; i++) {
        let line = gMeme.lines[i]
        let isOnText = isInTextRectangle(line, clickedPos)
        if (isOnText) {
            currentIndex = i
            setCurrentLine(currentIndex)
        }

    }

    return currentIndex

}
function isInTextRectangle(line, clickedPos) {
    let textWidth = gCtx.measureText(line.txt).width
    let textHeight = line.size
    if (clickedPos.x >= line.pos.x - (textWidth / 2) && clickedPos.x <= line.pos.x + (textWidth / 2) &&
        clickedPos.y >= line.pos.y - (textHeight / 2) && clickedPos.y <= line.pos.y + (textHeight / 2)) return true
    else return false
}
