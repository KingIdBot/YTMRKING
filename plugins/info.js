let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╠═〘 INFO BOT 〙 ═
╠➥ Dibuat dengan bahasa javascript via NodeJs
╠➥ Rec: Tanpa Nama
╠➥ Script: @MR ᭄KINGツ
║
╠➥ Github: https://github.com/KingIdBot/MrKing
╠➥ Instagram: [TidakTersedia]
╠➥ YouTube: MR ᭄KINGツ
║
╠═〘 Thanks To 〙 ═
╠➥ MR ᭄KINGツ
║
╠═〘 DONASI 〙 ═
╠➥ SmartFren: [TidakTersedia]
╠➥ Tsel: [TidakTersedia]
╠➥ Indosat: [TidakTersedia]
║
║>Request? Wa.me/+1(831)353-5216
║
╠═〘 Mℛ ᭄B O O Tツ〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['about']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

