// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigosIngresados = [];

function agregarAmigo(){
    const arrayListaAmigosIngresados = document.getElementById("listaAmigos");
    arrayListaAmigosIngresados.innerHTML = ""
    let amigoAgregado = document.getElementById("amigo").value
    if (amigoAgregado.length == 0) {
        alert("Por favor, inserte un nombre.")
        return
    }else{
        amigosIngresados.push(amigoAgregado)
        document.getElementById("amigo").value=""
        for (const amigo of amigosIngresados) {
            const etiqueta_Li = document.createElement("li")
            etiqueta_Li.textContent = amigo
            arrayListaAmigosIngresados.appendChild(etiqueta_Li)
        }
    }
    return console.log(amigosIngresados);
    
}

function sortearAmigo() {
    if (amigosIngresados < 1){
        alert("no hay usuarios en la base de datos!!")
        return
    }
    
    let sorteo = Math.floor(Math.random() * amigosIngresados.length);
    document.getElementById("seleccionado").innerHTML = `tu amigo secreto es: ${amigosIngresados[sorteo]}`
    
    return console.log("el num aleatoreo es: "+sorteo+ " el amigo elegido es: "+amigosIngresados[sorteo]);
}


