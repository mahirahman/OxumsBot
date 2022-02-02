const Discord = require('discord.js');
const moment = require('moment');

module.exports = {
    name: 'force',
    description: '!force command will reply with the next scheduled force wipe date.',
    execute(message, args) {

        if (args.length) {
            return message.reply(`This command does not take any arguments. Please use !force to check when the next force wipe is.`);
        }

        // The force time is 11 AM PST or 5 AM AEST etc
        // This value needs to be hardcoded based on the location of the system this bot is running on
        FORCE_TIME = '5:0:00';
        timeUntilForce = dhms(moment(FORCE_TIME, 'HH:mm:ss').diff(moment(getCurrentTime(), 'HH:mm:ss')));

        const embed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .addFields(
            { name: 'Next Force Wipe', value: `\`\`\`${moment(getForceWipe()).format("MMMM Do")}\`\`\``},
            { name: 'Time Until Force Wipe', value: `\`\`\`${timeUntilForce}\`\`\``}
        )
        return message.channel.send({embeds: [embed]});
    },
};

// Returns the date of the next force wipe
function getForceWipe() {
    const date = new Date();
    let currDate = date.getDate();
    let currMonth = date.getMonth();

    // Check if current date is within the first week of the current month
    if (currDate <= 7) {
        // First thursday of the current month
        const firstThursday = getFirstThursdayDate(currMonth);
        if (currDate <= firstThursday) {
            return firstThursday;
        }
    }
    return getFirstThursdayDate(currMonth === 11 ? currMonth = 0 : currMonth += 1);
};

// Given a month, finds the first thursday of that month
function getFirstThursdayDate(month) {
    const date = new Date();

    // Set date to first day of the given month
    date.setMonth(month);
    date.setDate(1);

    // Find the first thursday of the month
    while (date.getDay() !== 4) {
        date.setDate(date.getDate() + 1);
    }
    return date;
};

function getCurrentTime() {
    date = new Date();
    return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
};

function dhms(ms) {
    const days = Math.floor(ms / (24*60*60*1000));
    const daysms = ms % (24*60*60*1000);
    const hours = Math.floor(daysms / (60*60*1000));
    const hoursms = ms % (60*60*1000);
    const minutes = Math.floor(hoursms / (60*1000));
    const minutesms = ms % (60*1000);
    const sec = Math.floor(minutesms / 1000);
    return `${1+days}d | ${hours}h | ${minutes}m | ${sec}s`;
};