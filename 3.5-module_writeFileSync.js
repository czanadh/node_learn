const { readFileSync,writeFileSync} = require('fs')

const first = readFileSync('./first_folder/first.txt','utf8')
const second = readFileSync('./first_folder/second.txt','utf8')

console.log(first,second);


writeFileSync('./first_folder/new_file.txt',
`new file has been created : ${first},${second}`
)

