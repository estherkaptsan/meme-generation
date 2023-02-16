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

function updateMeme(key, value) {
    // console.log(key, value) 
    return gMeme.lines.map((line, idx) => {
        return line[key] = value
    })
}

function alignText(key, value) {
    return gMeme.lines.map((line, idx) => {
        if (key === 'align') {
            if (value === 'center') line.pos.x = gElCanvas.width / 3
            if (value === 'right') line.pos.x = gElCanvas.width / 11
            if (value === 'left') line.pos.x = gElCanvas.width / 1.5
        }
    })
}

function moveUpAndDownText(diff) {
    let { lines } = getMeme()
    lines.forEach(line => {
        line.pos.y += diff
    })
}

function moveRightAndLeftText(diff) {
    let { lines } = getMeme()
    lines.forEach(line => {
        line.pos.x += diff
    })
}

function addLine() {
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
}

function deleteLine() {
    if (!gMeme.lines) return
    gMeme.lines.splice(gMeme.lines.length - 1, 1)
    // gMeme.lines.length - 1 = gMeme.selectedLineIdx
}