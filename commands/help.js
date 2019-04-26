const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const prefix = botconfig.prefix


module.exports.run = async (bot, message, args) => {

    if(args[0] == "help") return message.channel.send(`*Just Do ${prefix}help Instead.*`)

    if(args[0]) {
        let command = args[0];
        if(bot.commands.has(command)) {
            command = bot.commands.get(command);
            var SHembed = new Discord.RichEmbed()
            .setColor("#0000FF")
            .setAuthor(`EveryoneBOT Help`, message.guild.iconURL)
            .setDescription(`**The Bot Prefix Is: ${prefix}**\n\n**Command:** ${command.help.name}\n**Description:** ${command.help.description || "No Description"}\n**Usage:**${command.help.usage || "No Usage"}\n**Accessable By:** ${command.help.accessableby || "Members"}\n**Aliases:** ${command.help.noalias || command.config.aliases}`)
            message.channel.send(SHembed);
        }}
    
        if(!args[0]) {
            message.delete();
            let embed = new Discord.RichEmbed()
            .setAuthor(`Help Command!`, message.guild.iconURL)
            .setColor("#0000FF")
            .setDescription(`${message.author.username} Check Your Dms!`)

            let Sembed = new Discord.RichEmbed()
            .setColor("#0000FF")
            .setAuthor(`EveryoneBOT Help`,)
            .setThumbnail(bot.user.displayAvatarURL)
            .setTimestamp()
            .setDescription(`*These Are The Available Commands For The EveryoneBOT!*\n**The Bot Prefix Is: ${prefix}**`)
            .addField(`Moderators Commands:`, "```Ban ChangeName Mute Kick NewPrefix ShutDown Unmute Reload Eval Clear Css Softban```")
            .addField(`Users Commands:`, "```InviteBot Katarina Level Ping Poker Search AddFriend Friends```")
            message.channel.send(embed).then(m => m.delete(10000));
            message.author.send(Sembed)
        }

}

module.exports.help = {
    name: "help",
    aliases: ["h", "halp", "commands"],
    usage: "?usage",
    description: "",
    noalias: "No Aliases",
    accessableby: "Members"
}
