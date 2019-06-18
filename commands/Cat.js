const TheCatApi = require('../api/TheCatApi')
const Command = require('./Command')
const Discord = require('discord.js')

module.exports = class Cat extends Command{

    static traitementFormat(str,callback){
        if(str==='gif'||str==='png'||str==='jpg'){
             callback(str); 
        }
        
    }

    static traitementBreed(str, callback){
        TheCatApi.httpGetBreeds(function(breeds){
            for (const breed in breeds) {
                if (breeds.hasOwnProperty(breed)) {
                    if(str == breeds[breed].id){
                        callback(str);
                    }
                }
            }
        })
    }

    static traitementCategory(str, callback){
        TheCatApi.httpGetCategories(function(categories) {
            for (const category in categories){
                if (categories.hasOwnProperty(category)){
                    if(str==categories[category].name){
                        callback(categories[category].id);
                    }
                }
            }
        })
    }



////////////////////////////////////////////////////////////////////////////////////////////

    static matchEnglish(message){
        return message.content.startsWith('!cat');
    }
    static matchFrench(message){
        return message.content.startsWith('!chat');
    }

    static action (message,language){
        let tab = message.content.split(" ");
        let format ='';
        let raceId ='';
        let categoryId='';
        
        if(tab.length === 2) {
            this.traitementFormat(tab[1],function(str){
                format=str;
                TheCatApi.httpGetMessages(function(response){
                    if(response.hasOwnProperty('url')){
                        let embedMessage = new Discord.RichEmbed()
                        .setColor('#9b0007')
                        .setImage(response.url)
                        message.channel.send(embedMessage);
                    }
                    
                },format,raceId,categoryId)  
                
            });
            this.traitementBreed(tab[1], function(str){
                raceId=str;
                TheCatApi.httpGetMessages(function(response){
                    if(response.hasOwnProperty('url')){
                        let embedMessage = new Discord.RichEmbed()
                        .setColor('#00ff43')
                        .setTitle(response.breeds[0].name)
                        .setImage(response.url)
                        .setDescription(response.breeds[0].description);
                        message.channel.send(embedMessage);
                    }
                },format,raceId,categoryId)                
            });
            this.traitementCategory(tab[1], function(str){
                categoryId=str;
                TheCatApi.httpGetMessages(function(response){
                    if(response.hasOwnProperty('url')){
                        let embedMessage = new Discord.RichEmbed()
                        .setColor('#ff6f7d')
                        .setImage(response.url)
                        message.channel.send(embedMessage);
                    }
                },format,raceId,categoryId)
            })
        }else if (tab.length === 1){
            TheCatApi.httpGetMessages(function(response){
                let embedMessage = new Discord.RichEmbed()
                .setColor('#00ff43')
                .setImage(response.url)
                message.channel.send(embedMessage);
            },format,raceId,categoryId)
        }else{
            if (language=='english') {
                message.channel.send('Please enter only one parameter, be the image format, the id of a race or the name of a category. To have the list of commands: !cat help')
            }else if(language=='french'){
                message.channel.send('Veuillez saisir un seul paramêtre, sois le format de l\'image, l\'id d\'une race ou le nom d\'une catégorie. Pour avoir la liste des commandes : !chat aide');
            }
        }
    }
}