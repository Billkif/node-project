const path = require('path')

//get separator
console.log(path.sep);

//build the complete path to a file
const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath);

//to get the base file only
const base = path.basename(filePath)
console.log(base);

//to get the absolute path to a file
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)