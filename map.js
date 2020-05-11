const celsius = [0, 23, 30, 41, 68, 14];
const toFahrneheit = value => ((value * 9) / 5) + 32;
const temperatureFahrneheit = celsius.map(toFahrneheit);

console.log(celsius)
console.log(temperatureFahrneheit)



const ce  = [25, 30]
const fa = ce.map((value) =>{
	return ((value * 9) / 5) + 32		
})
console.log(`Temperatura em celsius: ${fa}`)

