const fs = require('fs')
const jimp = require('jimp')

console.log('===== start png -> jpeg =====')

fs.readFile('Android_Robot_100.png', (err, data) => {
  console.log('loaded file into buffer')
  if (err) throw err

  jimp.read(new Buffer(data), (err, image) => {
    console.log('loaded file into jimp')
    if (err) throw err

    image.getBuffer(jimp.MIME_JPEG, (err, buf) => {
      console.log('converted to jpeg')
      if (err) throw err

      fs.writeFile('Android_Robot_100.jpeg', buf, (err) => {
        console.log('write file success')
        if (err) throw err
      })
    })
  })
})

console.log('===== png -> jpeg done =====')
