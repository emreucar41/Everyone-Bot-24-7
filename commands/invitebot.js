const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
    client.generateInvite().then(link => {
        var embed = new Discord.RichEmbed()
            .setColor("#808080")
            .addField("İnvite Link", "[Click Here](" + link + ")", false);

        message.channel.send(embed);
    });
};

module.exports.help = {
    name: "invitebot",

};
