console.log("Desafío 3");

let nombre = prompt("Ingrese su nombre")

while (nombre == "") {
    nombre = prompt("Por favor, ingrese su nombre correctamente")
}


let saludo = "Hola" + " " + nombre;

alert(saludo);

let entrada = prompt("¿Desea realizar un pedido?");


while (entrada == "si") {

    entrada = parseInt(prompt(`
  Nuestras cervezas: ingrese número

  1.Cream Stout
  2.Porter
  3.Honey 
  4.India Pale Ale`));

    switch (entrada) {
        case 1:
            alert("Cream Stout $210");
            break;
        case 2:
            alert("Porter $230");
            break;
        case 3:
            alert("Honey $230");
            break;
        case 4:
            alert("India Pale Ale $250");
            break;
    }
    break;
}

for (let i = 45; i <= 50; i++) {
    alert("Su n° de pedido es el" + " " + i);
}