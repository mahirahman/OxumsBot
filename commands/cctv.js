const Discord = require('discord.js');

module.exports = {
    name: 'cctv',
    description: '!cctv command will reply with a list of all the camera codes in the game.',
    execute(message) {

        // All Monument CCTV codes
        const smallOil = ['OILRIG1L1', 'OILRIG1L2', 'OILRIG1L3', 'OILRIG1L4', 'OILRIG1DOCK', 'OILRIG1HELI'];
        const largeOil = ['OILRIG2L3A', 'OILRIG2L3B', 'OILRIG2L4', 'OILRIG2L5', 'OILRIG2L6A', 'OILRIG2L6B', 'OILRIG2L6C', 'OILRIG2L6D', 'OILRIG2DOCK', 'OILRIG2HELI', 'OILRIG2L1', 'OILRIG2L2', 'OILRIG2EXHAUST'];
        const airfield = ['AIRFIELDHELIPAD'];
        const dome = ['DOMETOP', 'DOME1'];
        const bandit = ['TOWNWEAPONS', 'CASINO'];
        const outpost = ['COMPOUNDCRUDE', 'COMPOUNDCHILL', 'COMPOUNDSTREET', 'COMPOUNDMUSIC'];

        const embed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setThumbnail('./icons/cctv.png')
        .setTitle('Monument CCTV Codes')
        .setFooter({text: "Note: All CCTV Codes are Case Sensitive"})
        .addFields(
            { name: 'Small Oil Rig', value: '> XXX'},
            { name: 'Large Oil Rig', value: '> XXX'},
            { name: 'Airfield', value: '> XXX'},
            { name: 'Dome', value: '> XXX'},
            { name: 'Bandit Camp', value: '> XXX'},
            { name: 'Outpost', value: '> XXX'}
        )
        
        return message.channel.send({embeds: [embed]});
    },
};

// Check all CCTV CODES ARE LEGIT
// ADD THUMBNAIL

// Small Oil Rig
// OILRIG1EXHAUST ???

// Airfield
// AIRFIELDGARAGE ???