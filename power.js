const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client();

const prefix = 'BOT_PREFIX'
 
const fs = require('fs');

const memberCounter = require('./counters/member-counter');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
 
client.once('ready', () => {
    console.log('Server Welcome is online!');
    client.user.setPresence({ activity: { name: "GAME_STATUS" }, status: "YOUR_STATUS"})
    memberCounter(client);
});

client.on('guildMemberAdd', guildMember =>{
   let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'UNVERIFIED_ROLE');

    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('WELCOME_CHANNEL_ID').send(`YOUR_WELCOME_MESSAGE`)
});
 
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } 
});
 
client.login(process.env.DISCORD_TOKEN);
