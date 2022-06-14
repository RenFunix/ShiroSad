let handler = async (m, { conn, args, usedPrefix, command }) => {
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `*───────[ BIODATA OWNER ]───────*
*💌 ɴᴀᴍᴀ* : sʜᴇʟʙʏ ʙᴏᴛ
*✉️ ɴᴀᴍᴀ ᴀsʟɪ* : ᴀɴᴅɪ
*♂️ ɢᴇɴᴅᴇʀ* : ʟᴀᴋɪ - ʟᴀᴋɪ
*🕋 ᴀɢᴀᴍᴀ* : ɪsʟᴀᴍ
*⏰ ᴛᴀɴɢɢᴀʟ ʟᴀʜɪʀ* : 31 ᴊᴜʟɪ 2002
*🎨 ᴜᴍᴜʀ* : 19
*🧮 ᴋᴇʟᴀs* : ʟᴜʟᴜsᴀɴ ᴅᴄᴏᴅɪɴɢ
*🧩 ʜᴏʙʙʏ* : ɴɢᴏᴅɪɴɢ, ᴍᴀɪɴ ɢᴀᴍᴇ
*💬 sɪғᴀᴛ* : ᴅɪɴɢɪɴ sᴇᴘᴇʀᴛɪ sʟᴇʙᴇᴡ
*🗺️ ᴛɪɴɢɢᴀʟ* : sᴀᴍᴀʀɪɴᴅᴀ, ɪɴᴅᴏɴᴇsɪᴀ
*❤️ ᴋᴇsᴜᴋᴀᴀɴ* : ᴍᴀᴋᴇ ʙᴏᴛ ᴅɪsᴄᴏʀᴅ
*💔 ʙᴇɴᴄɪ* : ʙᴏᴄᴀʜ sᴀᴛɪʀ, ᴅᴀɴ ᴏʀᴀɴɢ ᴄɪɴᴀ

*───────[ SOSIAL MEDIA ]───────*
*📷 ɪɴsᴛᴀɢʀᴀᴍ* : @renfunix
*🇫 ғᴀᴄᴇʙᴏᴏᴋ* : Ndiie
*🏮 ᴄʜᴀɴɴᴇʟ ʏᴏᴜᴛᴜʙᴇ* : Ren Funix
*🐈 ɢɪᴛʜᴜʙ*: RenFunix

`
conn.sendHydrated(m.chat, teksbio, wm, ppown, "wa.me/" + nomorown, "💬 ᴄʜᴀᴛs", null,null, [["ᴅᴏɴᴀsɪ", '.donasi'], [null, null],[null,null]], m)
}
handler.help = ['bioowner']
handler.tags = ['info']
handler.command = /^(bioowner)$/i

export default handler
