const redditImageFetcher = require("reddit-image-fetcher");
const startMeme = async () => {
    try {
        return await redditImageFetcher.fetch({
            type: 'meme',
            total: 50,
            addSubreddit: ['memes', 'funny', "dank"],
        }).then(result => {
            return result;

        }).then(res => {
            const newResponse = res.map(memes => {
                const { title, image } = memes;
                return { title, image };
            })
            // console.log(newResponse);
            return newResponse;
        })
    } catch (error) {
        console.log(error);
    }
}
module.exports = startMeme;