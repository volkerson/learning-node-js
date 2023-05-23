// import added modules
const { format } = require('date-fns');
const { v4: uuid }= require('uuid');

// import core-modules
const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

const logEvents = async (message) => {
    //create timestamp
    const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
    // crate log item
    const logItem = `\n${dateTime}\t${uuid()}\t${message}`;

    try {
        // create logs folder if it doesn't exist yet
        if(!fs.existsSync(path.join(__dirname, 'logs'))) {
            await fsPromises.mkdir(path.join(__dirname, 'logs'));
        } 
        // write log entry 
        await fsPromises.appendFile(path.join(__dirname, 'logs', 'eventLog.txt'), logItem);      
    } catch(err) {
        console.log(err);
    }

}

module.exports = logEvents;

