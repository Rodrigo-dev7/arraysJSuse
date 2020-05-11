# ALGUMAS FORMAS DE USAR ARRAYS NO JavaScript.

Veja algumas formas de se utilizar.

 - Map
``` 
const celsius = [0, 23, 30, 41, 68, 14];
const toFahrneheit = value => ((value * 9) / 5) + 32;
const temperatureFahrneheit = celsius.map(toFahrneheit);

console.log(celsius)
console.log(temperatureFahrneheit)
```

- Filter
```
const nums = [2, 4 , 76, 98, 121, 207, 404]
const par = nums.filter((value) => {
  return value % 2 == 0
})

console.log(par) 

```

- Find

```
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
```
