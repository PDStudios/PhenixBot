module.exports = async (client) =>{
    const guild = client.guilds.cache.get('820163683538829333');
    setInterval(() =>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('820908562645123102');
        channel.setName(`Total Members: ${memberCount.toLocaleString()}`);
        console.log('Counting and changing...');
    }, 1000);
}