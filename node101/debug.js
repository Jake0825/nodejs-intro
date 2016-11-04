/***** 用 npm, yarn 加些函示庫 *****/
// 
// npm i debug / yarn add debug
//

/***** debug 印出 debug 訊息 *****/
//
// DEBUG=alphacamp node debug.js

/***** 用 nodemon 自動重啟 node 程式 *****/
//
// DEBUG=alphacamp nodemon debug.js

const debug = require('debug')('alphacamp')

for(i = 0; i < 10; i++) { 
  debug(i) 
}