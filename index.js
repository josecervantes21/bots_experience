const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('ready',()=>{
    console.log(`Bot is ready as: ${client.user.tag}`);
});
client.on("message", message=>{
    console.log(message);
    if (message.content ==='Hola'){
        message.reply(`Hola ${message.author},¿Como te sentiste en tú curso?`)
        message.reply('1. Aprendi mucho')
        message.reply('2. Aprendí lo suficiente')
        message.reply('3. Aprendi')
        message.reply('4. No aprendi mucho')
        message.reply('5. Necesito aprender más')
    }
    if (message.content==='1'){
        message.reply('Bien, ¿Te gusta aprender por retos?')
    }
    else if (message.content==='2'){
        message.reply('Bien, ¿Te gusta aprender por retos?')
    }
    else if (message.content==='3'){
        message.reply('Bien, ¿Te gusta aprender por retos?')
    }
    else if (message.content==='4'){
        message.reply('Bien, ¿Te gusta aprender por teoria?')
    }
    else if (message.content==='5'){
        message.reply('Bien, ¿Te gusta aprender por teoria?')
    }
})
client.on("message", message=>{
    console.log(message);
    if(message.content ==='si'){
        message.reply('grupo 3')
    }
    else if(message.content ==='no'){
        message.reply('grupo 4')
    }
})
client.login('OTQ1MTkzNTM1NDgzODMwMzMy.YhMmEw.CODkHQkB95jzgO6M3i2vVhgHlyQ');

var grupo1='Los que aprenden por retos y no entendieron'
var grupo2='Los que aprenden por teoria y si entendieron'
var grupo3='Los que aprenden por retos y entendieron'
var grupo4='Los que aprenden por teoria y no entendieron'