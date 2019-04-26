const google = require('google');

google.resultsPerPage = 3;

module.exports.run = (bot, message, params) => {
  google(params, function (err, res){
  if (err) console.error(err);
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("No.");
    message.channel.sendMessage(" ", {embed: {
      title: `Searching: ${params}`,
      fields: [
    {
      name: `Answer:`,
      value: `[${res.links[0].title}](${res.links[0].href}) \n ${res.links[0].description}`
    }
  ]
    }});

  }
)};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name : "search",
  description: "searches google",
  usage: "google [what you want to search]"
};
