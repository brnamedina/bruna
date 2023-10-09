//Questão 4


function gerarSenha(frase) {
    var frase = prompt("Digite a senha") //tsi sistemas para internet
    var tamanho = frase.length;
    var novaSenha = "";
    var letra = "";
    

    for (let i=0; i < tamanho; i++){
        letra = frase.charAt(i);
        console.log(letra)
        if (i == 0){
            novaSenha = letra.toUpperCase();
        }
        else if(letra == " ") {
            novaSenha += "_"
        }

        novaSenha += letra
    }

    return novaSenha;
}

