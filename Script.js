// CONTADOR

let contador = 0

const spanContador = document.getElementById("contador")
const btnAumentar = document.getElementById("aumentar")
const btnDiminuir = document.getElementById("diminuir")

btnAumentar.addEventListener("click", function(){

contador++
spanContador.textContent = contador

})

btnDiminuir.addEventListener("click", function(){

if(contador > 0){

contador--
spanContador.textContent = contador

}else{

alert("O contador já está em zero")

}

})
// CONTADOR DE CARACTERES

const campoTexto = document.getElementById("campoTexto")
const contadorCaracteres = document.getElementById("contadorCaracteres")

campoTexto.addEventListener("input", function(){

let texto = campoTexto.value

let semEspaco = texto.replace(/\s/g,'')

contadorCaracteres.textContent = semEspaco.length

})
// ADICIONAR TEXTO AO PRESSIONAR ENTER

const mensagens = document.getElementById("mensagens")

campoTexto.addEventListener("keypress", function(event){

if(event.key === "Enter"){

let p = document.createElement("p")

p.textContent = campoTexto.value

mensagens.appendChild(p)

campoTexto.value = ""

contadorCaracteres.textContent = 0

}

})
// CRIAR LISTA

const btnLista = document.getElementById("criarLista")
const tipoLista = document.getElementById("tipoLista")
const listas = document.getElementById("listas")

btnLista.addEventListener("click", function(){

let tipo = tipoLista.value

let lista = document.createElement(tipo)

let item = document.createElement("li")

item.textContent = "Novo item"

lista.appendChild(item)

listas.appendChild(lista)

})
// RESETAR

const resetar = document.getElementById("resetar")

resetar.addEventListener("click", function(){

contador = 0
spanContador.textContent = 0

campoTexto.value = ""

contadorCaracteres.textContent = 0

mensagens.innerHTML = ""

listas.innerHTML = ""

})
