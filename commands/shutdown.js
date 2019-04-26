const Discord = require("discord.js")
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {
    if(message.member.roles.some(r=>["Sunucu Sahibi","Yönetici","Yoneticinin sag kolu","YÖNETİCİ"].includes(r.name))){ 
        return message.channel.send("XDXD")
    }
    if(message.author.id != "471590154927210497") return message.channel.send("You're The Bot The Owner!")

    try {
    await message.channel.send("Bot İs Shutting Down...")
    process.exit()
    } catch(e) {
        message.channel.send(`ERROR: ${e.message}`)
    }
}

module.exports.help = {
    name: "shutdown",
    description: "Shuts Down The Bot",
    usage: "?shutdown",
    accessableby: "Bot Owner",
    aliases: ["botstop"]
} 
