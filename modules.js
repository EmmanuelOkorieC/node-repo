//Modules
// const names = require('./app') // const {john, peter} = require('./app')
// const sayHi = require('./function')

// console.log(names)
// require('./functionTwo')

// sayHi('susan')
// sayHi(names.john)
// sayHi(names.peter)

const os = require('os')

//info about current user
const user = os.userInfo()
console.log(user)


//method returns the system uptime in seconnds
console.log(`The system Uptime is ${os.uptime()} seconds`)

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOs)