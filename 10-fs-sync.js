//for dealing with file system (FS), we can do it aynchronously(non blocking) or synchronosly(blocking)
//this file is for the synchronous method
const { readFileSync, writeFileSync } = require('fs')
//we could also declare a const fs = require('fs') then get the properties

console.log('start');
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

// console.log(first, second)

writeFileSync(
    './content/result-sync.txt',
    `Here is the result: ${first}, ${second}`, {flag: 'a'}
)  
console.log('done with this task');
console.log('starting the next one');