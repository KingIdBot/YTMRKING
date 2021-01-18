let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
❉──────────❉

*🔰 MR ᭄KINGツ 🔰*

❉──────────❉

📆 *${tampilTanggal}*
📌STATUS BOT AKTIF: *wa.me/+1831353-5216*
	
╔════════════════════
║ *ABOUT  MR ᭄KINGツ*         
╠════════════════════
║╭──❉ *DAFTAR* ❉──
║│➸ _*#menu*_
║│➸ _*#donate*_
║│➸ _*#info*_
║╰───────────
╠════════════════════
╚════════════════════
`.trim(), m)
}
handler.help = ['help']
handler.tags = ['about']
handler.command = /^(help)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
  