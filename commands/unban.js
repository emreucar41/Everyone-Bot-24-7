const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("You Don't Have Permission To Perform This Command!")

    let bannedMember = await bot.fetchUser(args[0])
       if(!bannedMember) return message.channel.send("Please Provide A User İd To Unban Someone!")

    let reason = args.slice(1).join(" ")
       if(!reason) reason = "No Reason Give!"

    if(!message.guild.me.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("I Don't Have Permission To İd Perform This Command!")|
    message.delete()
    try {
        message.guild.unban(bannedMember, {reason: reason})
        message.channel.send(`${bannedMember.tag} Has Been Unbanned From The Guild!`)
    } catch(e) {
      console.log(e.message)
    }

    let embed = new Discord.RichEmbed()
    .setColor("#FF0000")
    .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
    .addField("Moderation:", "unban")
    .addField("Moderatored on:", `${bannedMember.username} (${bannedMember.id})`)
    .addField("Moderator:", message.author.username)
    .addField("Reason:", reason)
    .addField("Date:", message.created.At.toLocaleString())

    let sChannel = message.guild.channels.find(c => c.name === "log")
    sChannel.send(embed)


}

module.exports.help = {
    name: "unban",
    decription: "Unban A User From The Guild!",
    usage: "?unban",
    accessableby: "Administrators",
    noalias: "No Aliases",
    aliases: ["ub", "ubanish"]
}