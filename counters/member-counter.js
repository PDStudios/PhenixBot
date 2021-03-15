module.exports = async (client) =>{
    const guild = client.guilds.cache.get('SERVER_ID');
    setInterval(() =>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('VOICE_CHANNEL_ID');
        channel.setName(`Total Members: ${memberCount.toLocaleString()}`);
        console.log('Counting and changing...');
    }, 1000);
}
