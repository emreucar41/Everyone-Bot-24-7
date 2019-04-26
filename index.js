const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const fs = require("fs");
let green = botconfig.green;
let xp = require("./xp.json");
let cooldown = new Set();
let cdseconds = 5;
bot.commands = new Discord.Collection();
require("./util/eventHandler")(bot),



fs.readdir("./commands/", (err, files) => {
  const active = new Map();

  if(err) console.log(err);

 let jsfile = files.filter(f => f.split(".").pop() === "js")
 if(jsfile.length <= 0){
   console.log("Komut Bulunamadı.");
   return;
  }

 jsfile.forEach((f, i) =>{
   let props = require(`./commands/${f}`);
   console.log(`${f} Kullanıma Hazır.`);
   bot.commands.set(props.help.name, props);
  });

});

bot.on("message", async message => {
   if(message.author.bot) return;
   if(message.channel.type === "dm") return;
   

   if (message.content.toLowerCase === 'ping') {
    message.channel.send('Pong!');
  }

   let xpAdd = Math.floor(Math.random() * 7)+ 8;
   

   if(!xp[message.author.id]){
     xp[message.author.id] = {
       xp: 0,
       level: 1 
     };
   }

   
   let curxp = xp[message.author.id].xp;
   let curlvl = xp[message.author.id].level;
   let nxtlvl = xp[message.author.id].level * 300;
   xp[message.author.id].xp = curxp + xpAdd;
   if(nxtlvl <= xp[message.author.id].xp){
     xp[message.author.id].level = curlvl + 1;
   let lvlup = new Discord.RichEmbed()
   .setTitle("Level Up!")
   .setColor(green)
   .addField("New Level", curlvl + 1);

   message.channel.send(lvlup).then(msg => {msg.delete(5000)});

   }
   fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
    if(err) console.log(err)
  });
 

   let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

   if(!prefixes[message.guild.id]){
     prefixes[message.guild.id] = {
       prefixes: botconfig.prefix
     };
   }

   let prefix = prefixes[message.guild.id].prefixes;
   if(!message.content.startsWith(prefix)) return;
   if(cooldown.has(message.author.id)){
     message.delete();
     return message.reply("Please Wait 3 Seconds.")
   }

   // if(!message.member.hasPermission("ADMINISTRATOR")){
     cooldown.add(message.author.id);
   // }

   


   let messageArray = message.content.split(" ");
   let cmd = messageArray[0];
   let args = messageArray.slice(1);



   let commandfile = bot.commands.get(cmd.slice(prefix.length));
   if(commandfile) commandfile.run(bot,message,args);

   setTimeout(() => {
     cooldown.delete(message.author.id)
   }, cdseconds * 600)




});

bot.login(botconfig.token);
