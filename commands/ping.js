const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {

    message.channel.send("```Pinging...```").then(m => {
         let ping = m.createdTimestamp - message.createdTimestamp
         let = choices = ["Is This Really My Ping", "Is It Okay? I Cant Look", "I Hope It Isnt Bad"]
         let response = choices[Math.floor(Math.random() * choices.length)]

         m.edit(`*${response}:* **Bot Latency:** \`${ping}\`, **API Latency:** \`${Math.round(bot.ping)}\``)
    })
}

module.exports.help = {
    name: "ping",
    decription: "PONG! Displays The Api & Bot Latency",
    usage: "?uptime",
    accessableby: "Members",
    aliases: ["latency"]
}