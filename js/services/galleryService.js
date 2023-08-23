const  imagePath = ''

let gGallery=[
    {id:1,
     url:"meme-imgs\\meme-imgs (square)\\1.jpg"
    },
    {
        id:2,
        url:"meme-imgs\\meme-imgs (square)\\2.jpg"
    }
]

function getImagesToShow(){
    const images= gGallery.map(img=> img)
    console.log(images);
    return images
}