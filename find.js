const sobremesas = [{
    nome: 'pudim',
    diet: true,
  },
  {
    nome: 'gelatina',
    diet: false,
  },
  {
    nome: 'Bolo de chocolate',
    diet: true,
  },
  {
    nome: 'pavê',
    diet: false,
  },
];

const inDiet = sobremesas.find(item => {
  return item.diet
})

console.log(inDiet)