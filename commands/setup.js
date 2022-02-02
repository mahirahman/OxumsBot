module.exports = {
    name: 'setup',
    description: '!setup command is used for linking a Rust server to your discord. This command takes one argument which is the Rust server <battlemetris-id>.\n\n\
    battlemetris-id can be found at https://battlemetrics.com/servers/rust/<battlemetris-id>',
    execute(message, args) {

        return message.channel.send('Placeholder');
    },
};