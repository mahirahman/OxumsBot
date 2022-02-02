module.exports = {
    name: 'setup',
    description: '!setup command is used for linking a Rust server to your discord. This command takes one argument which is the Rust server <battlemetrics-id>.\n\n\
    battlemetrics-id can be found at https://battlemetrics.com/servers/rust/<battlemetrics-id>',
    execute(message, args) {

        return message.channel.send('Placeholder');
    },
};