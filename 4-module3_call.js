// calling the function

const name = require('./4-module1_declare')
const sayHi = require('./4-module2_function')
require('./5-add')


sayHi('susan')
 sayHi(name.john)
sayHi(name.peter)