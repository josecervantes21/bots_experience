const { Client, Intents, } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
client.on('ready',()=>{
    console.log(`Bot is ready as: ${client.user.tag}`);
});
var basededatos=[]
client.on("message", message=>{
    console.log(message);
    if (message.content ==='Hola'){
        message.reply(`Hola ${message.author},¿De que forma te gusta aprender?`)
        client.on("message", message=>{
            if (message.content ==='teoria'){
                message.reply('A que hora te estas disponible?')
                message.reply('6pm, 7pm, 8pm')
                client.on("message", message=>{
                    if (message.content ==='6pm'){
                        var seis=message.author
                        message.reply(`Si me entero de alguien con quien seas un buen learning match te lo haré saber.${seis}`)
                        basededatos.push(seis)
                        client.on("message", message=>{
                            if (message.content ==='hi'){
                                for (let i = 0; i < basededatos.length; i++) {
                                    if(i > 1){
                                        message.reply(`Hey mira lo que encontré, ${basededatos} disfruta aprender por medio de -retos-, lo cual empata muy bien contigo. Podrían juntarse a las -6:00 pm- a -hacer retos en code wars-.`)
                                    }
                                    else if(i < 1){
                                        message.reply(`${basededatos}`)
                                    }
                                }
                            }
                        })
                    }
                })
            }
        })
        
    }
    
})


client.login('OTQ1MTkzNTM1NDgzODMwMzMy.YhMmEw.OIke_btFNwUInGPlutJ7UDuNf9s');