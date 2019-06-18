const TheCatApi = require('../api/TheCatApi')
const Command = require('./Command')
const Discord = require('discord.js')

module.exports = class Breeds extends Command{
    static matchEnglish(message){
        return message.content.startsWith('!cat breeds')
    }

    static matchFrench(message){
        return message.content.startsWith('!chat races')
    }

    static action(message,language){
        TheCatApi.httpGetBreeds(function(breeds){
            let embedMassage = new Discord.RichEmbed
            embedMassage.setColor('#7c018c');
            let i=0;
            for (const breed in breeds) {    
                if (breeds.hasOwnProperty(breed)) {
                    if (language=='english') {
                        embedMassage.addField('Breed: '+breeds[breed].name,'ID: '+breeds[breed].id,true);
                    } else if(language=='french'){
                        embedMassage.addField('Race: '+breeds[breed].name,'ID: '+breeds[breed].id,true);
                    }
                    
                    i++;
                    if (i > 24) {
                        message.channel.send(embedMassage);
                        embedMassage = new Discord.RichEmbed
                        embedMassage.setColor('#7c018c');
                        i=0;
                    }
                }
            }
            message.channel.send(embedMassage);
        })
    }


   
}