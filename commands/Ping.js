const Command = require('./Command');
const Discord = require('discord.js');
const TheCatApi = require('../api/TheCatApi');

module.exports = class Ping extends Command{

    static match(message){
        return message.content.startsWith('!cat ping');
    }

    static action (message){
        let t1 = Date.now();
        TheCatApi.httpGetMessages(
            function(){
                let t2 = new Date().getTime();
                let diff = t2 - t1;
                let embedMessage = new Discord.RichEmbed;
                embedMessage.setTitle('Pong')
                    .setImage('http://www.letribunaldunet.fr/wp-content/uploads/2013/12/2261.gif.pagespeed.ce_.GzQEVE5ncE1.gif')
                    .setFooter(diff+' ms');
                message.channel.send(embedMessage);
                message.channel.send(foo);
            },'','',''
        )
    }
}