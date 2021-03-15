const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = '/'
 
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
    client.user.setPresence({ activity: { name: "member-counter.js" }, status: "online"})
    memberCounter(client);
});

client.on('guildMemberAdd', guildMember =>{
   let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'UnVerified');

    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('807784420126752768').send(`Welcome to Phenix H's official Discord server <@${guildMember.user.id}>! Make sure to check out the rules channel!`)
});
 
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } 
});
 
client.login("");
 