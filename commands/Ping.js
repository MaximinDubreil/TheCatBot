const Command = require('./Command');
const Discord = require('discord.js');
const TheCatApi = require('../api/TheCatApi');

module.exports = class Ping extends Command{

    static match(message){
        return message.content.startsWith('!cat ping');
    }

    static action (message){
        let data = [
            'http://www.letribunaldunet.fr/wp-content/uploads/2013/12/2261.gif.pagespeed.ce_.GzQEVE5ncE1.gif',
            'http://gif.alexzone.net/gifs/recent/moving-animated-picture-of-kit.gif',
            'https://media.giphy.com/media/ZOjV3x3D5Rg76/giphy.gif',
            'https://www.unleashed-technologies.com/sites/default/files/blogposts/pong-cat.gif',
            'https://i.imgur.com/tQYSV7i.gif',
            'https://i.imgur.com/JCsbE75.gif',
            'http://31.media.tumblr.com/6cbfbd315bd138f6ffd96704eef37398/tumblr_mvzin7UVAR1s2yegdo1_400.gif',
            'http://www.dailyhaha.com/_gifs/cat-ping-pong.gif'
        ]
        let t1 = Date.now();
        TheCatApi.httpGetMessages(
            function(){
                let t2 = new Date().getTime();
                let diff = t2 - t1;
                let embedMessage = new Discord.RichEmbed;
                embedMessage.setTitle('Pong')
                    .setImage(data[Math.floor(Math.random()*data.length)])
                    .setFooter(diff+' ms');
                message.channel.send(embedMessage);
            },'','',''
        )
    }
}