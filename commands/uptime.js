const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {

    function duration(ms) {
        const sec = Math.floor((ms / 1000) % 60).toString()
        const min = Math.floor((ms / (1000 * 60)) % 60).toString()
        const hrs = Math.floor((ms / (1000 * 60 * 60)) % 60).toString()
        const days =Math.floor((ms / (1000 * 60 * 60 * 24)) % 60).toString()
        return `${days.padStart(1, "0")} Days, ${hrs.padStart(2, "0")} Hours, ${min.padStart(2, "0")} Minutes, ${sec.padStart(2, "0")} seconds, `
    }

    message.channel.send(`*I Have Been Online For:* ***${duration(bot.uptime)}***`)

}

module.exports.help = {
    name: "uptime",
    decription: "Displays The Bots Current Uptime!",
    usage: "?uptime",
    accessableby: "Members",
    aliases: ["ut"]
}