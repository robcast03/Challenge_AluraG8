let inputamigo;
let amigos =[];

function agregarAmigo() {
    inputamigo = document.getElementById("amigo").value;
    if(inputamigo.length === 0){
        alert("Ingresa un nombre valido")
    }else{
        
        amigos.push(inputamigo);
        let listaAmigos = document.getElementById("listaAmigos");
        listaAmigos.innerHTML = amigos.join("<br>");
        console.log(amigos);
    }
}
function sortearAmigo(){
    if(amigos.length == 0){
        alert("Agrega a tus amigos, por favor")
    }else{
        numeroAmigos = Math.floor(Math.random()*amigos.length);
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = ("El amigo secreto seleccionado es: ")+amigos[numeroAmigos];
        amigos = [];
        listaAmigos.innerHTML = amigos;
        console.log(numeroAmigos)
    }
}