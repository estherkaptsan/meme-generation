'use strict'

const TOUCH_EVS = ['touchstart', 'touchmove', 'touchend']

let gElCanvas
let gElGallery
let gCtx
let gText

function onInit() {
    gElCanvas = document.querySelector('#my-canvas')
    gCtx = gElCanvas.getContext('2d')

    createMeme()

    addListeners()

    renderGallery()
}
// renderMeme()


function renderGallery() {
    let strHtmls = gImgs.map(img => `
        <img src="images/${img.id}.jpg" >
    `)
    gElGallery = document.querySelector('.gallery-container')
    gElGallery.innerHTML = strHtmls.join('')
}

function renderMeme() {
    let { selectedImgId, lines } = getMeme()
    console.log(lines[0].color)
    const img = new Image()
    img.src = gImgs[selectedImgId].url
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
        drawText(100, 100, lines[0].size, lines[0].color, lines[0].txt)
        // drawLines()
        //renderLines()
    }
}

function drawLines() {
    const meme = getTextInformation()

    const { txt, color, size, pos } = meme.afterUpdate.lines[0]

    // drawText(pos.x, pos.y, size, color, txt)
}

function onUpdateMeme(key, value) {
    console.log(key, value)
    updateMeme(key, value)
    renderMeme()
    // render
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
    // document.querySelector('.gallery-container').addEventListener('click', onClick)

    gElCanvas.addEventListener('mousemove', onMove)
    gElCanvas.addEventListener('mouseup', onUp)
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
    // console.log('Move')
}

function onUp() {
    console.log('Up')

}