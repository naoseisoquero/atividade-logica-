let primeiroNome = "pedro"
let ultimoNome = "henrique "
let nomeCompleto = primeiroNome + ultimoNome
console.log(nomeCompleto)
//operaçoes com numeros
let numero1 = 10
let numero2 = 20
let soma = numero1 + numero2
let subtracao= numero1 - numero2
let multiplicacao = numero1 * numero2
let divsao = numero1 / numero2
console.log(soma, multiplicacao, subtracao, divsao)
//trabalando com boleianos 
let estaChovendo = true
if(estaChovendo){
    console.log("esta chovendo hahahahha")
}else{
    console.log("nao esta chovendo")
}
//uso da null
let resposta = null
let nota
console.log(resposta, nota)
//utilizando symbol
const idUnico = Symbol();

const produto = {
    [idUnico]: 1234
};

console.log(produto[idUnico]);
//trabalhando com bigIt
let grandeinteiro = BigInt("3789747845754747474")
let numero = 1243443545665434455545445
let numeros = grandeinteiro

console.log(grandeinteiro)
console.log(numeros)
console.log(numero)