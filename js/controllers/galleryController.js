'use strict'

function renderGallery(){
    const images= getImagesToShow()
    console.log(images);
    const strHtml=images.map((img)=> 
      `<div class=image-items onclick="alert('hi')"><img id="${img.id}" src="${img.url}"></div>`
    ).join('')
    console.log(strHtml);
    setElHtml('.image-gallery',strHtml)   
    
}


function setElHtml(selector, html) {
    const el = document.querySelector(selector)
    el.innerHTML = html
}
    