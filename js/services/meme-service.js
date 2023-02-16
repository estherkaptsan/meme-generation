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
]

let gElGallery
let gMeme

function createMeme() {
    gMeme = {
        selectedImgId: 0,
        selectedLineIdx: 0,
        lines: [
            {
                pos: { x: 133, y: 50 },
                txt: 'hello',
                size: 30,
                align: 'center',
                color: 'white',
                fontFamily: 'Impact'
            },
        ]
    }
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
    renderMeme()
}

function moveRightAndLeftText(diff) {
    gMeme.lines[gMeme.selectedLineIdx].pos.x += diff
    renderMeme()
}

function addLine() {
    // TODO: more lines
    if (gMeme.lines.length >= 2) return
    let y = (gMeme.lines.length === 1) ? 370 : 200
    const newLine = {
        pos: { x: 200, y: y },
        txt: 'new line',
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
}