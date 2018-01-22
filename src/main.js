
// polyfill for ie and es5
import 'babel-polyfill'
import part2 from './part2'
import './test.less'

let mainJsText = document.createElement('p')
document.body.appendChild(mainJsText)
mainJsText.innerHTML = 'from main.js'
part2('from part2')

// auto code split and load asyn
require.ensure([], function (require) {
  let part4 = require('./part4').default
  part4()
})
