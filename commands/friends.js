module.exports.run = async (bot, message, args, db, client, Discord, prefix, fetch) => {
  var friends = [];
  var fetched;
  db.fetch(`${message.author.id}.friendlist`).then(async i =>{
      if(i !== undefined && i !== null)friends = JSON.parse(i);

      if(friends === [])return message.channel.send("You Need Some Friends Vefore You Can Use This Command. Add Some Friends By Using The Command" + prefix + "addfriend (friend).");

      var embed = new Discord.RichEmbed()
      .setDescrtipion("```ruby" + "\nFriends Menu \n\nFriends: " + await listFriends(friends) + "```")
      return message.channel.send(embed);
  });

  async function listFriends(array){
      var result = [];
      await array.forEach(function(item){
result.push(client.users.get(`${item}`).tag);
      });
      return result.join("\n");
  }
}

module.exports.help = {
    name: "friends"
}