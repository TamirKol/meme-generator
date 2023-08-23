'use strict'

function renderGallery(){
    const images= getImagesToShow()
    console.log(images);
    const strHtml=images.map((img)=> 
      `<img onclick="onImgSelect(this)" id="${img.id}" src="${img.url}">`
    ).join('')
    console.log(strHtml);
    setElHtml('.image-gallery',strHtml)   
    
}


function setElHtml(selector, html) {
    const el = document.querySelector(selector)
    el.innerHTML = html
}
    