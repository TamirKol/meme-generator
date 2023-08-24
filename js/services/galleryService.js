const imagePath = ''

let gGallery = [
    {
        id: 1,
        url: "meme-imgs\\meme-imgs (square)\\1.jpg"
    },
    {
        id: 2,
        url: "meme-imgs\\meme-imgs (square)\\2.jpg"
    },
    {
        id: 3,
        url: "meme-imgs\\meme-imgs (square)\\3.jpg"
    },
    {
        id: 4,
        url: "meme-imgs\\meme-imgs (square)\\4.jpg"
    },
    {
        id: 5,
        url: "meme-imgs\\meme-imgs (square)\\5.jpg"
    },
    {
        id: 6,
        url: "meme-imgs\\meme-imgs (square)\\6.jpg"
    },
    {
        id: 7,
        url: "meme-imgs\\meme-imgs (square)\\7.jpg"
    },
    {
        id: 8,
        url: "meme-imgs\\meme-imgs (square)\\8.jpg"
    },


]

function getImagesToShow() {
    const images = gGallery.map(img => img)
    return images
}