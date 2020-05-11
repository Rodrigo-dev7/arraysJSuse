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

const ehAdulto = valor  => valor.age >= 18;
const someAdulto = ageFamily.every(ehAdulto);
console.log(someAdulto)