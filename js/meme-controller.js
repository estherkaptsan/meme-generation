'use strict'

const TOUCH_EVS = ['touchstart', 'touchmove', 'touchend']

let gElCanvas
let gCtx
let gText

function onInit() {
    gElCanvas = document.querySelector('#my-canvas')
    gCtx = gElCanvas.getContext('2d')

    createMeme()

    addListeners()

    getTextInformation()
    draw()

    renderGallery()
}

function renderGallery() {
    let strHtmls = gImgs.map(img => `
        <img src="images/${img.id}.jpg" >
    `)
    document.querySelector('.gallery-container').innerHTML = strHtmls.join('')
}

function renderMeme() {
    let meme = getMeme()
    console.log(meme.selectedImgId)
}

function draw() {
    drawImg()
    // const textInfo = getTextInformation()
    // const {txt, fontSize, color} = getTextInformation()
    // drawText(30, 30, fontSize, color, txt)
}

function drawImg() {
    const img = new Image()
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
    }
    const { selectedImgId } = getMeme()
    img.src = gImgs[selectedImgId].url
}

function getTextInformation() {
    const txt = document.querySelector('.txt').value
    const color = document.querySelector('.color').value
    const fontSize = document.querySelector('.font-size').value
    drawText(30, 40, fontSize, color, txt)

    // return { txt, fontSize, color }
}

function drawText(x, y, size, color, txt) {
    gCtx.lineWidth = 1
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = color
    gCtx.font = `${size}px Impact`
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'

    gCtx.fillText(txt, x, y)
    gCtx.strokeText(txt, x, y)
}
//-----------------------------------------------------------------------------------------------------------
function addListeners() {
    addMouseListeners()
    addTouchListeners()
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

function onDown() {
    console.log('Down')

}

function onMove() {
    console.log('Move')
    // draw()
    renderMeme()
}

function onUp() {
    console.log('Up')

}