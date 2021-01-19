let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat Ooredoo [TIDAK TERSEDIA]
│ • Telkomsel: [TIDAK TERSEDIA]
│ • Smartfren: [TIDAK TERSEDIA]
│ 「 Chat OWNER 」
│ > Ingin donasi? Wa.me/+1(831)353-5216
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
