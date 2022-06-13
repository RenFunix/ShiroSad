let handler = async (m, { conn, args, usedPrefix, command }) => {
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `*───────[ BIODATA OWNER ]───────*
*💌 Nama* : Shiro Bot
*✉️ Nama Asli* : Andi
*♂️ Gender* : Laki - laki
*🕋 Agama* : Islam
*⏰ Tanggal lahir* : 31 Juli 2002
*🎨 Umur* : 19
*🧮 Kelas* : Lulusan dcoding
*🧩 Hobby* : ngoding, main game
*💬 Sifat* : Dingin seperti slebew
*🗺️ Tinggal* : Samarinda, Indonesia
*❤️ Kesukaan* : make discord bot
*💔 Benci* : bocah satir

*───────[ SOSIAL MEDIA ]───────*
*📷 instagran* : @renfunix
*🇫  Facebook* : Ndiie
*🏮 Chanel Youtube* : Ren Funix
*🐈 Github:* RenFunix

`
conn.sendHydrated(m.chat, teksbio, wm, ppown, "wa.me/" + nomorown, "💬 ᴄʜᴀᴛs", null,null, [["ᴅᴏɴᴀsɪ", '.donasi'], [null, null],[null,null]], m)
}
handler.help = ['bioowner']
handler.tags = ['info']
handler.command = /^(bioowner)$/i

export default handler