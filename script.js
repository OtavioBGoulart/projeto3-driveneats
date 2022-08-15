let nomePrato = null;
let valorPrato = null;

let nomeBebida = null;
let valorBebida = null;

let nomeSobremesa = null;
let valorSobremesa = null;

let ValorTotal = null;

function selecaoprato(prato, nome, valor, icone) {

    const alimentoselecionado = document.querySelector(".selecionadoprato");
    const addicone = document.querySelector(icone)

    if (alimentoselecionado !== null) {
        const anterior = document.querySelector(".selecionadoprato ion-icon");
        alimentoselecionado.classList.remove("selecionadoprato");
        anterior.classList.add("escondido")
    }

    const adicionar = document.querySelector(prato);
    adicionar.classList.add("selecionadoprato");
    addicone.classList.remove("escondido");

    nomePrato = nome;
    valorPrato = valor;

    verificarbotao();
}


function selecaobeb(bebida, nome, valor, icone) {

    const alimentoselecionado = document.querySelector(".selecionadobeb");
    const addicone = document.querySelector(icone)

    if (alimentoselecionado !== null) {
        const anterior = document.querySelector(".selecionadobeb ion-icon");
        alimentoselecionado.classList.remove('selecionadobeb');
        anterior.classList.add("escondido");
    }

    const adicionar = document.querySelector(bebida);
    adicionar.classList.add('selecionadobeb');
    addicone.classList.remove("escondido");

    nomeBebida = nome;
    valorBebida = valor;

    verificarbotao();
}

function selecaosob(sobremesa, nome, valor, icone) {

    const alimentoselecionado = document.querySelector('.selecionadosob');
    const addicone = document.querySelector(icone);

    if (alimentoselecionado !== null) {
        const anterior = document.querySelector(".selecionadosob ion-icon");
        alimentoselecionado.classList.remove('selecionadosob');
        anterior.classList.add("escondido");
    }

    const adicionar = document.querySelector(sobremesa);
    adicionar.classList.add('selecionadosob');
    addicone.classList.remove("escondido");

    nomeSobremesa = nome;
    valorSobremesa = valor;

    verificarbotao();
}

/*const pratoselecionado = document.querySelector('.selecionadoprato');
const bebidaselecionada = document.querySelector('.selecionadobeb');
const sobremesaselecionada = document.querySelector('.selecionadosob');

if (pratoselecionado !== null) {
    if (bebidaselecionada !== null) {
        if (sobremesaselecionada !== null) {
            const botaopedido = document.querySelector('.texto');
            botaopedido.innerHTML = "Fechar pedido";
        }
    }
}*/

function verificarbotao() {
    if ((nomePrato != null) && (nomeBebida!= null) && (nomeSobremesa != null))  {
        const botaodesabilitado = document.querySelector(".habilitado");
        const botaohabilitado = document.querySelector(".desabilitado")
        botaohabilitado.classList.add("escondido");
        botaodesabilitado.classList.remove("escondido")
    }
}

function soma(a,b,c){
    let prato = parseFloat(a);
    let bebida = parseFloat(b);
    let sobremesa = parseFloat(c);
    let Total = (prato+bebida+sobremesa);

    return Total.toFixed(2);
}

function enviarpedido(){
    let nome = prompt("Qual o seu nome?");
    let endereco  = prompt("Bem vindo, "+ nome + ", Qual é seu endereço? ");

    const mensagem = "Olá, gostaria de fazer o pedido:\n" 
    +"- Prato: " + nomePrato 
    + "\n- Bebida: " + nomeBebida
    + "\n- Sobremesa: "+ nomeSobremesa 
    + "\nTotal:  R$ " + soma(valorPrato, valorBebida, valorSobremesa).toString().replace('.',',')
    + "\n\n Nome: " + nome 
    + " \n Endereço: " + endereco;

    let url = 'https://wa.me/5534991620880?text='+encodeURIComponent(mensagem);

    window.open(url);
}