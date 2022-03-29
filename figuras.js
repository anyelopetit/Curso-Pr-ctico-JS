// Cuadrado

console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log(`Los lados del cuadrado son: ${ladoCuadrado}cm`);

function perimetroCuadrado(lado){
    return lado* 4;
} 
//console.log(`El perímetro del cuadrado es: ${perimetroCuadrado}cm`);

function areaCuadrado(lado){
    return lado * lado;
}
//console.log(`El área del cuadrado e:s ${areaCuadrado}cm^2`);

console.groupEnd();

//Triángulo



console.group("Triángulos");

//console.log(`Los lados de los triángulos miden: ${ladoTriangulo1}cm, ${ladoTriangulo2}cm y la base ${baseTriangulo} cm`);

function perimetroTriangulo(ladoA, ladoB, base){
    const lado1 = parseInt(ladoA);
    const lado2 = parseInt(ladoB);
    const ladobase = parseInt(base);
    const perimetro = lado1 + lado2 + ladobase;
    return perimetro;
} 
//console.log(`El perímetro del triángulo es: ${perimetroTriangulo}cm`);
//console.log(`La altura del triángulo es: ${alturaTriangulo}`);

function areaTriangulo(base, altura){
    return (base * altura) / 2;
} 
//console.log(`El área del triángulo es: ${areaTriangulo}cm^2`);

console.groupEnd();

//Círculos

console.group("Círculos");


//console.log(`El radio del círculo es: ${radioCirculo}cm`);

function diametroCirculo(radio){
    return radio * 2;
}
//console.log(`El diametro del círculo es: ${diametroCirculo}cm`);

const PI = Math.PI;
//console.log(`PI es: ${PI}`);

function circunferenciaCirculo(diametro){
    return diametro * PI;
} 
//console.log(`La circunferencia del círculo es: ${circunferenciaCirculo}cm`);

function areaCirculo(radio){
    return (radio * radio) * PI;

} 
//console.log(`El área del Círculo es: ${areaCirculo}cm^2`);

console.groupEnd();

//Aquí la interacción con Html

//Fucniones de los Cuadrados

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}

// Funciones de los Triángulos

function calcularPerimetroTriangulo(){
    const inputLadoA = document.getElementById("inputTrianguloLadoA");
    const valueLadoA = inputLadoA.value;
    const inputLadoB = document.getElementById("inputTrianguloLadoB");
    const valueLadoB = inputLadoB.value;
    const inputBase = document.getElementById("inputTrianguloBase");
    const valueBase = inputBase.value;
    const perimetro = perimetroTriangulo(valueLadoA, valueLadoB, valueBase);
    alert(perimetro);
}

function alturaTriangulo(lado, base){
        const angulo = Math.acos(lado / 2 / base); //Obtiene el ángulo formado en radianes
        const altura = lado * Math.sin(angulo); //Devuelve la altura
        console.log(altura);
}

function calcularAreaTriangulo(){
    const altura = document.getElementById("inputTrianguloAltura");
    const valueAltura = altura.value;
    const inputBase = document.getElementById("inputTrianguloBase");
    const valueBase = inputBase.value;
    const area = areaTriangulo(valueBase, valueAltura);
    alert(area);

}

//Funciones de los Círculos

function calcularCircufenreciaCirculo(){
    const radio = document.getElementById("inputCirculoRadio");
    const radioValue =  radio.value;
    const diametro = diametroCirculo(radioValue);
    const circunferencia = circunferenciaCirculo(diametro);
    alert(circunferencia);
}

function calcularAreaCirculo(){
    const radio = document.getElementById("inputCirculoRadio");
    const radioValue =  radio.value;
    const area =  areaCirculo(radioValue);
    alert(area);

}