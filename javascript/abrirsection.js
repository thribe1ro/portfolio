
// Girar e por sombra nos icones pequenos
var sombra1 = document.querySelector(".miniGithub")

function passarMouseImg1(tipo) {
    if (tipo == 1) {
        sombra1.style.boxShadow = "1px 1px 10px 1px"
        sombra1.style.rotate = "-360deg"
    } if (tipo == 2) {
        sombra1.style.boxShadow = "none"
        sombra1.style.rotate = "0deg"
    } if (tipo == 3) {
        open("https://github.com/thribe1ro")
     }
}

var sombra2 = document.querySelector(".miniLinkedin")

function passarMouseImg2(tipo) {
    if (tipo == 1) {
        sombra2.style.boxShadow = "1px 1px 10px 1px"
        sombra2.style.rotate = "-360deg"
    } if (tipo == 2) {
        sombra2.style.boxShadow = "none"
        sombra2.style.rotate = "0deg"
    } if (tipo == 3) {
       open("https://www.linkedin.com/in/thribe1ro/")
    }
}



// PROJETOS //

// Projeto 1
const projeto1 = document.getElementById("terceiroMiniQuadrado")
var projetoUm = document.getElementById("projetoUm")
var xProjetoUm = document.querySelector(".xProjetoUm")
var ativarUm = false
const projeto3 = document.getElementById("quintoMiniQuadrado")

// Quadrado 1
function passarMouseImg3(tipo) {
    if (tipo == 1) {
        projeto1.style.rotate = "-20deg"
        projeto2.style.margin = "1rem 0 0 3rem"
    } if (tipo == 2) {
        projeto1.style.rotate = "0deg"
        projeto2.style.margin = "1rem 0 0 1rem"
    }
}

    projeto1.addEventListener("click", function(){
    ativarUm = !ativarUm
    projetoUm.style.display = ativarUm ? "flex" : "none"
})
    xProjetoUm.addEventListener("click", function() {
    projetoUm.style.display = ativarUm ? "none" : "flex"
})

// Quadrado 2
const projeto2 = document.getElementById("quartoMiniQuadrado")
var projetoDois = document.getElementById("projetoDois")
var xProjetoDois = document.querySelector(".xProjetoDois")
var ativarDois = false

function passarMouseImg4(tipo) {
    if (tipo == 1) {
        projeto2.style.rotate = "-20deg"
        projeto1.style.margin = "1rem 2rem 0 0"
    } if (tipo == 2) {
        projeto2.style.rotate = "0deg"
        projeto1.style.margin = "1rem 0 0 1rem"
    }
}

projeto2.addEventListener("click", function(){
    ativarDois = !ativarUm
    projetoDois.style.display = ativarDois ? "flex" : "none"
})
    xProjetoDois.addEventListener("click", function() {
    projetoDois.style.display = ativarDois ? "none" : "flex"
})

/* Quadrado 3
function passarMouseImg5(tipo) {
    if (tipo == 1) {
    projeto3.style.rotate = "-25deg"
    projeto2.style.margin = "1rem 2rem 0 0"
    projeto1.style.margin = "1rem 2rem 0 0"
    } if (tipo == 2) {
    projeto3.style.rotate = "0deg"
    projeto2.style.margin = "1rem 0 0 1rem"
    projeto1.style.margin = "1rem 0 0 1rem"
    } if (tipo == 3) {
        alert("Ola")
    }
} */
    
// =================================================================================================== //

// Abrir quadrado de minhas habilidades //

// Quadrado 1
var arrow1 = document.getElementById("arrow1")
var quadradoSkill1 = document.querySelector(".primeiraSkill")
var marginQuadrado1 = document.querySelector("#primeiraSkill")
var textoSkill1 = document.getElementById("textoSkill")

var rotacaoUm = false;

arrow1.addEventListener("click", function() {
    rotacaoUm = !rotacaoUm;
    arrow1.style.transform = rotacaoUm ? "rotate(90deg)" : "rotate(0deg)"
    quadradoSkill1.style.height = rotacaoUm ? "200px" : "100px"
    marginQuadrado1.style.margin = rotacaoUm ? "0 0 1rem 0" : "0 0 0 0"
    textoSkill1.style.opacity = rotacaoUm ? "1" : "0"
    textoSkill1.style.margin = rotacaoUm ? "0 0 0 0" : "-5rem 0 0 0"
})

// Quadrado 2
var arrow2 = document.getElementById("arrow2")
var quadradoSkill2 = document.querySelector(".segundaSkill")
var marginQuadrado2 = document.querySelector("#segundaSkill")
var textoSkill2 = document.querySelector(".textoSkill2")

var rotacaoDois = false

arrow2.addEventListener("click", function() {
    rotacaoDois = !rotacaoDois;
    arrow2.style.transform = rotacaoDois ? "rotate(90deg)" : "rotate(0deg)"
    quadradoSkill2.style.height = rotacaoDois ? "200px" : "100px"
    marginQuadrado2.style.margin = rotacaoDois ? "0 0 1rem 0" : "0 0 0 0"
    textoSkill2.style.opacity = rotacaoDois ? "1" : "0"
    textoSkill2.style.margin = rotacaoDois ? "0 0 0 0" : "-5rem 0 0 0"
})

// ========================================================= //

// Idioma do navegador

const linguagemUsuario = navigator.language|| navigator.languages[0];
const apresentacao = document.getElementById("secundario")
const nextHabilidades = document.querySelector(".nextSkillsText")
const myHabilidades = document.querySelector(".mySkillsText")
const projetos = document.querySelector(".meusProjetos")

    if (linguagemUsuario.startsWith("en")) { // Verifica se o idioma é inglês
        apresentacao.textContent = "Currently graduating Analysis and Development of Systems and specializing in front-end."
        nextHabilidades.textContent = "Next Skills."
        myHabilidades.textContent = "My Skills."
        projetos.textContent = "My Projects."
    } else if (linguagemUsuario.startsWith("pt")) { // Verifica se o idioma é português
        apresentacao.textContent = "Atualmente graduando em Análise e Desenvolvimento de Sistemas e se especializando em front-end."
        nextHabilidades.textContent = "Próximas Habilidades."
        myHabilidades.textContent = "Minhas Habilidades."
        projetos.textContent = "Meus Projetos."
    }

    // Saudação //
function carregar() {
    var mudarMensagem = document.querySelector(".primario")
    var data = new Date
    var hora = data.getHours()
    if (hora >= 0 && hora < 12) {
        if (linguagemUsuario.startsWith("en")) {
            mudarMensagem.innerHTML = "Good morning, i am Thiago Ribeiro."
        } else {
            mudarMensagem.innerHTML = "Bom dia, eu sou o Thiago Ribeiro."
        }
    } else if (hora >= 12 && hora <= 18) {
        if (linguagemUsuario.startsWith("en")) {
            mudarMensagem.innerHTML = "Good afternoon, i am Thiago Ribeiro."
        } else {
            mudarMensagem.innerHTML = "Boa tarde, eu sou o Thiago Ribeiro."
        }
    } else {
        if (linguagemUsuario.startsWith("en")) {
            mudarMensagem.innerHTML = "Goodnight, i am Thiago Ribeiro."
        } else {
            mudarMensagem.innerHTML = "Boa noite, eu sou o Thiago Ribeiro."
        }
    }
    }

    // Abrir curriculo
    var imgcurriculo = document.getElementById("imagemDois")
    var x = document.getElementById("x")
    var curriculo = document.getElementById("curriculo")
    var abrirCurriculo = false

    imgcurriculo.addEventListener("click", function() {
        abrirCurriculo = !abrirCurriculo
        curriculo.style.display = abrirCurriculo ? "flex" : "none"
    })
    x.addEventListener("click", function() {
        abrirCurriculo = !abrirCurriculo
        curriculo.style.display = abrirCurriculo ? "flex" : "none"
    })


    // Botão de iniciar o programa
    var botaoIniciar = document.getElementById("botaoIniciar")
    var limparTela = document.querySelector(".quadrado")
    var comecar = document.getElementById("comecar")
    var contagemTexto = document.getElementById("contagem")

    botaoIniciar.addEventListener("click", () => {
        let contagem = 5
        const intervaloId = setInterval(() => {
            contagem--;
            contagemTexto.textContent = `Começando em ${contagem} segundos.`
            if (contagem === 0) {
                clearInterval(intervaloId);
                mensagem.textContent = "Ação realizada!";
            }
        }, 1000);

        setTimeout(() => {
            limparTela.style.display = "flex"
            comecar.style.display = "none"
        }, 5000);
    })