const reqEvent = (event) => require(`../events/${event}`)

module.exports = bot => {
    bot.on("ready", function() {reqEvent("ready") (bot) });
    bot.on("reconnectiong", () => reqEvent("reconnecting") (bot))
    bot.on("disconnect", () => reqEvent("disconnect") (bot))
    bot.on("warn", () => reqEvent("warn") (bot))
    bot.on("error", () => reqEvent("error") (bot))
    bot.on("küfür", () => reqEvent("küfür") (bot))
}