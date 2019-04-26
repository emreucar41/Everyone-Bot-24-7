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

    let muterole = message.guild.roles.find(x => x.name === "Muted")
    if(!muterole) {
        try{
            muterole = await message.guild.createRole({
                name: "Muted",
                color: "#514f48",
                permissions: []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwrite.Permissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false,
                    SEND_TTS_MESSAGES: false,
                    ATTACH_FILES: false,
                    VOİCE_SPEAK: false
                })
            })
        } catch(e){
            console.log(e.stack);
        }
    }


    mutee.addRole(muterole.id).then(() => {
        message.delete()
        mutee.send(`Hello, You Have Been İn ${message.guild.name} for: ${reason}`)
        message.channel.send(`\`${mutee.user.username} Was Succesfully Muted.\``)
    })


    let embed = new Discord.RichEmbed()
    .setColor("#FF0000")
    .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
    .addField("Moderation:", "mute")
    .addField("Mutee", mutee.user.username)
    .addField("Moderation:", message.author.username)
    .addField("Date:", message.createdAt)

    let sChannel = message.guild.channels.find(c => c.name === "log")
    sChannel.send(embed)
}
    module.exports.help = {
        name: "mute",
        description: "Mutes A Member İn The Discord!",
        usage: "?mute >@user> >reason>",
        accessableby: "Members",
        noalias: "No Aliases",
        aliases: ["m", "nosepak"]
    }