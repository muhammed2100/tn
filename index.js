const { Client, Collection } = require("discord.js");
const { config } = require("dotenv");
const {prefix} = require("./config.json")

const client = new Client({
    disableEveryone: true
})

// Collections
client.commands = new Collection();
client.aliases = new Collection();
client.queue = new Map();

// Run the command loader
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.on("ready", () => {
    console.log(`${client.user.username}, Yes Sir!`);

})

client.on("message", async message => {
   

    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;

    // If message.member is uncached, cache it.
    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if (cmd.length === 0) return;
    
    // Get the command
    let command = client.commands.get(cmd);
    // If none is found, try to find it by alias
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    // If a command is finally found, run the command
    if (command) 
        command.run(client, message, args);
});

var statut = ["Follow Ali Lion","Follow abo111anas","Follow dbo9h","Follow Luffy_63","Follow A_B_O_A_L_I"];

var second  = 10; 
client.on("ready", () =>{
    var time = Math.floor(second*1000);
    setInterval(function(){
        var ExZy = statut.length;
        var ez = Math.floor(Math.random() * ExZy);
        client.user.setActivity(statut[ez], {type: 'WATCHING'})
    }, time)
});

client.on('message', message => {
    var prefix = "/"
    if (message.content === prefix + "date") {
      if(!message.channel.guild) return message.reply('** Please type the commands in your server here is a bot server invite  : https://discord.com/api/oauth2/authorize?client_id=791788480723681290&permissions=8&scope=bot **');
        var currentTime = new Date(),
            السنة = currentTime.getFullYear(),
            الشهر = currentTime.getMonth() + 1,
            اليوم = currentTime.getDate();
        message.channel.send( "التاريخ : " + اليوم + "-" + الشهر + "-" +السنة)
    }
  
  });

 
  client.on('message', black=> { 
    if (black.content.startsWith(`<@!${client.user.id}>`)) { 
     black.reply(`My Prefix Is  **${prefix}**`);
    } 
    });
    
    client.on('message', black=> { 
    if (black.content.startsWith(`<@${client.user.id}>`)) { 
     black.reply(`My Prefix  Is **${prefix}**`);
    } 
    });

        
let count = 0;
setInterval(
  () =>
    require("node-fetch")(process.env.URL).then(() =>
      console.log(`[${++count}] here i pinged ${process.env.URL}`)
    ),
  300000
);


client.login(process.env.TOKEN);

