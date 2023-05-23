// import modules
const fsPromises = require("fs").promises;
const path = require("path");

const fileOps =  async () => {
    try {
        const read1stFile = await fsPromises.readFile(path.join(__dirname, 'files', 'afile.txt'), 'utf8');
        console.log(read1stFile);
        await fsPromises.unlink(path.join(__dirname, 'files', 'afile.txt'));
        await fsPromises.writeFile(path.join(__dirname, 'files', 'fsPromise.txt'), 'This is just some text...', 'utf8');
        await fsPromises.appendFile(path.join(__dirname, 'files', 'fsPromise.txt'), '\n\n\nAnd there is even more content.');
        await fsPromises.rename(path.join(__dirname, 'files', 'fsPromise.txt'), (path.join(__dirname, 'files', 'promiseComplete.txt')));        
        const read2ndFile = await fsPromises.readFile(path.join(__dirname, 'files', 'promiseComplete.txt'), 'utf8');
        console.log(read2ndFile);
    } catch(err) {
        console.error(err);
    }
}

fileOps();

/* 
alternative way to create a new file 
*/

// import module
const fs = require("fs");

// source to read from
const readStream = fs.createReadStream('./files/promiseComplete.txt', { encoding: 'utf-8' });

// file to write in 
const writeStream = fs.createWriteStream('./files/data-from-stream.txt');

/*
readStream.on('data', (chunk) => {
    writeStream.write(chunk);
})
*/

// best practise
readStream.pipe(writeStream);


