const discord = require('discord.js')
const startRandomMessege = require('../utils/randomMessage');
const startMeme = require('../utils/meme')
require('dotenv/config');
const client = new discord.Client();
const arr = ['is jarvis a madarchod?', 'is talukdar a madarchod?', 'is sudipto a madarchod?', 'is biswa a madarchod?', 'is deep a madarchod?']
let totalMemes;
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity("Prime", { type: "LISTENING" });
});

client.on('message', msg => {

    if (!msg.content.startsWith("* ") && msg.content.toLowerCase().includes("prime") || msg.content.toLowerCase().includes("pritam")) {
        if (!msg.author.bot) {
            msg.reply('Prime is a good boi!!');
        }
    }
    if (msg.content.startsWith("* ")) {
        // msg.channel.send("Now you can chat with me!!");       
          startRandomMessege(msg.content).then(send =>{
              msg.channel.send(send);
          })    
    }
    if (msg.content.toLocaleLowerCase() == "bot what's your status?") {
        msg.reply("Always learning something new with Prime!");
    }
    if (msg.content.startsWith("*meme")) {
        if(totalMemes == undefined){
            startMeme().then(sendMeme =>{
               totalMemes = sendMeme;
            //    console.log(totalMemes);
               msg.channel.send(totalMemes[Math.floor(Math.random() * 51)].title + totalMemes[Math.floor(Math.random() * 51)].image)
            })
            msg.reply("Hang in there!")
        }
        else{
            msg.channel.send(totalMemes[Math.floor(Math.random() * 51)].title + totalMemes[Math.floor(Math.random() * 51)].image)
        }
    }
    if (msg.content.toLowerCase() === "who is the leader?") {
        msg.reply("Skrocks69 is the leader but we don't accept him as a leader!");
    }
    if (msg.content.toLowerCase() === "who is the madarchod?") {
        msg.reply('Everyone knows that talukdar is the madarchod of all time!!');
    }
    arr.forEach((elements) => {
        if (msg.content === elements) {
            msg.reply('Yeah definitely he is!!');
        }
    })
});

client.login(process.env.TOKEN);