const discord = require('discord.js')
const { readFileSync } = require('fs')
const token = readFileSync('./Token.txt', 'utf-8');
const fetch = require("node-fetch");
const client = new discord.Client();
const redditImageFetcher = require("reddit-image-fetcher");
const arr = ['is jarvis a madarchod?', 'is talukdar a madarchod?', 'is sudipto a madarchod?', 'is biswa a madarchod?', 'is deep a madarchod?']
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity("Prime", { type: "LISTENING" });
});
client.on('message', msg => {

    if (msg.content.startsWith("* ")) {
        // msg.channel.send("Now you can chat with me!!");
        const startRandomMessege = async () => {
            try {
                const randomMessege = msg.content.split("* ")[1];
                console.log(randomMessege);
                await fetch(`https://api.monkedev.com/fun/chat?msg=${randomMessege}&uid=731901207290839091&key=konhR8gVgWPfqVWPrEeIoimjQ
                `).then((res) => {
                    return res.json();
                }).then((result) => {
                    msg.channel.send(result.response)
                });
            }
            catch (error) {
                msg.channel.send(error);
            }
        }
        startRandomMessege()
    }
    if (msg.content.toLocaleLowerCase() == "bot what's your status?"){
        msg.reply("Always learning something new with Prime!");
    }
    if (msg.content.startsWith("*meme")) {
        const startMeme = async () => {
            try {
                await redditImageFetcher.fetch({
                    type: 'meme',
                    total: 50,
                    addSubreddit: ['memes', 'funny', "dank"],
                }).then(result => {
                    console.log(result);
                    (result[Math.floor(Math.random() * 51)].title, result[Math.floor(Math.random() * 51)].image)
                    msg.channel.send(`${result[Math.floor(Math.random() * 51)].title}
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
        console.log(msg.channel.id);
        msg.reply('Prime is a good boi!!');
    }
    arr.forEach((elements) => {
        if (msg.content === elements) {
            msg.reply('Yeah dedifinitely he is!!');
        }
    })
});

client.login(token);