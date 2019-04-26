const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission(["KICK_MEMBERS", "ADMINISTRATOR"])) return message.channel.send(" You Don't Have Permission To Perform This Command!")

    let kickMember = message.mentions.members.first() || message.guild.members.get(args[0])
    if(!kickMember) return message.channel.send("Please Provide A User To Kick!")

    let reason = args.slice(1).join(" ")
    if(!reason) reason = "No Reason Given!"

    if(!message.guild.me.hasPermission(["KICK_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("I Don't Have Permission To Do This!")

    kickMember.send(`Hello, You Have Been Kicked From ${message.guild.name} For: ${reason}`).then(() =>
    kickMember.kick()).catch(err => console.log(err))

    message.channel.send(`**${kickMember.user.tag} Has Been Kicked!**`)

    let embed = new Discord.RichEmbed()
    .setColor("#FF0000")
    .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
    .addField("Moderation:", "kick")
    .addField("Mutee:", kickMember.user.username)
    .addField("Moderator:", message.author.username)
    .addField("Reason:", reason)
    .addField("Date", message.createdAt.toLocaleString())

    let sChannel = message.guild.channels.find(c => c.name === "log")
    sChannel.send(embed)


}

module.exports.help = {
    name: "kick",
    decription: "Kick A User From The Guild!",
    usage: "?kick",
    accessableby: "Moderator",
    aliases: ["k"]
}