const Command = require('./Command');


module.exports = class Ping extends Command{
    static matchEnglish(message){
        return message.content.startsWith('!cat ping')||message.content.startsWith('!chat ping');
    }

    static action (message){
        message.channel.send('pong');
    }
}