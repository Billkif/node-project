//for dealing with file system (FS), we can do it aynchronously(non blocking) or synchronosly(blocking)
//this file is for the asynchronous method
const { readFile, writeFile } = require('fs')
//we could also declare a const fs = require('fs') then get the properties
// note that we also need to provide a call back function in the async to handle an event

console.log('start');
readFile('./content/first.txt','utf8',(err, result)=>{
    if(err){
        console.log(err);
        return;
    }
    const first = result
    readFile('./content/second.txt','utf8', (err, result)=>{
        if(err){
            console.log(err);
            return;
        }
        const second = result;
        writeFile('./content/result-async.txt', `Here is the result: ${first}, ${second}`, (err, result)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log('done with this task');
        })
    })
})

console.log('starting next task');
