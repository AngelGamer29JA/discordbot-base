module.exports = {
	name: 'avatar',
	description: 'Mostrar el avatar tuyo o de un usuario',
	guildOnly: true,
	command(guild, message, args) {
    	let user = message.mentions.members.first(); //Mencion del usuario en el mensaje
    	if(!user){ //Ningún usuario mencionado
	    	message.channel.send({embed: {
	    		title: `Avatar de **${message.author.username}**`,
	    		color: guild.configBot.color,
	    		description: `[Avatar Link](${message.author.avatarURL()})`,
	    		image: {
	    			url: message.author.avatarURL()
	    		}
	    	}});
	    } else { //Usuario mencionado
	    	message.channel.send({embed: {
	    		title: `Avatar de **${user.username}**`,
	    		color: guild.configBot.color,
	    		description: `[Avatar Link](${user.user.avatarURL()})`,
	    		image: {
	    			url: user.user.avatarURL()
	    		},
	    		footer: {
	    			text: `Pedido por ${message.author.username}`
	    		}
	    	}});
	    }
	}
}