const Discord = module.require('discord.js');

module.exports.run = async (bot, message, args) => {

//console.log(args[0]);// user
//console.log(args[1]);// role
//console.log(args[2]);//time

if(message.member.hasPermission("ADMINISTRATOR")) {

  if(!args){
    return message.channel.send(":x: " + "| Pls Write New Name");
  }
  message.guild.member(bot.user).setNickname(args.join(" ")).then(user => message.channel.send("**Thanks My New Name İs** " + args.join( " " ) + "\` ! \`")).catch(console.error);
} else {
  return message.reply(":x: " + "| Pls Don't Try.")
  }
}

module.exports.help = {
    name: "changename"
}
