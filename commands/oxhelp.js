const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
    name: 'oxhelp',
    description: '!oxhelp command will reply with a list of all available commands.',
    execute(message, args) {

        // Default embed message properties
        let title = 'Commands List';
        let description = 'Prefix for all commands is **!**';
        let field = [
            { name: ':grey_question: Info', value: '``oxhelp``'}, 
            { name: ':wrench: Utility', value: '``cctv``, ``force``, ``map``, ``server``'}, 
            { name: ':gear: Settings', value: '``setup``, ``setupdates``'}
        ];

        // Array of all command files
        const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
        // Array of all command names
        const commandName = commandFiles.map( commandName => (commandName).replace('.js',''));

        // Commands that require administrator permissions
        const adminCommands = ['setup', 'setupdates'];

        // Commands that require arguments
        const argsCommands = {
            setup: '<battlemetrics-id>'
        };

        // Based on command name, the properties of the embed message will change.
        if (args.length) {
            if (commandName.includes(args[0])) {
                title = args[0];
                description = require(`./${args[0]}.js`).description;
                field = [
                    { name: 'Usage', value: `\`\`!${args[0]}` + (argsCommands[args[0]] != undefined ? ` ${argsCommands[args[0]]}\`\`` : `\`\``)}, 
                    { name: 'Permissions Required', value: (adminCommands.includes(args[0]) ? '``Administrator``' : '``None``')}
                ];
            }
            else {
                return message.reply('The command does not exist. Please use !oxhelp to see all available commands.');
            }
        }

        const embed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setAuthor({ name: title, iconURL: 'https://raw.githubusercontent.com/mahirahman/OxumsBot/main/icons/logo.png'})
        .setDescription(description)
        .setFooter({text: "To get more info on a command, type !oxhelp <command name>"})
        .addFields(field)
        return message.channel.send({embeds: [embed]});
    },
};