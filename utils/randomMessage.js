const fetch = require('node-fetch');
require('dotenv').config()
const startRandomMessege = async (msg) => {
    try {
        console.log(msg);
        const randomMessege = msg.split("* ")[1];
        if (randomMessege.toLowerCase().includes('prime') || randomMessege.toLowerCase().includes('pritam')) {
             return `\`Prime is a good boi!!\``;
        }
        else {
           return await fetch(`https://api-monkedev.herokuapp.com/fun/chat?msg=${randomMessege}&uid=${process.env.USER_ID}&key=${process.env.API_KEY}
           `).then((res) => {
                return res.json();
            }).then((result) => {
                // console.log(result.response);
                return (result.response)
            });
        }
    }
    catch (error) {
        console.log(error);
    }
}
// console.log(startRandomMessege(msg));
module.exports = startRandomMessege;