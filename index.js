const { Client, GatewayIntentBits, EmbedBuilder, PermissionsBitField, Permissions} = require(`discord.js`);
require("dotenv").config();

const prefix = '#';

const client = new Client({intents:[GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]});

client.on("ready", () => {
    console.log("Bot is online!")

    client.user.setActivity(`FaFiak il est beau`, {type: "WATCHING"});
})

client.on("messageCreate", (message) => {
    if(!message.content.startsWith(prefix)||message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    //message array

    const mesageArray = message.content.split(" ");
    const argument = message.content.slice(1);
    const cmd = mesageArray[0];

    //Commands
    if (command === 'hello'){
        message.channel.send("Hi");
    }
})

client.login(process.env.TOKEN);
