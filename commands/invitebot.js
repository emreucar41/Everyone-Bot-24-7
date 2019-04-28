const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
        var link = "https://discordapp.com/oauth2/authorize?client_id=566363419180269599&permissions=8&scope=bot"
        var embed = new Discord.RichEmbed()
            .setColor("#808080")
            .addField("İnvite Link", "[Click Here](" + link + ")", false);

        message.channel.send(embed);
    });
};

module.exports.help = {
    name: "invitebot",

};
