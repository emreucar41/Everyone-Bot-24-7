const Discord = module.require('discord.js');
const botconfig = require("../botconfig.json");
let cyan = botconfig.cyan;

module.exports.run = async (bot, message, args) => {

    let rMember = message.mentions.members.first() || message.guild.members.find(m => m.user.tag === args[0]) || message.guild.members.get(args[0])
    if(!rMember) return message.channel.send("Please Provide A User To Add A Role Too.")
    let role = message.guild.roles.find(r => r.name == args[1]) || message.guild.roles.find(r => r.id == args[1]) || message.mentions.roles.first()
    if(!role) return message.channel.send("Please Provide A Role To Add To Said User.") 
    let reason = args.slice(2).join(" ")
    if(!reason) return message.channel.send("Please Provide A Reason")

    if(!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("I Don't Have Permission To Perform This Command.")

    if(rMember.roles.has(role.id)) {
       return message.channel.send(`${rMember.displayName}, Already Has The Role!`)
    } else {
        await rMember.addRole(role.id).catch(e => console.log(e.message))
        message.channel.send(`The Role, ${role.name}, Has Been Added To ${rMember.displayName}.`)
    }

    let embed = new Discord.RichEmbed()
    .setColor(cyan)
    .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
    .addField("Mderation:", "Addrole")
    .addField("Mutee:", rMember.user.username)
    .addField("Moderator:", message.author.username)
    .addField("Reason:", reason)
    .addField("Date:", message.createdAt.toLocaleString());

    let sChannel = message.guild.channels.find(c => c.name === "log")
    sChannel.send(embed)

}

module.exports.help = {
    name: "kayit",
    decription: "Register Server And Join The Voice Channel vs.",
    usage: "?kayıt",
    accessableby: "Members",
    aliases: ["ut"],
    noalias: "No Aliases"
}