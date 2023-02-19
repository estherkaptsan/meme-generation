'use strict'

let gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }
let gImgs = [
    { id: 1, url: 'images/1.jpg', keywords: ['funny', 'cat'] },
    { id: 2, url: 'images/2.jpg', keywords: ['funny', 'cat'] },
    { id: 3, url: 'images/3.jpg', keywords: ['funny', 'cat'] },
    { id: 4, url: 'images/4.jpg', keywords: ['funny', 'cat'] },
    { id: 5, url: 'images/5.jpg', keywords: ['funny', 'cat'] },
    { id: 6, url: 'images/6.jpg', keywords: ['funny', 'cat'] },
    { id: 7, url: 'images/7.jpg', keywords: ['funny', 'cat'] },
    { id: 8, url: 'images/8.jpg', keywords: ['funny', 'cat'] },
    { id: 9, url: 'images/9.jpg', keywords: ['funny', 'cat'] },
    { id: 10, url: 'images/10.jpg', keywords: ['funny', 'cat'] },
    { id: 11, url: 'images/11.jpg', keywords: ['funny', 'cat'] },
    { id: 12, url: 'images/12.jpg', keywords: ['funny', 'cat'] },
    { id: 13, url: 'images/13.jpg', keywords: ['funny', 'cat'] },
    { id: 14, url: 'images/14.jpg', keywords: ['funny', 'cat'] },
    { id: 15, url: 'images/15.jpg', keywords: ['funny', 'cat'] },
    { id: 16, url: 'images/16.jpg', keywords: ['funny', 'cat'] },
    { id: 17, url: 'images/17.jpg', keywords: ['funny', 'cat'] },
    { id: 18, url: 'images/18.jpg', keywords: ['funny', 'cat'] },
]
let gEmojis = ['😀', '😁', '😊', '🙂', '😍']

let gElGallery
let gMeme
let gSwitch

function createMeme() {
    gMeme = {
        selectedImgId: 0,
        selectedLineIdx: 0,
        lines: [
            {
                drawRect: true,
                pos: { x: 133, y: 50 },
                txt: ' ',
                size: 30,
                align: 'center',
                color: 'white',
                fontFamily: 'Impact'
            },
        ]
    }
}

function switchBetweenLines() {
    if (gSwitch === gMeme.lines.length) gSwitch = 0

    gSwitch++
    gMeme.selectedLineIdx = (gSwitch === gMeme.lines.length) ? 0 : gSwitch
}

function getMeme() {
    return gMeme
}

function getLines() {
    return gMeme.lines[gMeme.selectedLineIdx]
}

function updateMeme(key, value) {
    gMeme.lines[gMeme.selectedLineIdx][key] = value
}

function alignText(value) {
    if (value === 'center')
        gMeme.lines[gMeme.selectedLineIdx].pos.x = gElCanvas.width / 3
    if (value === 'right')
        gMeme.lines[gMeme.selectedLineIdx].pos.x = gElCanvas.width / 11
    if (value === 'left')
        gMeme.lines[gMeme.selectedLineIdx].pos.x = gElCanvas.width / 1.5
}

function moveUpAndDownText(diff) {
    gMeme.lines[gMeme.selectedLineIdx].pos.y += diff
}

function moveRightAndLeftText(diff) {
    gMeme.lines[gMeme.selectedLineIdx].pos.x += diff
}

function addLine() {
    let y = (gMeme.lines.length === 1) ? 370 : 200
    // let x = (gMeme.lines.length === 1) ? 133 : getRandomInt(10, gElCanvas.width - 100)
    let x = 133
    const newLine = {
        drawRect: true,
        pos: { x, y },
        txt: '',
        size: 30,
        align: 'center',
        color: 'white',
        fontFamily: 'Impact'
    }
    gMeme.lines.push(newLine)
    gMeme.selectedLineIdx = gMeme.lines.length - 1
}

function deleteLine() {
    if (!gMeme.lines.length) return
    gMeme.lines.splice(gMeme.selectedLineIdx, 1)
    gMeme.selectedLineIdx = gMeme.lines.length - 1
}

function clearMarked() {
    gMeme.lines[gMeme.selectedLineIdx].drawRect = false
}