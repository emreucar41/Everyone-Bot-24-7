const Discord = require("discord.js");
const config = require("../botconfig.json");
const { inspect } = require("util");
const ownerid = "471590154927210497";

module.exports.run = async (bot, message, args) => {
  if(message.author.id == ownerid) {
    let toEval = args.join(" ")
    let evaluated = inspect(eval(toEval, { depth: 0 } ))
     try {
        if(toEval) {
            let hrStart = process.hrtime()
            let hrDiff; 
            hrDiff = process.hrtime(hrStart)
            return message.channel.send(`*Executed in ${hrDiff[0] > 0 ? `${hrDiff[0]}s` : ''}${hrDiff[1] / 1000000}ms.*\`\`\`javascript\n${evaluated}\n\`\`\``, { maxLength: 1900 })
        } else {
            message.channel.send("Error Whilst EvalUating: `Cannot Evaluated Air`")
        }
     } catch(e) {
        message.channel.send(`Error Whilst Evaluating: \`${e.message}\``)
     }
  } else {
      return message.reply(" You Don't Have Permission To Use This COmmand.").then(m => m.delete(10000))
  }

}

module.exports.help = {
    name: "eval",
    description: "Evaluates Js Code",
    accessableby: "Bot Owner",
    type: "owner",
    aliases: ["e"],
    noalias: "No Aliases",
    usage: `${config.prefix}eval <input>`
}
