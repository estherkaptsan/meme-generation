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
    viewContainer()
    renderMeme()
}

function viewGallery() {
    onInit()
    document.querySelector('.gallery-container').classList.remove('hide')
    document.querySelector('.canvas-container').classList.add('hide')
}