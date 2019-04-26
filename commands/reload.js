const Discord = require("discord.js")
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {

    if(message.author.id != "471590154927210497") return message.channel.send("You're The Bot The Owner!")
    
    if(!args[0]) return message.channel.send("Please Provide A Command To Reload!")

    let commandName = args[0].toLowerCase()
    
    try {
        delete require.cache[require.resolve(`./${commandName}.js`)]
        bot.commands.delete(commandName)
        const pull = require(`./${commandName}.js`)
        bot.commands.set(commandName, pull)
    } catch(e) {
           return message.channel.send(`Could Not Reload: \`${args[0].toUpperCase()}\``)
    }

    message.channel.send(`The Command \`${args[0].toUpperCase()}\` Has Been Reloaded!`)

}

module.exports.help = {
    name: "reload",
    description: "Reloads A Bot Command!",
    usage: "?reload",
    accessableby: "Bot Owner",
    aliases: ["creload"]
}
