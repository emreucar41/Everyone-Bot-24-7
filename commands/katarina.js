const Discord = module.require('discord.js');

var jokes = [
    "**Violence Solves Everything**",
    "**Let the massacre begin**",
    "**Let's dance**.",
    "**Noxus Wants Blood**",
    "**No Mercy**",
    "**I Can Not Wait**",
    "**I do not know what I've done for him**"

];

module.exports.run = async (bot, message, args) => {

      var DAD = new Discord.RichEmbed()
      .setDescription(jokes[Math.floor(Math.random() * jokes.length)])

      .setColor("0x#FF0000")

      message.channel.send(DAD);

}

module.exports.help = {
    name: "katarina"
}
