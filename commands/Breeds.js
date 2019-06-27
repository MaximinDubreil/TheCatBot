const TheCatApi = require('../api/TheCatApi')
const Command = require('./Command')
const Discord = require('discord.js')

module.exports = class Breeds extends Command{
    static match(message){
        return message.content.startsWith('!cat breeds')
    }

    static action(message){
        TheCatApi.httpGetBreeds(function(breeds){
            let embedMessage = new Discord.RichEmbed
            embedMessage.setColor('#7c018c');
            let i=0;
            for (const breed in breeds) {    
                if (breeds.hasOwnProperty(breed)) {
                    embedMessage.addField('Breed: '+breeds[breed].name,'ID: '+breeds[breed].id,true);
                    i++;
                    if (i > 24) {
                        message.channel.send(embedMessage);
                        embedMessage = new Discord.RichEmbed
                        embedMessage.setColor('#7c018c');
                        i=0;
                    }
                }
            }
            message.channel.send(embedMessage);
        })
    }
}