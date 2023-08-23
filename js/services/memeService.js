var gImgs = [{ id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat'] }]
var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'I sometimes eat Falafel',
            size: 20,
            color: 'red'
        }
    ]
}
var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }

function getMeme(imgIdx) {
    gMeme.selectedImgId = imgIdx
    return gMeme
}

function setLineTxt(text, lineNumber = 0) {
    const lineIdx = lineNumber - 1
    let selectedLine =lineIdx
    gMeme.lines[selectedLine].txt = text
    console.log(gMeme);
}
function setNewLine() {
    let linesNumber = gMeme.lines.length

    console.log(gMeme.lines.length);
    if (linesNumber >= 3) return -1
    else {
        let line = _createLine('change line text', 30, 'white')
        gMeme.lines.push(line)
        console.log('gmeme+ line', gMeme)
        return gMeme.lines.length
    }
}

function setImg(img) {
    const imgUrl = img.src
    const imgId = img.id
    const inGImgs = gImgs.some(img => img.url === imgUrl)
    if (!inGImgs) {
        let img = _createMemeImg(imgId, imgUrl,)
        gImgs.push(img)
    }
    console.log(gImgs);

}
function setColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].color = color
    console.log(gMeme)
    return color
}
function setTextSize(diff) {
    gMeme.lines[gMeme.selectedLineIdx].size += diff
}

function _createMemeImg(id, url, keywords = []) {
    const meme = {
        id,
        url,
        keywords
    }
    return meme
}
function _createLine(text, size, color) {
    const line = {
        text,
        size,
        color
    }
    return line

}