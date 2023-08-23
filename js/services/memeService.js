var gImgs = [{id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat']}]
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
var gKeywordSearchCountMap = {'funny': 12,'cat': 16, 'baby': 2}

function getMeme(imgIdx){
    gMeme.selectedImgId=imgIdx
    return gMeme
}

function SetLineTxt(text){
    let selectedLine= gMeme.selectedLineIdx
    gMeme.lines[selectedLine].txt=text
    console.log(gMeme);
}

function setImg(img){
   const imgUrl= img.src
   const imgId= img.id
   const inGImgs= gImgs.some(img=>img.url===imgUrl)
   if(!inGImgs){
   let img= _createMemeImg(imgId,imgUrl,)
    gImgs.push(img)
   }
 console.log(gImgs);
    
}

function _createMemeImg(id,url,keywords=[]){
    const meme={
        id,
        url,
        keywords
    }
    return meme
}