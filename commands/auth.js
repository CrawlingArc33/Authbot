const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {
	var gid = message.guild.id
	if (message.member.roles.find('name', 'Authorized')){
		let em = new Discord.RichEmbed()
		.setTitle(`${message.author.username}#${message.author.discriminator}`)
		.setDescription("Couldn't be authorized")
		.addField("Reason:", "The user is already authorized!")
		.setThumbnail(message.author.displayAvatarURL)
		.setColor(`#FF0000`)
		.setTimestamp()
		.setURL("https://github.com/CrawlingArc33/Authbot")
		.setFooter('Already authorized!');
		
		message.channel.send({embed: em});
		return
	}
	if (!message.guild.me.hasPermission("MANAGE_ROLES") || !message.guild.me.hasPermission("ADMINISTRATOR")) {message.channel.send('Unable to create role due to "No Permission" needs MANAGE_ROLES!'); return;}
	if (!message.guild.roles.find('name', "Authorized")){
		
		message.guild.createRole({
			name: 'Authorized',
			color: 'GREEN',
			position: 0
		}, "I didn't find this role so I made it!")
		.then (role => {
		if (message.guild.roles.find('name', 'Authorized').comparePositionTo(message.guild.me.highestRole) > 0) {
			let em = new Discord.RichEmbed()
			.setTitle(`${message.author.username}#${message.author.discriminator}`)
			.setDescription("Couldn't be authorized")
			.addField("Reason:", "The 'Authorized' role is higher than my role!")
			.setThumbnail(message.author.displayAvatarURL)
			.setColor(`#FF0000`)
			.setTimestamp()
			.setURL("https://github.com/CrawlingArc33/Authbot")
			.setFooter('ERROR');

			message.channel.send({embed: em});
			return;
			};
		message.member.addRole(message.guild.roles.find('name', 'Authorized'), "User has been authorized with AuthBot!")
		let em = new Discord.RichEmbed()
			.setTitle(`${message.author.username}#${message.author.discriminator}`)
			.setDescription("You are now Authorized")
			.setThumbnail(message.author.displayAvatarURL)
			.setColor(`#00FF00`)
			.setFooter(`Now authorized on ${message.guild.name}`)
			.setURL("https://github.com/CrawlingArc33/Authbot")
			.setTimestamp();
	
			message.channel.send({embed: em});
			return;
		});
	}
	if (!message.guild.roles.find('name', "Authorized")){
		console.log("Unabled to create role!")
		return;
	};
	if (message.guild.roles.find('name', 'Authorized').comparePositionTo(message.guild.me.highestRole) > 0) {
		let em = new Discord.RichEmbed()
		.setTitle(`${message.author.username}#${message.author.discriminator}`)
		.setDescription("Couldn't be authorized")
		.addField("Reason:", "The 'Authorized' role is higher than my role!")
		.setThumbnail(message.author.displayAvatarURL)
		.setColor(`#FF0000`)
		.setTimestamp()
		.setURL("https://github.com/CrawlingArc33/Authbot")
		.setFooter('ERROR');
		
		message.channel.send({embed: em});
		return;
		}
	message.member.addRole(message.guild.roles.find('name', 'Authorized'), "User has been authorized with AuthBot!")
	let em = new Discord.RichEmbed()
		.setTitle(`${message.author.username}#${message.author.discriminator}`)
   	 	.setDescription("You are now Authorized")
		.setThumbnail(message.author.displayAvatarURL)
    		.setColor(`#00FF00`)
		.setFooter(`Now authorized on ${message.guild.name}`)
		.setURL("https://github.com/CrawlingArc33/Authbot")
		.setTimestamp();
	
	message.channel.send({embed: em});
}

module.exports.help = {
	name: "auth"
}
