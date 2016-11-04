function async_callback(cb) {
  console.log('srat async_callback')
}

function async_setImmediate(cb) {
  setImmediate(() => {
    console.log('srat async_setImmediate')
  })
}

console.log('===== start =====')

async_callback(()=> {
  console.log('async_callback done')
})

async_setImmediate(()=> {
  console.log('async_setImmediate done')
})

console.log('===== done =====')
