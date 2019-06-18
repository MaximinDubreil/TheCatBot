const Discord = require('discord.js');
const bot = new Discord.Client();
const Ping = require('./commands/Ping');
const Cat = require('./commands/Cat');
const Breeds = require('./commands/Breeds');
const Help = require('./commands/Help');
const Categories = require('./commands/Categories');
require('dotenv').config();

bot.on('ready', function () {
  console.log("Je suis connecté !");
})

bot.on('message', function (message) {
  Ping.parse(message);
  Cat.parse(message);
  Breeds.parse(message);
  Help.parse(message);
  Categories.parse(message);
})

bot.login(process.env.BOT_LOGIN);