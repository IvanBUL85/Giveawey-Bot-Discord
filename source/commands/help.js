const Command = require("../handlers/command.js");

module.exports = class extends Command {
    constructor(client, filePath) {
        super(client, filePath, {
            name: "help",
        });
    }

    execute(message) {
        //message.author.send("```!create <time-in-seconds> <giveaway-title>\nmg!delete <giveaway-id>```");
        message.channel.send("**Hi there!** I am known as IvanBUL85 Developer. While my origins are mostly unknown, people are known to associate me with IvanBUL85ᵐʸˢᵗᵉʳʸˢᵠᵘᵃᵈ | MGS Node#3016. Ha. What fools. Tell me, are you looking for a automated giveaway? Well, are you? I have the perfect thing for you. Try `!invite` to get me into your server, then go through and start your own giveaway using the commands in `!commands`. I will be seeing you soon...");
    }
};