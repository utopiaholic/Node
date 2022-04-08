const Logger = require('./logger');
var logger = new Logger();

logger.on('messageLogged', (args) => {
    console.log(`id: ${args.id}, description: ${args.description}`);
});

logger.log('test log');
