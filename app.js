const discord = require('discord.js')
const client = new discord.Client();
const redditImageFetcher = require("reddit-image-fetcher");
const arr = ['is jarvis a madarchod?', 'is talukdar a madarchod?', 'is sudipto a madarchod?', 'is biswa a madarchod?', 'is deep a madarchod?']
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity("Prime", { type: "LISTENING" });
});

client.on('message', msg => {

    if (msg.content.startsWith("*meme")) {
        const startMeme = async () => {
            try {
                await redditImageFetcher.fetch({
                    type: 'meme',
                    total: 50,
                    addSubreddit: ['memes', 'funny'],
                }).then(result => {
                    console.log(result);
                    msg.reply(`${result[Math.floor(Math.random() * 51)].title}
                            ${result[Math.floor(Math.random() * 51)].image}`);
                });
            } catch (error) {
                console.log(error);
            }
        }
        startMeme()
        msg.reply("Hang in there!")

    }

    if (msg.content.toLowerCase() === "who is the leader?") {
        msg.reply('Mystical-joy is the leader but we dont accept him as a leader!');
    }
    if (msg.content.toLowerCase() === "who is the madarchod?") {
        msg.reply('Everyone knows that talukdar is the madarchod of all time!!');
    }
    if (msg.content.includes("prime")) {
        msg.reply('Prime is a good boi!!');
    }
    arr.forEach((elements) => {
        if (msg.content === elements) {
            msg.reply('Yeah dedifinitely he is!!');
        }
    })
});



client.login('ODU2ODkyMDc5NjMyNjc4OTEz.YNHo8A.fCr23I6XuquRDqGdcRxtXtP64dM');