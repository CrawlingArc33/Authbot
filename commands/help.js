const Discord = require("discord.js");
var prefix = process.env.BOT_PREFIX


module.exports.run = (bot, message, args) => {

	let em = new Discord.RichEmbed()
	 .setColor(`#9B59B6`)
	 .setTitle("Authbot help")
	 .addField(`${prefix}auth`, `You have agreed to the terms and your account will be authorized.`)
	 .addField(`${prefix}info`, `Get your infomation about your account.`)
	 .addField(`${prefix}embed`, `Create some text that's embed!`)
	 .addField(`${prefix}invite`, `Get an invite to invite the bot to your server!`)
	 .setURL("https://github.com/CrawlingArc33/Authbot")
	 .addField(`${prefix}repeat`, `let's the bot repeat what you say!`);

	message.channel.send({embed: em});
}

module.exports.help = {
	name: "help"
}
