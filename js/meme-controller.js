'use strict'

const TOUCH_EVS = ['touchstart', 'touchmove', 'touchend']
const MARGIN_W = 35
const MARGIN_H = 25

let gElCanvas
let gCtx

function onInit() {
    gElCanvas = document.querySelector('#my-canvas')
    gCtx = gElCanvas.getContext('2d')

    gSwitch = 0

    createMeme()
    addListeners()
    renderGallery()
}

function renderMeme() {
    let { selectedImgId, lines } = getMeme()
    const img = new Image()
    img.src = gImgs[selectedImgId].url
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
        drawLines(lines)
        markedSelectedLine()
    }
}

function onUpdateMeme(key, value) {
    if (!gMeme.lines.length) onAddLine()
    alignText(value)
    updateMeme(key, value)
    renderMeme()
}

function onSwitchBetweenLines() {
    switchBetweenLines()
    cleanInput()
    focusOnInput()
    markedSelectedLine()
    renderMeme()
}

function onAddLine() {
    addLine()
    cleanInput()
    focusOnInput()
    renderMeme()
}

function onDeleteLine() {
    deleteLine()
    cleanInput()
    renderMeme()
}

function drawLines(lines) {
    lines.forEach(line => {
        drawText(line.pos.x, line.pos.y, line.size, line.color, line.txt, line.fontFamily)
    })
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

function markedSelectedLine() {
    if (!gMeme.lines.length) return
    if (!gMeme.lines[gMeme.selectedLineIdx].drawRect) return
    const { pos, txt, size } = getLines()
   
    // calculate diff
    const metrics = gCtx.measureText(txt)
    const textWidth = Math.ceil(metrics.width)
    // const textHeight = Math.ceil(metrics.height)
    const textHeight = size
    let x = pos.x - MARGIN_W
    let y = pos.y - MARGIN_H
    let w = 2 * MARGIN_W + textWidth
    // let h = 2 * MARGIN_H + textHeight
    // let h = textHeight
    // let fontHeight = metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent;
    let actualHeight = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;
    // let h = 2 * MARGIN_H + actualHeight
    let h = MARGIN_H + actualHeight

    // draw rect
    gCtx.beginPath()
    gCtx.rect(x, y, w, h)
    gCtx.strokeStyle = 'black'
    gCtx.stroke()
}

function onClearMarked() {
    clearMarked()
    renderMeme()
}

function focusOnInput() {
    document.querySelector('input[name="txt"]').focus()
}

function cleanInput() {
    document.querySelector('input[name="txt"]').value = ''
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

function toggleContainer() {
    document.querySelector('.gallery-container').classList.add('hide')
    document.querySelector('.canvas-container').classList.remove('hide')
}

function downloadCanvas(elLink) {
    onClearMarked()
    const data = gElCanvas.toDataURL()
    elLink.href = data
    elLink.download = 'my-img'
}

function onUploadImg() {
    const imgDataUrl = gElCanvas.toDataURL('images/jpeg') // Gets the canvas content as an image format

    // A function to be called if request succeeds
    function onSuccess(uploadedImgUrl) {
        // Encode the instance of certain characters in the url
        const encodedUploadedImgUrl = encodeURIComponent(uploadedImgUrl)
        console.log(encodedUploadedImgUrl)
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodedUploadedImgUrl}&t=${encodedUploadedImgUrl}`)
    }
    doUploadImg(imgDataUrl, onSuccess)
}

function doUploadImg(imgDataUrl, onSuccess) {
    // Pack the image for delivery
    const formData = new FormData()
    formData.append('img', imgDataUrl)

    // Send a post req with the image to the server
    const XHR = new XMLHttpRequest()
    XHR.onreadystatechange = () => {
        if (XHR.readyState !== XMLHttpRequest.DONE) return
        if (XHR.status !== 200) return console.error('Error uploading image')
        const { responseText: url } = XHR

        onSuccess(url)
    }
    XHR.onerror = (req, ev) => {
        console.error('Error connecting to server with request:', req, '\nGot response data:', ev)
    }
    XHR.open('POST', '//ca-upload.com/here/upload.php')
    XHR.send(formData)
}
