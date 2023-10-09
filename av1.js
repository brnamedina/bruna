//Questão 4


function gerarSenha(frase) {
    var frase = prompt("Digite a senha") //tsi sistemas para internet
    var tamanho = frase.length;
    var novaSenha = "";
    var letra = "";
    

    for (let i=0; i < tamanho; i++){
        letra = frase.charAt(i);
        if (i == 0){
            novaSenha = letra.toUpperCase();
        }else if (letra == " "){
                novaSenha += "_"
        }else if (letra == "a"){
            novaSenha += "@"
        }else if (letra == "e"){
            novaSenha += "3"
        }else if (letra == "i"){
            novaSenha += "1"
        }else if (letra == "o"){
            novaSenha += "0"
        }else if (letra == "u"){
            novaSenha += "4"
        }else{
            novaSenha += letra
        }
        
    }

    alert(novaSenha)
    return novaSenha;
}

