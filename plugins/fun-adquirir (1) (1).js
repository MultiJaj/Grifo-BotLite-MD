let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)
m.reply(`*Precios del bot* 


_*PRECIOS*_

• 1 BOT 2USD
• 2 BOT 4USD
• 3 BOT 6USD
• 4 BOT 8USD
• 5 BOT 10USD

• BOT PERSONALIZADOS 20USD

*🛒|• +300 COMANDOS INFO AL PRIVADO DE :*
Envía un mensaje a @iambuitre por WhatsApp. https://wa.me/message/MBTBZMTEGVEHL1

METODO DE PAGO: 
PAYPAL Y TARJETA DE CRÉDITO O DEBITO`, null, {
mentions: [a, b]
})}
handler.help = ['adquerir']
handler.tags = ['main', 'fun']
handler.command = ['adquerir','adquirir']
handler.group = true
export default handler
