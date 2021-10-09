const os = require('os')

// gettiong information of the user

const user = os.userInfo()
console.log(user);

// running time of the systerm

console.log(`the system is running from ${os.uptime} seconds`);
// other informations of the system or OS
const abc = {
name: os.type(),
release: os.release(),
totm: os.totalmem(),
freeM: os.freemem(),
}
console.log(abc);
