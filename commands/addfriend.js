const fetch = require("fetch");
module.exports.run = async (bot, message, args, db, client, Discord, prefix, fetch) => {
  var mentioned = message.mentions.members.first();
  var friends = [];
  var fetch = [];
  db.fetch(`${message.author.id}.friendlist`).then(i => {

    if(!mentioned)return message.channel.send("Please Mention A Vaild User To Add As Your Friends.");
    var user = mentioned.user;

    if(i !== undefined && i !== null)friends = JSON.parse(i);

    if(friends.indexOf(user.id) !== -1)return message.channel.send("You Have Already Added This Person As Person Your Friends");

    friends.push(user.id)

    db.set(`${message.author.id}.friendlist`, JSON.stringify(friends));
    message.channel.send(`You Have Succsefully Added ${user.tag} To Your Friend List.`);
  });

}

module.exports.help = {
    name: "addfriend"
}