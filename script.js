var action = document.getElementById('criar') // instanciando a variável action (selecionando o botão)
action.addEventListener('click', carregar) // escutando o evento click do botão
var tabuada = document.getElementById('tabuada') // selecionando a div tabuada

// com for
function carregar() {
    var numero = window.document.getElementById('numero') // selecionando o número digitado no input
    tabuada.innerText = ''; // 

    for(let i = 1; i <= 10; i++) {
        tabuada.innerHTML += `${numero.value} * ${i} = ${numero.value * i} </br>` // escrevendo o resultado
    }
}


// //com do while
// function carregarDoWhile() {
//     var numero = window.document.getElementById('numero')
//     tabuada.innerText = '';

//     let i = 1
//     do {
//         tabuada.innerHTML += `${numero.value} * ${i} = ${numero.value * i} </br>`
//         i++
//     }while (i <= 10)
// }
