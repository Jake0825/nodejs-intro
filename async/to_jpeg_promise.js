const fs = require('fs')
const jimp = require('jimp')

console.log('===== start png -> jpeg =====')

new Promise((resolve, reject) => {
  fs.readFile('Android_Robot_100.png', (err, data) => {
    console.log('loaded file into buffer')
    if (err) {
      reject(err)
    } else {
      resolve(data)
    }
  })
}).then(data => {
  console.log('loaded file into jimp')
  return jimp.read(new Buffer(data))
}).then(image => {
  console.log('converted to jpeg')
  return new Promise((resolve, reject) => {
    image.getBuffer(jimp.MIME_JPEG, (err, buf) => {
      if (err) {
        reject(err)
      } else {
        resolve(buf)
      }
    })
  })
}).then(buf => {
  return new Promise((resolve, reject) => {
    fs.writeFile('Android_Robot_100.jpeg', buf, (err) => {
      console.log('write file success')
      if (err) {
        reject(err)
      } else {
        resolve()
      }
    })
  })
}).catch(err => {
  console.error(err)
})

console.log('===== png -> jpeg done =====')
