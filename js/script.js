

function getEscolhaUsuario() {
    const opcoes = document.getElementsByName("escolha");
    for (let opcao of opcoes) {
        if (opcao.checked) {
            return opcao.value;
        }
    }
    return null;
}

function jogar() {
    const escolhaUsuario = getEscolhaUsuario();

    if (!escolhaUsuario) {
        alert("Selecione cara ou coroa antes de jogar!");
        return;
    }

    let imagem = ["img/cara.webp", "img/coroa2.webp"];
    let resultado = Math.floor(Math.random() * 2); // 0 ou 1
    let resultadoImagem = imagem[resultado];
    let resultadoTexto = resultado == 0 ? "cara" : "coroa";

    document.getElementById("CARA").src = resultadoImagem;

    if (escolhaUsuario == resultadoTexto) {
        document.getElementById("mensagem").textContent = "Voce GANHOU, Parabens!";
    } else {
        document.getElementById("mensagem").textContent = "Perdeu OTARIO, KAKAKKAKKAAKA.";
    }
}

function reiniciar() {
    const opcoes = document.getElementsByName("escolha");
    for (let opcao of opcoes) {
        opcao.checked = false;
    }

    document.getElementById("mensagem").textContent = "Jogue a moeda!";
    document.getElementById("CARA").src = "";
}