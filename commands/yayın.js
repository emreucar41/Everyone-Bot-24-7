const Discord = require("discord.js");
const snekfetch = require('snekfetch');
const botconfig = require("../botconfig.json");
const client = new Discord.Client({disableEveryone: true});
let cyan = botconfig.cyan;


module.exports.run = async (bot, message, args) => {

   let profil = "https://cdn.discordapp.com/attachments/560130952957788201/571333410073739264/avatar.png"
   let link = "https://www.twitch.tv/zedtlegends"

   let stream = new Discord.RichEmbed()
   .setThumbnail(profil)
   .setDescription("**Stream Starting**")
   .setColor(cyan)
   .addField("Rule 1", "Tehdit edici, küfürlü, müstehcen, kaba, nefret dolu yada aşırı sayıda istenmeyen mesajlar göndermek veya sesli odalarda konuşmak; din, dil, ırk ayrımına yönelik iletiler göndermek ve materyaller kullanmak kesinlikle yasaktır.")
   .addField("Rule 2", "Yazı kanallarında veya sesli odalarda kişi veya firmaların onurlarını zedeleyecek hakaret, küfür vs. içeren mesajları yazmak kesinlikle yasaktır.")
   .addField("Rule 3", "Discorddaki bir kullanıcıyı bir konuda bilgisi olmadığı veya az bilgisi olduğu için veya bir konuda hatalı bilgi verdiği için suçlayıp hakaret edemezsiniz. Böyle durumlarda lütfen olaya kibarca yaklaşın.")
   .addField("Rule 4", "Yazı kanallarında gereksiz mesajlar yazıp sunucuda gereksiz bir karmaşa yaratanlar önce uyarılıp ardından gerek görülürse sunucudan uzaklaştırılacaktır")
   .addField("Rule 5", "Discordda dil, din, ırk ve siyaset hakkında tartışma yapmak kesinlikle yasaktır, siyasi yazılarınızı siyasi içerikli sunuculara girerek dile getirebilirsiniz, sunucuyu siyasi propaganda için kullananların hesapları yasaklanır.")
   .addField("Rule 6", "Mesaj yazarken büyük harf kullanmak bağırmak anlamına geleceği için kesinlikle büyük harf kullanarak yazı yazmayınız.")
   .addField("Rule 7", "Discord sohbet merkezi olduğu için gereksiz-kişisel tartışmalara-atışmalara girmek yasaktır. Discord birbirinize meydan okuyacak bir yer değildir.")
   .addField("Rule 8", "Başkasına ait kişisel bilgiler yayınlamak yasaktır. (Telefon numarası, E-Posta adresi, Fotoğraf v.b.)")
   .addField("Rule 9", "Yetkililer her yazılan mesajı kontrol edemeyebilirler. Yöneticilerden önce uygunsuz bir mesajla karşılaştığınızda lütfen sorumlu yöneticilere bildiriniz.")
   .addField("**Stream Link**", "[**Click Here**](" + link + ")", false);

  message.channel.send(stream)

}

module.exports.help = {
    name: "stream",
    decription: "Twitch Streams Starting Accountments",
    usage: "?stream",
    accessableby: "Members",
    aliases: ["ut"],
    noalias: "No Aliases"
}