// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigosIngresados = [];

function agregarAmigo(){
    let amigoAgregado = document.getElementById("amigo").value
    if (amigoAgregado.length == 0) {
        alert("Por favor, inserte un nombre.")
        return
    }else{
        amigosIngresados.push(amigoAgregado)
        document.getElementById("amigo").value=""
    }
    return console.log(amigosIngresados);
    
}