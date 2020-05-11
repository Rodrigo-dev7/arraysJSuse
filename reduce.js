const produtos = [
  {
    id: 'asdad3231',
    name: 'Arroz',
    price: 5
  },
  {
    id: 'GaadRRWR4',
    name: 'Peru',
    price: 15
  },
  {
    id: 'klklç78ffaf',
    name: 'Manteiga',
    price: 3
  },

]

const totalPrice = produtos.reduce((sum, produto) => {
  return sum + produto.price
}, 0)

console.log(totalPrice)

