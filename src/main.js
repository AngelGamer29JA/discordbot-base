const { Client, RichEmbed, WebhookClient, Collection } = require('discord.js');
const path = require('path');
const fs = require('fs');
const config = require('./config.js');

const client = new Client();
const commandFiles = fs.readdirSync(path.join(__dirname, 'commands')).filter(file => file.endsWith('.js'));
client.commands = new Collection();

//Llamando los comandos desde ./commands
var cmdList = [];
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
	cmdList.push(command);
}

const cooldowns = new Collection();

client.on('ready', () => {
	console.log('Bot encendido');
});

client.on('message', (message) => {
	const member = message.member;
	const guild = message.guild; //Pasando la variable a los comandos
		  guild.configBot = config; //Pasar la config a los comandos

 	if (message.author.bot) return; //Verifica si es un bot en caso de serlo no lo envía
	if (message.content.indexOf(config.prefix) !== 0) return; //Si el mensaje contiene la prefix del bot

	const args = message.content.slice(config.prefix.length).trim().split(/ +/g); //Argumentos del comando
	const command = args.shift().toLowerCase();


	//Comandos
	if(!client.commands.has(command)) return;

	const Commando = client.commands.get(command);

	if (Commando.guildOnly && message.channel.type === 'dm') return; //No envía nada si se llama desde MD

	//Ejecutando el comando
	try {
		Commando.execute(guild, message, args);
	} catch(err){
		console.error(error);
		message.reply({embed: {
			description: 'El comando no se ha podido ejecutar :(',
			color: config.colorError
		}})
	}
});
client.login(config.token);