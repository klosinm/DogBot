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
    
    if (message.content.startsWith(`${prefix}List`)) {
        message.channel.send("Things I can do!\n`!Dog:` Sends many fun dog pics\n`OwO:` Responds with good message\n`Whats this:` Responds with good message too");
    }
    //_________________________________________________________________________________________
    //Dog pics

    if (message.content.toLocaleLowerCase().startsWith(`${prefix}dog`)) //!kick
    {
        var random = (Math.floor(Math.random() * 30));


        if (message.content.includes("secret")){

            if (random > 30) {
                message.channel.send("Try, \"!Dog festive\"!");
            }
            else if (random > 20) {
                message.channel.send("Try, \"!Dog :3\"!");
            }
            else if (random > 10) {
                message.channel.send("Try, \"!Dog zzz\"!");
            }
            else if (random > 3) {
                message.channel.send("Try, \"!Dog royal\"!");
            }
            else {
                message.channel.send("Try, \"!Dog puwpy\"!");
            }
        }

        else if (random == 0 || message.content.toLocaleLowerCase().includes("puwpy")) {
            message.channel.send("Very Rare Dog!!! ", { files: ["./images/RareDog.jpg"] });
        }
        else if (random == 30 || message.content.toLocaleLowerCase().includes(":3")) {
            message.channel.send('Meow?', { files: ["./images/Meow.png"] });
        }
        else if (random == 25 || message.content.toLocaleLowerCase().includes("festive") ) {
            message.channel.send("Festive Dog!!! ", { files: ["./images/ChirstmasDog.jpg"] });
        }
        else if ((random > 0  && random <= 3 )|| message.content.includes("zzz")) {
            message.channel.send("He sleeps ", { files: ["./images/SleepyDog.jpg"] });
        }
        else if (random > 3 && random <= 10) {
            message.channel.send("Bork! ", { files: ["./images/BrokDog.png"] });
        }
        else if (random > 10 && random <= 15) {
            message.channel.send("Dog? ", { files: ["./images/Doggo.png"] });
        }
        else if (random > 15 && random <= 20) {
            message.channel.send("Smile dog! ", { files: ["./images/SmileDog.png"] });
        }
        else if (random > 20 && random < 23) {
            message.channel.send("Flowers! From dog ", { files: ["./images/FlowerDog.png"] });
        }
        else if ((random >= 23 && random < 26) || message.content.toLocaleLowerCase().includes("royal")){
            message.channel.send("How Pawpur! ", { files: ["./images/KingDog.png"] });
        }
    
        else {
            message.channel.send('Dog!', { files: ["./images/Dog!.png"] });
        }
    }



})


client.login(token);