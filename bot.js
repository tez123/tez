const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("622852796684959776")
setInterval(function() {
channel.send(`ميرو يحب سكنر`);
}, 30)
})

client.login(process.env.BOT_TOKEN);