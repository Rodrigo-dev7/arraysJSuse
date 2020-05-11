// For in
// const hero = [
//   {name: 'Batman', age: 35 },
//   {name: 'Superman', age: 30 },
//   {name: 'Zatana', age: 23 },
//   {name: 'Mulher Maravilha', age: 30 }
// ]

// for (let person in hero) {
//   console.log(hero[person])
// }



const phone = [
  'Relogio',
  'Mapa',
  'App',
  'Finanças',
  'Calculadora',
]

for (i = 0; i < phone.length; i++) {
  console.log(`${i+1}, ${phone[i]}`)
  if (phone[i] == 'Finanças') 
    break
}