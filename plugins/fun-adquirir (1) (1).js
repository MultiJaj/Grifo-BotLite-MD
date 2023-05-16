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
• 3 BOT 5USD
• 4 BOT 7USD
• 5 BOT 8USD

• BOT PERSONALIZADOS 20USD

*si te interesa aqui te dejo mi ko-fi en donar pones los precios que te dije osea la cantidad de bots que quieres https://ko-fi.com/iambuitre por ko-fi puedes pagar por targeta o Paypal✅luego de hacer el pago le envías comprobante a mi creador: http://Wa.me/34604135921 tambien puedes pagar por medio de Paypal: https://www.paypal.me/maicolmurillo152*`, null, {
mentions: [a, b]
})}
handler.help = ['adquerir']
handler.tags = ['main', 'fun']
handler.command = ['adquerir','adquerir']
handler.group = true
export default handler
