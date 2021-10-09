const path = require('path')

// shows the path seperator 
console.log(path.sep);

// provides the path for the require file
const filePath = path.join(`/first_folder`,`inside_firstfolder`,`example.txt`)

console.log(filePath);

// gives the actual file
const base = path.basename(filePath)
console.log(base);

//for the absolute path

const absolute = path.resolve(__dirname,`first_folder`,`inside_firstfolder`,`example.txt`)
console.log(absolute);
