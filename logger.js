const { EventEmitter } = require("events");

let url = 'https://www.google.com';

class Logger extends EventEmitter{
    log(m) {
        console.log(m);
        this.emit('messageLogged', { id: '', description: '' });
    }
}

module.exports =  Logger;