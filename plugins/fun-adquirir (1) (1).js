let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)
m.reply(`*Precios del bot* 


*Precios del bot* 


_*PRECIOS*_

• 1 BOT 2 EUROS
• 2 BOT 4 EUROS
• 3 BOT 5 EUROS
• 4 BOT 7 EUROS 
• 5 BOT 9 EUROS
• 6 BOT 10 EUROS

• BOT PERSONALIZADOS 20USD

*si te interesa aqui te dejo mi ko-fi en donar pones los precios que te dije osea la cantidad de bots que quieres https://ko-fi.com/iambuitre por ko-fi puedes pagar por targeta o Paypal✅luego de hacer el pago le envías comprobante a mi creador: http://Wa.me/523316968621 tambien puedes pagar por medio de Paypal: https://www.paypal.me/Buitre01*`, null, {
mentions: [a, b]
})}
handler.help = ['adquerir']
handler.tags = ['main', 'fun']
handler.command = ['adquerir','adquerir']
handler.group = true
export default handler
