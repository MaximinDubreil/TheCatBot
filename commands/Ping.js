const Command = require('./Command');
const TheCatApi = require('../api/TheCatApi')


module.exports = class Ping extends Command{

    static matchEnglish(message){
        return message.content.startsWith('!cat ping')||message.content.startsWith('!chat ping');
    }

    static action (message){
        let t1 = Date.now();
        TheCatApi.httpGetMessages(
            function(){
                let t2 = new Date().getTime();
                let diff = t2 - t1;
                message.channel.send(`pong: ${diff}ms`)
            },'','',''
        )
    }
}