// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos=[];


function asignarElementos(elemento, texto){
let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML = texto;
return;
}

function agregarAmigo(){

    let amigoAgregado = document.getElementById('amigo').value;
    if (amigoAgregado == ""){
        alert("Por favor, inserte un nombre.")
    }
        amigos.push(amigoAgregado);
        let listaAmigosHtml = document.querySelector('#listaAmigos');
        listaAmigosHtml.innerHTML += `<li>${amigoAgregado}</li>`;
        limpiarCaja();
    
}

function sortearAmigo(){
    if (amigos.length == 0) {
        alert('No hay amigos para sortear');
    }
        let indice = Math.floor(Math.random() * amigos.length);
    
        let amigoSorteado = amigos[indice];
        
        asignarElementos('#resultado', `El amigo es: ${amigoSorteado}`);
    
}

function limpiarCaja(){
    document.querySelector('#amigo').value = '';
}



