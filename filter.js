const nums = [2, 4 , 76, 98, 121, 207, 404]
const par = nums.filter((value) => {
  return value % 2 == 0
})

console.log(par)  

const jogador = [
  ['Ronaldo', 'Realmadrid', '700'],
  ['Ronaldinho Gaúcho', ' Barcelona', '1000'],
  ['Pelé ', ' Santos ', '100']
]

const moreGols = jogador.filter((value) => {
  if (value[2] == '1000') return value
})

console.log(`O jagador com mais gols: ${moreGols}`)
