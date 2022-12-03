

let listaDePessoas = [
    {

        /*=== 0 ===*/
        imagem: 'http://localhost:5500/Prática/ProjetosEmJSPuro/Freecodecamp-40-projetos/003/001.png',
        nome: 'Susan Smith',
        job: 'web developer',
        descricao: 'Est arcu ut mattis vehicula auctor amet convallis duis, nam nulla pellentesque sapien risus litora ut, sapien mattis morbi leo quam hac et. fames vestibulum ultricies amet .',

    },
    {
        /*=== 1 ===*/
        imagem: 'http://localhost:5500/Prática/ProjetosEmJSPuro/Freecodecamp-40-projetos/003/002.png',
        nome: 'Anthony Johnson',
        job: 'web designer',
        descricao: 'habitant tellus auctor fusce scelerisque arcu lorem, nisi augue curae porttitor quam diam, libero quisque mi volutpat non. cursus non eget nulla pellentesque aenean. ',
    },
    {
        /*=== 2 ===*/
        imagem: 'http://localhost:5500/Prática/ProjetosEmJSPuro/Freecodecamp-40-projetos/003/003.png',
        nome: 'Peter Jones',
        job: 'web designer',
        descricao: 'Maecenas lorem etiam lacus fames turpis tempor pellentesque faucibus molestie, magna aenean erat libero euismod. ',
    },
    {
        /*=== 3 ===*/
        imagem: 'http://localhost:5500/Prática/ProjetosEmJSPuro/Freecodecamp-40-projetos/003/004.png',
        nome: 'Emma Moore',
        job: 'web developer',
        descricao: 'Curae augue metus quis fusce netus sapien gravida eget, venenatis aliquet tempor accumsan sem quisque nec semper, praesent aliquet curabitur volutpat aliquam auctor arcu.',
    }
]

let imagem0 = document.getElementById('mudarImg')
let nome0 = document.querySelector('.nome')
let job0 = document.querySelector('.job')
let descricao0 = document.querySelector('.descricao')
let indice = 0

let setaEsquerda = document.getElementById('seta-left')
let setaDireita = document.getElementById('seta-right')

let botao = document.querySelector('.btn')
let numeroAnterior = 0

function mudarDescricao(x) {

    let testeImagem = listaDePessoas[x].imagem
    imagem0.src = testeImagem

    let testeNome = listaDePessoas[x].nome
    nome0.textContent = testeNome

    let testeJob = listaDePessoas[x].job
    job0.textContent = testeJob

    let testeDescricao = listaDePessoas[x].descricao
    descricao0.textContent = testeDescricao
}

/* clicou seta para esquerda 'diminui  o indice do array' */

setaEsquerda.addEventListener('click', function () {
    if (indice <= 0) {

        indice = 3
        mudarDescricao(indice)

    } else {
        indice = indice - 1
        mudarDescricao(indice)
    }
    console.log(indice)
})


/* clicou seta para direita 'aumenta  o indice do array' */

setaDireita.addEventListener('click', function () {
    if (indice >= 3) {

        indice = 0
        mudarDescricao(indice)

    } else {
        indice = indice + 1
        mudarDescricao(indice)
    }
    console.log(indice)
})


botao.addEventListener('click', function () {


    let numeroAleatorio = Math.floor(Math.random() * 4)
    console.log(numeroAleatorio);

    if (numeroAleatorio != numeroAnterior) {

        mudarDescricao(numeroAleatorio)
        numeroAnterior = numeroAleatorio
        
        console.log(numeroAnterior);

    }else{
        
    switch(numeroAleatorio){
        case 0: 
        numeroAleatorio = 1
        numeroAnterior = numeroAleatorio
        mudarDescricao(numeroAleatorio)

        console.log(numeroAnterior);
        break

        case 1: 
        numeroAleatorio = 2
        numeroAnterior = numeroAleatorio
        mudarDescricao(numeroAleatorio)

        console.log(numeroAnterior);
        break

        case 2: 
        numeroAleatorio = 3
        numeroAnterior = numeroAleatorio
        mudarDescricao(numeroAleatorio)

        console.log(numeroAnterior);
        break

        case 3: 
        numeroAleatorio = 0
        numeroAnterior = numeroAleatorio
        mudarDescricao(numeroAleatorio)

        console.log(numeroAnterior);
        break 
    }
    }
       

        
    })

/* =============================================================================== */


   
