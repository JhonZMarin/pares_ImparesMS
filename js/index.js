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
    return 'En la Posicion ' + index+ ' el numero es:  '+ value + "\n";
});
console.log(transPares);


const transImpares = numerosImpares.map((value, index)=>{
    return 'La posicion ' + index+ ' es: '+ value;
});
console.log(transImpares);

function mostrarp(){
    const resultadoHTML = transPares.map((value)=> '<li>' +  value + '</i>')
    document.getElementById("resultadosver").innerHTML = resultadoHTML;
}
function mostrapr(){
    const resultadoHTML = transImpares.map((value)=> '<li>' +  value + '</i>')
    document.getElementById("resultadosver").innerHTML = resultadoHTML;
}


