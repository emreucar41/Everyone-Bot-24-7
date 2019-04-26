const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("You Don't Have Permissions To Perform This Command!")

    let banMember = message.mentions.members.first() || message.guild.members.get(args[0])
    if(!banMember) return message.channel.send("Please Provide A User To Ban!")

    let reason = args.slice(1).join(" ");
    if(!reason) reason = "No Reason Given!"
    if(!message.guild.me.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("I Don't Have Permission To Perform This Command!")

    message.delete()

    banMember.send(`Hello, You Have Been Banned From ${message.guild.name} For: ${reason}`).then(() => 
    message.guild.ban(banMember, { days: 1, reason: reason})).catch(err =>  console.log(err))

    message.channel.send(`**${banMember.user.tag} Has Been Banned!**`)

    let embed = new Discord.RichEmbed()
    .setColor("#FF0000")
    .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
    .addField("Moderation:", "ban")
    .addField("Mutee:", banMember.user.username)
    .addField("Moderator:", message.author.username)
    .addField("Reason:", reason)
    .addField("Date", message.createdAt.toLocaleString())

    let sChannel = message.guild.channels.find(c => c.name === "log")
    sChannel.send(embed)


}

module.exports.help = {
    name: "ban",
    decription: "Ban A User From The Guild!",
    usage: "?ban",
    accessableby: "Administrators",
    noalias: "No Aliases",
    aliases: ["b", "banish", "remove"]
}