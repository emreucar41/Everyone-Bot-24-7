const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_ROLES") || !message.guild.owner) return message.channel.send("You Dont Have Permission To User Tihs Command.")

    if(!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("I Don't Have Permission To Add Roles!")

    let mutee = message.mentions.members.first() || message.guild.members.get(args[0])
    if(!mutee) return message.channel.send("Please Supply A User To Be Muted!")

    let reason = args.slice(1).join(" ");
    if(!reason) reason = "No Reason Given."

    let muterole = message.guild.roles.find(r => r.name === "Muted")
    if(!muterole) return message.channel.send("There İs No Mute Role To Remove!")
    mutee.removeRole(muterole.id).then(() => {
        message.delete()
        mutee.send(`Hello, You Have Been Unmuted in ${message.guild.name} For: ${reason}`).catch(err => console.log(err))
        message.channel.send(`\`${mutee.user.username} Was Unmuted!\``)
    })

    let embed =new Discord.RichEmbed()
    .setColor("#FF0000")
    .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
    .addField("Moderation:", "unmute")
    .addField("Mutee", mutee.user.username)
    .addField("Moderation:", message.author.username)
    .addField("Date:", message.createdAt)

    let sChannel = message.guild.channels.find(c => c.name === "log")
    sChannel.send(embed)



}
module.exports.help = {
    name: "unmute",
    decription: "Unmutes A Mmber  İn The Discord!",
    usage: "?unmute >@user> >reason>",
    accessableby: "Members",
    aliases: ["unm", "sepak"]
}