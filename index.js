//primary bot code will go here

//checking that discord.js is in files
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!')
})


//get a message from server
client.on('message', message => {
    //post message in terminal 
    console.log(message.content);
    /*
     message.reply('Hey, I\'m a reply!')
         .then(sent => console.log(`Sent a reply to ${sent.author.username}`))
         .catch(console.error);
     */

    if (message.content.startsWith(`${prefix}List`)) {
        message.channel.send("Things I can do!:\n");
        message.channel.send("!Dog: sends fun Dog pic\n");
        message.channel.send("OwO: Responds with good message\n");
        message.channel.send("Whats this: Responds with good message");
    }

    //_________________________________________________________________________________________
    //OWO bot

    if (message.content.startsWith(`${prefix}What\'s this?` && !message.author.bot)) //!kick
    {
        var random = (Math.floor(Math.random() * 10));
        
        if (random == 1) {
            message.channel.send("Who Knows?");
        }
        else if (random % 2 == 0) {
            message.channel.send("OWO?");
        }
        else {
            message.channel.send("Uwu");
        }
    }
    if (message.content.includes('owo') && !message.author.bot) {
        message.channel.send("what\'s this?");
    }
    if (message.content.includes("whats this") && !message.author.bot) {
        message.channel.send("OwO");
    }


    //_________________________________________________________________________________________
    //Dog pics

    if (message.content.startsWith(`${prefix}Dog` && !message.author.bot)) //!kick
    {
        var random = (Math.floor(Math.random() * 30));


        if (random == 0 || message.content.includes("puwpy")) {
            message.channel.send("Very Rare Dog!!! ", { files: ["./images/RareDog.jpg"] });
        }
        else if (random == 25 || message.content.includes("festive") ) {
            message.channel.send("Festive Dog!!! ", { files: ["./images/ChirstmasDog.jpg"] });
        }
        else if ((random > 0  && random <= 3 )|| message.content.includes("zzz")) {
            message.channel.send("He sleeps ", { files: ["./images/SleepyDog.jpg"] });
        }
        else if (random > 3 && random <= 10) {
            message.channel.send("Bork! ", { files: ["./images/BrokDog.png"] });
        }
        else if (random > 10 && random <= 15) {
            message.channel.send("Dog? ", { files: ["./images/Dog?.png"] });
        }
        else if (random > 15 && random <= 20) {
            message.channel.send("Smile dog! ", { files: ["./images/SmileDog.png"] });
        }
        else if (random > 20 && random < 23) {
            message.channel.send("Flowers! From dog ", { files: ["./images/FlowerDog.png"] });
        }
        else if (random == 30) {
            message.channel.send('Meow?', { files: ["./images/Meow.png"] });
        }
        else {
            message.channel.send('Dog!', { files: ["./images/Dog!.png"] });
        }
    }

   




})


client.login(token);