const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let request = await message.channel.send("**Please Wait.**").then(m => m.delete(10000));
  let taggedUser = message.mentions.users.first() || message.author;

  await message.channel.send({files: [
  {
    attachment: taggedUser.displayAvatarURL,
    name: "avatar.png"
  }
]});
message.delete();
}
module.exports.help = {
  name:"avatar"
}
