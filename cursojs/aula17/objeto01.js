//pode ser na mesma linha let amigo = {nome: 'José', sexo: 'M', peso: 85.4, engordar(p){}}, mas como tem uma função será melhor separar para visualizar melhor
let amigo = {nome: 'José',
sexo: 'M',
peso: 85.4,
engordar(p=0){
    console.log('Engordou')
    this.peso += p
}}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)