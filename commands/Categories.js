const TheCatApi = require('../api/TheCatApi')
const Command = require('./Command')
const Discord = require('discord.js')


module.exports = class Category extends Command{
    static matchEnglish(message) {
        return message.content.startsWith('!cat categories')
    }
    static matchFrench(message) {
        return message.content.startsWith('!chat catégories')
    }

    static action(message,language){
        TheCatApi.httpGetCategories(function(categories){
            let embedMassage = new Discord.RichEmbed
            embedMassage.setColor('#7c018c');
            let mes='';
            if (language=='english') {
                embedMassage.setTitle('Categories list:');
            }else if (language=='french') {
                embedMassage.setTitle('Liste des catégories:');
            }
            for (const category in categories) {
                if (categories.hasOwnProperty(category)) {
                    mes+='• '+categories[category].name+'\n';
                }
            }
            embedMassage.addField(mes,'--------------');
            message.channel.send(embedMassage);
        },language)
    }


   
}