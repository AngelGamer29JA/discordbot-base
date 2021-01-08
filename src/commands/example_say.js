module.exports = {
	name: 'say',
	description: 'Enviar un mensaje con el mismo bot',
	guildOnly: true,
	execute(guild, message, args) {
		/*
			Se almacena el mensaje a enviar en una variable
			Y se elimina el mensaje del usuario con message.delete()
		*/
		let msg = args.join(" ");
		message.delete();

		//Se verifica si el mensaje no está vacío
		if(!msg) return message.channel.send({embed: {
			description: 'No puedes dejar el mensaje vacío',
			color: guild.configBot.color
		}});

		//Si el mensaje no esta vacío se envía
		message.channel.send(msg);
	}
};