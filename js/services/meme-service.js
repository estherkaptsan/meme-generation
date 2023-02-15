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

let gMeme
//  = {
//     selectedImgId: 1,
//     selectedLineIdx: 0,
//     lines: [
//         {
//             pos: { x:30, y:30 },
//             txt: 'I sometimes eat Falafel',
//             size: 20,
//             align: 'left',
//             color: 'red'
//         }]
// }

function createMeme() {
    gMeme = {
        selectedImgId: 2, // select 1 img from gallery
        selectedLineIdx: 0,
        lines: [
            {
                pos: { x: 30, y: 30 },
                txt: 'hello',
                size: 30,
                align: 'left',
                color: '#fffff',
            }
        ]
    }
}

function getMeme() {
    return gMeme
}

function updateMeme(key, value) {
    console.log(key, value) 
    // let meme = getMeme()
    console.log(gMeme.lines[0][key], value)
    return gMeme.lines[0][key] = value
   
    // if(txt !== meme.lines[0].txt) gMeme.lines[0].txt = txt
    // if(fontSize !== meme.lines[0].size) gMeme.lines[0].size = fontSize
    // if(color !== meme.lines[0].color) gMeme.lines[0].color = color
    // return gMeme
}
