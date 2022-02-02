const Discord = require('discord.js');
const cctv = require('./cctv.js');
const force = require('./force.js');
const map = require('./map.js');
const server = require('./server.js');
const setup = require('./setup.js');
const setupdates = require('./setupdates.js');

module.exports = {
    name: 'oxhelp',
    description: '!oxhelp command will reply with a list of all available commands.',
    execute(message, args) {

        // Default embed message properties
        let title = 'Commands List';
        let description = '';
        let field = [{ name: ':grey_question: Info', value: '``!oxhelp``'}, { name: ':wrench: Utility', value: '``!cctv``, ``!force``, ``!map``, ``!server``'}, { name: ':gear: Settings', value: '``!setup``, ``!setupdates``'}];

        // Based on command name, the properties of the embed message will change.
        if (args.length) {
            switch (args[0]) {
                case 'oxhelp':
                    title = 'oxhelp';
                    description = this.description;
                    field = [{ name: 'Usage', value: '``!oxhelp``'}, { name: 'Permission Required', value: '``None``'}];
                    break;
                case 'cctv':
                    title = 'cctv';
                    description = cctv.description;
                    field = [{ name: 'Usage', value: '``!cctv``'}, { name: 'Permission Required', value: '``None``'}];
                    break;
                case 'force':
                    title = 'force';
                    description = force.description;
                    field = [{ name: 'Usage', value: '``!force``'}, { name: 'Permission Required', value: '``None``'}];
                    break;
                case 'map':
                    title = 'map';
                    description = map.description;
                    field = [{ name: 'Usage', value: '``!map``'}, { name: 'Permission Required', value: '``None``'}];
                    break;
                case 'server':
                    title = 'server';
                    description = server.description;
                    field = [{ name: 'Usage', value: '``!server``'}, { name: 'Permission Required', value: '``None``'}];
                    break;
                case 'setup':
                    title = 'setup';
                    description = setup.description;
                    field = [{ name: 'Usage', value: '``!setup <battlemetris-id>``'}, { name: 'Permission Required', value: '``Administrator``'}];
                    break;
                case 'setupdates':
                    title = 'setupdates';
                    description = setupdates.description;
                    field = [{ name: 'Usage', value: '``!setupdates``'}, { name: 'Permission Required', value: '``Administrator``'}];
                    break;
                default:
                    return message.reply(`The command ${args[0]} does not exist. Please use !oxhelp to see all available commands.`);
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