const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
let white = botconfig.white;
let xp = require("../xp.json");

module.exports.run = async (bot, message, args) => {

    if(!xp[message.author.id]){
      xp[message.author.id]= {
          xp: 0,
          level:1
    };
    }

    let curxp = xp[message.author.id].xp;
    let curlvl = xp[message.author.id].level;
    let nxtLvlXp = curlvl * 300;
    let difference = nxtLvlXp - curxp;

    let lvlEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setColor(white)
    .addField("Level", curlvl, true)
    .addField("Xp", curxp, true)
    .setFooter(`${difference} XP Til Level Up`, message.author.displayAvatarURL);

    message.channel.send(lvlEmbed).then(msg => {msg.delete(15000)});

}

module.exports.help = {
    name: "level",
    description: "Your Current Level",
    usage: "?level",
    accessableby: "Member",
    aliases: ["lvl"]
}