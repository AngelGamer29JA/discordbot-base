module.exports = {
	name: 'ping', //Sirve para llamar al comando desde discord ej. !ping
	description: 'Comando de ejemplo',
	guildOnly: true, //Sirve para donde se puede usar el comando MD o solo en el server
	execute(guild, message, args) {
		message.channel.send('Pong!');
	}
};