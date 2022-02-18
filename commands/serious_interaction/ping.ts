import Discord from "discord.js"

module.exports = {
    commands: "ping",
    description: "The ping command",
    minArgs: 0,
    maxArgs: 0,
    callback: (message: Discord.Message, args: string[], text: string) => {
        message.reply("Pong!")
    },
}