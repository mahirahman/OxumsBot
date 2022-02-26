let Parser = require('rss-parser');
const { Permissions } = require('discord.js');

module.exports = {
    name: 'setupdates',
    description: '!setupdates command will link all Rust updates and news to the discord channel where the command was executed.',
    execute(message, args) {

        return message.channel.send('Command is under construction. Check back later.');

        if (args.length) {
            return message.reply('This command does not take any arguments. Please use !setupdates to link all Rust updates to this channel.');
        }

        // Check if user has admin permission to use this command
        if (!message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) {
            return message.reply('You do not have permission to use this command.');
        }

        // If user tries !setupdates command again in the same channel then
        // msg.reply('This channel is already linked to Rust updates.');
        // delete the above message after 30 seconds

        // If user tries !setupdates command in another channel, then link the new channel
        // and disgard the old channel.


        let postedNews = [];
        console.log('initial '+postedNews);
        // 86400000 = 24 hrs
        setInterval(postLatestNews, 1000, message, postedNews);
    },
};

const postLatestNews = (message, postedNews) => {
    (async () => {

        let parser = new Parser();
        let feed = await parser.parseURL('https://rust.facepunch.com/rss/news');
        latestNews = feed.items[0].link;
        
        // Latest news has not been posted
        if (!postedNews.includes(latestNews)) {
            postedNews.push(latestNews);
            console.log('postedNews '+postedNews);
            return message.channel.send(latestNews);
        }

    })();
};