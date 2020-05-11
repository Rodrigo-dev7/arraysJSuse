const ageFamily = [
  {
    name: 'Patricia',
    age: 20
  },
  {
    name: 'Bob',
    age: 12
  },
  {
    name: 'Paulo',
    age: 25
  },
]

const ehAdulto = valor => valor.age >= 18;
const temAdulto = ageFamily.some(ehAdulto)
console.log(temAdulto)