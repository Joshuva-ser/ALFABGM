const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://i.imgur.com/Halmrbv.jpeg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*ᴀʟᴩʜᴀ bot created by ᴊᴏꜱʜᴜᴠᴀ*
*Creator number : wa.me/918129900380?text=Hi%20Joshuva%20Monee.%20*

*Githublink :    https://github.com/Joshuva-ser/ALFABGM*

*Audio commads :   https://github.com/Joshuva-ser/ALFABGM/tree/master/uploads*

*Sticker commads : coming soon*

`}) 

}));
