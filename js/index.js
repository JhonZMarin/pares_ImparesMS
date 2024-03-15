let numeros =[];
for (let i=1;i<=200;i++){
    numeros.push(i);
}
console.log(numeros);

const lista = numeros;
//PARES
const par= lista.find((value)=>(value %2)===0);
console.log(par);

const numerosPares = lista.filter((value)=>(value%2)===0);
console.log(numerosPares);
//PARES

//IMPARES
const impar= lista.find((value)=>(value %2)!=0);
console.log(impar);

const numerosImpares = lista.filter((value)=>(value%2)!=0);
console.log(numerosImpares);
//IMPARES

const transPares = numerosPares.map((value, index)=>{
    return 'El numero par ' + index+ ' es: '+ value;
});
console.log(transPares);


const transImpares = numerosImpares.map((value, index)=>{
    return 'El numero impar ' + index+ ' es: '+ value;
});
console.log(transImpares);

document.getElementById('tituloh1').innerHTML = numerosPares;