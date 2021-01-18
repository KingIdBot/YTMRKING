let handler  = async (m, { conn, usedPrefix: _p }) => {
  try {
    let exp = global.DATABASE.data.users[m.sender].exp
    let limit = global.DATABASE.data.users[m.sender].limit
    let name = conn.getName(m.sender)
    let d = new Date
    let locale = 'id'
    let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
    let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
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
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
    let tags = {
      'main': 'Main',
      'about': 'About and Info',
      'xp': 'Exp & Limit',
      'sticker': 'Sticker',
      'kerang': 'Kerang Ajaib',
      'quotes': 'Quotes',
      'admin': 'Admin',
      'group': 'Group',
      'internet': 'Internet',
      'game': 'My Game',
      'downloader': 'Downloader',
      'tools': 'Tools',
      'jadibot': 'Jadi Bot',
      'owner': 'Owner',
      'host': 'Host',
      'advanced': 'Advanced',
      'info': 'Info',
      '': 'No Category',
    }
    for (let plugin of Object.values(global.plugins))
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!tag in  tags) tags[tag] = tag
    let help = Object.values(global.plugins).map(plugin => {
      return {
        help: plugin.help,
        tags: plugin.tags,
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit
      }
    })
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let menu of help)
        if (menu.tags && menu.tags.includes(tag))
          if (menu.help) groups[tag].push(menu)
    }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || `${conn.getName(conn.user.jid)} • Bot\n\nHai, %name!\n*Total:* %exp XP\n\n*Limit Anda: %limit*\n\n*Tanggal: %week, %date*\n *Waktu:%time*\nUptime: %uptime\n\n *Github:*\nhttps://github.com/Arya274/Arya-DN\n _Script Bye: @Nurotomo_\n`
    let header = conn.menu.header || '╭─「 %category 」'
    let body   = conn.menu.body   || '│➥ %cmd%islimit'
    let footer = conn.menu.footer || '╰────\n'
    let after  = conn.menu.after  || conn.user.jid == global.conn.user.jid ? '' : `\nPowered by https://wa.me/${global.conn.user.jid.split`@`[0]}`
    let _text  = before + '\n'
    for (let tag in groups) {
      _text += header.replace(/%category/g, tags[tag]) + '\n'
      for (let menu of groups[tag]) {
        for (let help of menu.help)
          _text += body.replace(/%cmd/g, menu.prefix ? help : '%p' + help).replace(/%islimit/g, menu.limit ? ' (Limit)' : '')  + '\n'
      }
      _text += footer + '\n'
    }
    _text += after
    text =  typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime,
      exp, limit, name, weton, week, date, time,
      readmore: readMore
    }
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
  ║╠➣ Request? Wa.me/+1(831)353-5216
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
handler.help = ['menu','help','?']
handler.tags = ['main']
handler.command = /^(menu|help|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
