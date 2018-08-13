const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'Marco') {
    	message.reply('Tervist, poisikesed! Olen siin selleks, et teil pauk lahti imeda. Ärge kartke, onu Marco tahab ainult head.');
  	}
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
