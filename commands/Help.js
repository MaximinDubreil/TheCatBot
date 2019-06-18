const Command = require('./Command');
const Discord = require('discord.js');

module.exports = class Help extends Command {
    static matchEnglish(message){
        return message.content.startsWith('!cat help');
    }
    static matchFrench(message){
        return message.content.startsWith('!chat aide');
    }

    static action(message,language) {
        if(language=='french'){
            let embedMessage = new Discord.RichEmbed()
                .setTitle('Liste des commandes:')
                .setColor('#00ff43')
                .setThumbnail('https://www.lifewithcats.tv/wp-content/uploads/2017/01/cat-intelligent-memory-dogs-study-japan-e1485482745363.jpg')
                .addField('!chat', 'Image ou gif aléatoire.')
                .addField('!chat [raceID]', 'Image aléatoire de la race demandée avec une description.')
                .addField('!chat [format]', 'Image aléatoire au format désiré, gif png ou jpg.')
                .addField('!chat [catégorie]', 'Image aléatoire de la catégorie choisie.')
                .addField('!chat races', 'La liste de toutes les races avec leur ID.')
                .addField('!chat catégories','Liste des catégories d\'image.')
                .addField('!chat aide', 'Pas besoin de vous expliquer.')
                .setFooter('Vous pouvez utiliser le bot en anglais avec !cat');
            message.channel.send(embedMessage);
        }else if(language=='english'){
            let embedMessage = new Discord.RichEmbed()
                .setTitle('Commands list:')
                .setColor('#00ff43')
                .setThumbnail('https://www.lifewithcats.tv/wp-content/uploads/2017/01/cat-intelligent-memory-dogs-study-japan-e1485482745363.jpg')
                .addField('!cat', 'Random gif or image.')
                .addField('!cat [breedID]', 'Random image of the requested breed with a description.')
                .addField('!cat [format]', 'Random image in the desired format, gif png or jpg.')
                .addField('!cat [category]', 'Random image of the chosen category.')
                .addField('!cat breeds', 'List of all breeds with their ID.')
                .addField('!cat categories','List of image categories.')
                .addField('!cat help', 'No need to explain.')
                .setFooter('You can use the bot in french with !chat');
            message.channel.send(embedMessage);
        }
        
    }
}