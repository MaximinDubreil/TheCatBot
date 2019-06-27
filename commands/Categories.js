const TheCatApi = require('../api/TheCatApi');
const Command = require('./Command');
const Discord = require('discord.js');


module.exports = class Category extends Command{
    static match(message) {
        return message.content.startsWith('!cat categories');
    }

    static action(message){
        TheCatApi.httpGetCategories(function(categories){
            let embedMessage = new Discord.RichEmbed
            let mes='';
            embedMessage.setColor('#7c018c');   
            embedMessage.setTitle('Categories list:');
            for (const category in categories) {
                if (categories.hasOwnProperty(category)) {
                    mes+='• '+categories[category].name+'\n';
                }
            }
            embedMessage.addField(mes,'--------------');
            message.channel.send(embedMessage);
        })
    }


   
}