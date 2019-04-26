module.exports.run = (client, message, args) => {
    var v = ~~(Math.random() * 3);  // 0 to 2
    var deathText = ":diamonds: \`Şansına Karo Şunu Unutma Bir Pokerci Asla Düşünmeden Haraket Yapmaz.\` ";
    var aliveText = ":spades: \`Şansına Maça Şunu Unutma Bir Pokerci Asla Düşünmeden Haraket Yapmaz.\` ";
    var defaultText = ":diamonds: \`Vs\` :spades: ";

    message.channel.send(defaultText + "   **Sence Maça Mı Yoksa Karo Mu 3 Saniye!**")
        .then(msg => {
            setTimeout(function() {
                msg.edit(defaultText + "   **Sence Maça Mı Yoksa Karo Mu 2 Saniye!**")
                    .then(msg => {
                        setTimeout(function() {
                            msg.edit(defaultText + "   **Artık Kararını Ver!!! Son 1 Saniye!**")
                                .then(msg => {
                                    setTimeout(function() {

                                        if(v == 0){
                                            msg.edit(deathText);
                                        }else{
                                            msg.edit(aliveText);
                                        }
                                        
                                    }, 1000);
                                });
                        }, 1000);
                    });
            }, 1000);
        })
        .catch(console.error);
};

module.exports.help = {
    name: "poker",
    alias: ["p", "joker", "roulette"],
    permission: "default",
    type: "fun",
    guildOnly: false,
	help: "Simulate a russian roulette game so you don't die IRL by mistake."
};
