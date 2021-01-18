let handler  = async (m, { conn, usedPrefix: _p }) => {
  let preview = {}
  try {
    if (!conn.menu) preview = await conn.generateLinkPreview('https://github.com/Arya274/Arya-Bot')
  } catch (e) {
    try {
      if (!conn.menu) preview = await global.conn.generateLinkPreview('https://github.com/Nurutomo/wabot-aq')
    } catch (e) {}
  } finally {
    let exp = global.DATABASE.data.users[m.sender].exp
    let name = conn.getName(m.sender)
    let d = new Date
    let locale = 'id-Id'
    let weton = ['Pon','Wage','Kliwon','Legi','Pahing'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })

    let text =  conn.menu ? conn.menu
      .replace(/%p/g, _p)
      .replace(/%exp/g, exp)
      .replace(/%name/g, name)
      .replace(/%weton/g, weton)
      .replace(/%week/g, week)
      .replace(/%date/g, date)
      .replace(/%time/g, time): `
let handler  = async (m, { conn, usedPrefix: _p }) => {
  let preview = {}
  try {
    if (!conn.menu) preview = await conn.generateLinkPreview('https://github.com/Arya274/Arya-Bot')
  } catch (e) {
    try {
      if (!conn.menu) preview = await global.conn.generateLinkPreview('https://github.com/Nurutomo/wabot-aq')
    } catch (e) {}
  } finally {
    let exp = global.DATABASE.data.users[m.sender].exp
    let name = conn.getName(m.sender)
    let d = new Date
    let locale = 'id-Id'
    let weton = ['Pon','Wage','Kliwon','Legi','Pahing'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })

    let text =  conn.menu ? conn.menu
      .replace(/%p/g, _p)
      .replace(/%exp/g, exp)
      .replace(/%name/g, name)
      .replace(/%weton/g, weton)
      .replace(/%week/g, week)
      .replace(/%date/g, date)
      .replace(/%time/g, time): `
*Hai, %name!*\n*Total:* %exp XP*\n\n*Limit Anda: %limit*\n\n*Tanggal: %week, %date*\n*Waktu:%time*\n*Uptime: %uptime*\n\n

*Script Bye: MR ᭄KINGツ* 

  ╭─────────────────
  ║╭─────────────────
  ║╠➣  *Mℛ ᭄KINGツ
  ║╰───────────────── 
  ║╭───〘 *INFO*  〙─────
  ║╠-❥ *Mℛ ᭄KINGツ* *Versi 9.9*
  ║╠-❥ *Owner : TANPA NAMA*
  ║╠-❥ *Link* : wa.me/+1(831)353-5216
  ║╠--❥ *Prefix : 「#」*
  ║╠-❥ *Total Pengguna : 9999*   
  ║╰────────────────
  ║╭────「 Main 」────
  ║╠➣ ${_p}menu
  ║╠➣  ${_p}help
  ║╠➣ ${_p}?
  ║╰───────────────
  ║
  ║╭───「 Exp & Limit 」───
  ║╠➣ ${_p}buy<jumlah limit>
  ║╠➣ ${_p}buy <jumlah limit>
  ║╠➣ ${_p}buyall
  ║╠➣ ${_p}daily
  ║╠➣ ${_p}claim
  ║╠➣ ${_p}leaderboard [jumlah user]
  ║╰───────────────
  ║
  ║╭───「 Sticker 」────
  ║╠➣ ${_p}stiker (caption|reply media)
  ║╠➣ ${_p}stiker <url>
  ║╠➣ ${_p}toimg (reply)
  ║╠➣ ${_p}ttp <teks>
  ║╰───────────────
  ║
  ║╭──「 Kerang Ajaib 」──
  ║╠➣ apakah <teks>?
  ║╠➣ kapan<text>?
  ║╠➣ kapankah<text>?
  ║╰───────────────
  ║
  ║╭───「 Quotes 」────
  ║╠➣ ${_p}bucin
  ║╰───────────────
  ║
  ║╭────「 Admin 」────
  ║╠➣ ${_p}add nomor,nomor (Limit)
  ║╠➣ ${_p}+ nomor,nomor (Limit)
  ║╠➣ ${_p}demote @user
  ║╠➣ ${_p}member @user
  ║╠➣ ${_p}↓ @user
  ║╠➣ ${_p}kick @user (Limit)
  ║╠➣ ${_p}- @user (Limit)
  ║╠➣ ${_p}promote @user
  ║╠➣ ${_p}admin @user
  ║╠➣ ${_p}^ @user
  ║╠➣ ${_p}↑ @user
  ║╰───────────────
  ║
  ║╭────「 Group 」────
  ║╠➣ ${_p}linkgroup
  ║╠➣ ${_p}here
  ║╠➣ ${_p}listonline
  ║╠➣ ${_p}pengumuman [teks] (Limit)
  ║╠➣ ${_p}announce [teks] (Limit)
  ║╠➣ ${_p}hidetag [teks] (Limit)
  ║╰───────────────
  ║╭────「 Internet 」───
  ║╠➣ ${_p}google <pencarian>
  ║╠➣ ${_p}googlef <pencarian>
  ║╠➣ ${_p}ss <url>
  ║╠➣ ${_p}ssf <url>
  ║╰───────────────
  ║
  ║╭───「 Downloader 」──
  ║╠➣ ${_p}ytmp3 <url> (Limit)
  ║╠➣ ${_p}yta <url> (Limit)
  ║╠➣ ${_p}ytmp4 <url> (Limit)
  ║╠➣ ${_p}ytv <url> (Limit)
  ║╠➣ ${_p}yt <url> (Limit)
  ║╰───────────────
  ║
  ║╭────「 Tools 」────
  ║╠➣ ${_p}nulis <teks>
  ║╠➣ ${_p}profile
  ║╠➣ ${_p}readmore <teks>|<teks>
  ║╠➣ ${_p}spoiler <teks>|<teks>
  ║╠➣ ${_p}style <text>
  ║╠➣ ${_p}tts <lang> <teks>
  ║╰───────────────
  ║
  ║╭──「 Jadi Bot 」────
  ║╠➣ ${_p}getcode
  ║╠➣ ${_p}jadibot (Limit)
  ║╠➣ ${_p}berhenti
  ║╠➣ ${_p}stop
  ║ ╰───────────────
  ║
  ║╭────「 Owner 」────
  ║╠➣ ${_p}banchat
  ║╠➣ ${_p}broadcast <teks>
  ║╠➣ ${_p}bc <teks>
  ║╠➣ ${_p}broadcastgroup <teks>
  ║╠➣ ${_p}bcgc <teks>
  ║╠➣ ${_p}deletechat
  ║╠➣ ${_p}deletechat group
  ║╠➣ ${_p}mutechat
  ║╠➣ ${_p}mutechat group
  ║╠➣ ${_p}oadd @user
  ║╠➣ ${_p}o+ @user
  ║╠➣ ${_p}odemote @user
  ║╠➣ ${_p}omember @user
  ║╠➣ ${_p}ov @user
  ║╠➣ ${_p}okick @user
  ║╠➣ ${_p}o- @user
  ║╠➣ ${_p}opengumuman [teks]
  ║╠➣ ${_p}ohidetag [teks]
  ║╠➣ ${_p}opromote @user
  ║╠➣ ${_p}oadmin @user
  ║╠➣ ${_p}o^ @user
  ║╠➣ ${_p}setmenu <teks>
  ║╠➣ ${_p}setmenubefore <teks>
  ║╠➣ ${_p}setmenuheader <teks>
  ║╠➣ ${_p}setmenubody <teks>
  ║╠➣ ${_p}setmenufooter <teks>
  ║╠➣ ${_p}setmenuafter <teks>
  ║╠➣ ${_p}unbanchat
  ║╰───────────────
  ║
  ║╭────「 Host 」─────
  ║╠➣ ${_p}broadcastjadibot <teks>
  ║╠➣ ${_p}bcbot <teks>
  ║╠➣ ${_p}debounce
  ║╠➣ ${_p}update
  ║╰───────────────
  ║
  ║╭──「 Advanced 」───
  ║╠➣ > 
  ║╠➣ => 
  ║╰───────────────
  ║
  ║╭────「 Info 」────
  ║╠➣ ${_p}donasi
  ║╠➣ ${_p}groups
  ║╠➣ ${_p}grouplist
  ║╰───────────────
  ║
  ║╭──「 No Category 」──
  ║╠➣ ${_p} <>
  ║╰───────────────
  ║
  ║╭─────CONTATO─────
  ║╠➣ Name : *Mℛ ᭄KINGツ*
  ║╠➣Coded using *Nano* on Android \\w
  ║║Termux
  ║╠➣ Request? Wa.me/+1 (831) 353-5216
  ║║  Cara Tambah XP:
  ║╠➣ +1 Exp/pesan biasa
  ║║  +10 Exp/command
  ║╠════
  ║║Advanced:
  ║║> return m
  ║╰─────────────────
  ║
  ┗━┅┅┄┄⟞⟦ *Mℛ ᭄KINGツ* ⟧⟝┄┄┉┉━┛
`.trim()
    conn.reply(m.chat, {...preview, text}, m)
  }
}
handler.command = /^(menu\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)