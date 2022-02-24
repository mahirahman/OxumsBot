const { Permissions } = require('discord.js');

module.exports = {
    name: 'setup',
    description: '!setup command is used for linking a Rust server to your discord. This command takes one argument which is the Rust server <battlemetrics-id>.\n\n\
    battlemetrics-id can be found at https://battlemetrics.com/servers/rust/<battlemetrics-id>',
    execute(message, args) {

        // Check if there is multiple or no arguments
        if (args.length != 1) {
            return message.reply('This command takes only one argument. Please use !setup <battlemetrics-id>');
        }

        // Check if user has admin permission to use this command
        if (!message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) {
            return message.reply('You do not have permission to use this command.');
        }

        serverID = message.guild.id;
        battlemetricsID = args[0];

        /*
        IF !isValidBattlemetricsID(battlemetricsID)
            return message.reply('Invalid battlemetrics-id. Please use the battlemetrics-id at https://battlemetrics.com/servers/rust/<battlemetrics-id>');

        IF serverID not in DB
                add serverID and battlemetricsID to DB
                return reply "Successfully linked Rust server to your discord"          
        ElSE
            find serverID in DB and check if db battlemetricsID is same as argument
            if it is then
                return reply "battlemetrics-id already linked to this server"
            else
                update DB with new battlemetricsID
                return reply "Successfully linked Rust server to your discord"

        {
            serverID: '931859618710290462'
            battlemetricsID: '2950091'
        }
        */

        return message.channel.send('Placeholder');
    },
};

// Validates ID range, valid server and is a rust server.
isValidBattlemetricsID = (battlemetricsID) => {
    // Check valid ID range
    if (battlemetricsID > 0 && battlemetricsID <= 2**31-1) {
        // Check using API if battlemetrics-id is a server
        
        // data = getAPIrequest(battlemetricsID, api_key)
        // IF data["errors"][0]["status"] != "404"
        //     IF data["relationships"]["game"]["data"]["id"] === 'rust'
        //    return true
    }
    return false;
};