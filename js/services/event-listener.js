'use strict'

function addListeners() {
    addMouseListeners()
    addTouchListeners()
}

function addMouseListeners() {
    // gElCanvas.addEventListener('click', onClick)
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

// function onClick(ev) {
//     // console.log(ev)
// }