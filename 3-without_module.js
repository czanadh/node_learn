// common js, every file is a module
// module Encapsulated code (only shared minimum)

// without module 

//const secret = 'SUPER SECRET'
const john = 'john'
const peter = 'peter'

const sayHi = (name) =>{
    console.log(`hello there ${name}`);
}

sayHi('susan')
sayHi(john)
sayHi(peter)
