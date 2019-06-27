const Command = require('./Command');
const Discord = require('discord.js');

module.exports = class Help extends Command {
    static match(message){
        return message.content.startsWith('!cat help');
    }

    static action(message) {
        let embedMessage = new Discord.RichEmbed()
            .setTitle('Commands list:')
            .setColor('#00ff43')
            .setThumbnail('https://www.lifewithcats.tv/wp-content/uploads/2017/01/cat-intelligent-memory-dogs-study-japan-e1485482745363.jpg')
            .addField('!cat', 'Random gif or image')
            .addField('!cat [breedID]', 'Random image of the requested breed with a description')
            .addField('!cat [format]', 'Random image in the desired format, gif png or jpg')
            .addField('!cat [category]', 'Random image of the chosen category')
            .addField('!cat breeds', 'List of all breeds with their ID')
            .addField('!cat categories','List of image categories')
            .addField('!cat ping', 'Pong')
            .addField('!cat help', 'No need to explain')
        message.channel.send(embedMessage);
    }
}