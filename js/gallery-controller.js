'use strict' 

function renderGallery() {
    let strHtmls = gImgs.map(img => `
        <img src="images/${img.id}.jpg" onclick="onImgSelect(${img.id})">
    `)
    gElGallery = document.querySelector('.gallery-container')
    gElGallery.innerHTML = strHtmls.join('')
}

function onImgSelect(imgId) {
    setImg(imgId)
    toggleContainer()
    renderMeme()
}

function toggleContainer() {
    document.querySelector('.gallery-container').hidden = true
    document.querySelector('.canvas-container').hidden = false
}