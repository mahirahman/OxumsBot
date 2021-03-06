const Discord = require('discord.js');
const fs = require('fs');
const dotenv = require('dotenv');

dotenv.config();

const client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});

// Check if bot is working
client.on('ready', () => {
    console.log('This bot is online!');
    client.user.setActivity('Oxums | !oxhelp', { type: 'PLAYING' })
});

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

// Collection of all commands set from ./commands folder
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on('messageCreate', (message) => {
    // Get the arguments of a command
    const args = message.content.slice(1).trim().split(' ');
    // Get the command name without prefix '!'
    const commandName = args.shift().toLowerCase();
    // Message does not start with '!' prefix
    // Messages from bot exits function
    // No such command exists
    if (!message.content.startsWith('!') || message.author.bot || !client.commands.has(commandName)) return;
    
    // Command object from collection
    const command = client.commands.get(commandName);
    // Execute command
    try {
        command.execute(message, args)
    } catch (error) {
        console.error(error);
        message.reply('There was an error with the command. Please MSG $TAREX#9952 on discord for assistance!');
    }
});

client.login(process.env.DISCORD_TOKEN);