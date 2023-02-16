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

function renderMeme() {
    let { selectedImgId, lines } = getMeme()
    console.log(lines[0].color)
    const img = new Image()
    img.src = gImgs[selectedImgId].url
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
        drawLines(lines)
        //renderLines()
    }
}

function drawLines(lines) {
    lines.forEach(line => {
        drawText(line.pos.x, line.pos.y, line.size, line.color, line.txt, line.fontFamily)
    })
}

function onUpdateMeme(key, value) {
    console.log(key, value)
    alignText(key, value)
    updateMeme(key, value)
    renderMeme()
    // render
}

function drawText(x, y, size, color, txt, fontFamily, align) {
    gCtx.lineWidth = 1
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = color
    gCtx.font = `${size}px ${fontFamily}`
    gCtx.textAlign = `${align}`
    gCtx.textBaseline = 'middle'

    gCtx.fillText(txt, x, y)
    gCtx.strokeText(txt, x, y)
}

function switchBetweenLines() {
    console.log('switch')
    console.log(gElCanvas)
    gElCanvas.addEventListener('click', function (ev) {
        console.log(ev.offsetX)
    })
}

function onKeyDown(ev) {
    switch (ev.key) {
        case 'ArrowDown':
            moveUpAndDownText(5)
            break;
        case 'ArrowUp':
            moveUpAndDownText(-5)
            break;
        case 'ArrowLeft':
            moveRightAndLeftText(-5)
            break;
        case 'ArrowRight':
            moveRightAndLeftText(5)
            break;
    }
    renderMeme()
}

