const produtos = [
  {
    id: 'asdad3231',
    name: 'SmartTV',
    price: 900,
    promocao: 500,
  },
  {
    id: 'GaadRRWR4',
    name: 'Laptop',
    price: 1500,
    promocao: 1200,
  },
  {
    id: 'klklç78ffaf',
    name: 'PS4',
    price: 3000,
    promocao: 2000,
  },

] 

const totalPrice = produtos.reduce((sum, produto) => {
  sum.price += produto.price
  sum.promocao += produto.promocao
  return sum
}, {price:0,promocao:0})

console.log(totalPrice)
