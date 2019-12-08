function mostraPainelPrincipal() {
    setTimeout(function(){ 
        document.querySelector('.tudo').style.opacity = "1";
    
    }, 3100);
}
mostraPainelPrincipal();
var n1 = Math.floor(Math.random() * (100 - 10)) + 10;
var n2 = Math.floor(Math.random() * (100 - 10)) + 10;
var n3 = Math.floor(Math.random() * (100 - 10)) + 10;
var n4 = Math.floor(Math.random() * (10 - 1) + 1); 

document.getElementById("n1").innerHTML = n1 ;
document.getElementById("n2").innerHTML = n2;
document.getElementById("n3").innerHTML = n3;
document.getElementById("n4").innerHTML = n4 ;

var resultadoAdicaoSubtracao  = 0;
var ganhou = false;
var acertou = 'Você acertou!';
var errou = 'Você errou. Tente novamente!';
var preencha = 'Por favor preencha o campo!';
var contorno2 = document.querySelector(".contorno2");
var contorno3 = document.querySelector(".contorno3");
var msg = document.querySelector("#msgAdicaoSubtracao");
var msg2 = document.querySelector("#msgDivisaoMultiplicacao");
var resultado2 =  document.querySelector("#resultado2");
var transicao = 'opacity 2s ease-out';



function escondePainelPrincipal(){
    document.querySelector(".contorno").style.display = 'none';
}

function divisao(){
    contorno3.style.transition = transicao; 
    contorno3.style.opacity = '1'; 
    resultado2.style.display = 'inline';
    contorno2.style.display = 'none';


    escondePainelPrincipal();
    document.querySelector("#sinal2").innerHTML = "÷";

}

function multiplicacao(){
    contorno3.style.transition = transicao; 
    contorno3.style.opacity = '1'; 
    contorno2.style.display = 'none';

    escondePainelPrincipal();

    document.querySelector("#sinal2").innerHTML = "x";
    document.querySelector("#resultado3").style.display = 'inline';
    resultado2.style.display = 'none';
}


function adicao(){
    contorno2.style.transition = transicao; 
    contorno2.style.opacity = '1';
    escondePainelPrincipal();
    resultadoAdicaoSubtracao  += n1 + n2;
    adicaoSubtracao();   
}

function subtracao(){
    contorno2.style.transition = transicao; 
    contorno2.style.opacity = '1';    
    escondePainelPrincipal();
    document.querySelector("#sinal").innerHTML = "-";
    if (n1 < n2){
        resultadoAdicaoSubtracao  += n2 - n1;
        document.getElementById("n1").innerHTML = n2 ;
        document.getElementById("n2").innerHTML = n1;
    } else if(n1 == n2 || n1 > n2){
        resultadoAdicaoSubtracao  += n1 - n2;
    }
    adicaoSubtracao();
}


function adicaoSubtracao(){
    var caracterResultado = ("" + resultadoAdicaoSubtracao ).length;
    if (caracterResultado === 3){
        document.querySelector(".linha").style.width = "85px";
        document.querySelector("#n1").style.marginLeft = "25px";
        document.querySelector("#n2").style.marginLeft = "25px";
    }else if(caracterResultado === 1){
        document.querySelector("#inputs").style.marginLeft = "20px"
    }
    var criaInput =  "";
    for(var  x = 1; x <= caracterResultado; x++){
        criaInput+= `<input  id="input${x}" maxlength="1" size="1" onkeyup="enterAdicaoSubtracao(event)">`;       
    }
    document.querySelector("#inputs").innerHTML = criaInput;
}

function enterMultiplicacao(event){  
    var inputDivisao = parseInt(document.querySelector("#resultado3").value);
    var resultadoMultiplicacao = n3 * n4;
    if(event.keyCode === 13 && ganhou == false){     
        if(inputDivisao == resultadoMultiplicacao){
            msg2.innerHTML = acertou;
            ganhou = true;     
        }else if (document.querySelector("#resultado3").value == ""){
            msg2.innerHTML = preencha;
        }else {
            msg2.innerHTML = errou;
        }    
    }  
}

function enterDivisao(event){
    var inputDivisao = parseInt(resultado2.value);
    var z = n3 % n4;
    var resultadoDivisao = (n3 - z) /n4
    if(event.keyCode === 13 && ganhou == false){     
        if(inputDivisao == resultadoDivisao){
            msg2.innerHTML = acertou;
            ganhou = true;     
        }else if (resultado2.value == ""){
            msg2.innerHTML = preencha;
        }else{
            msg2.innerHTML = errou;
        }    
    }  
}
function enterAdicaoSubtracao(event){
    var caracterResultado = ("" + resultadoAdicaoSubtracao ).length;
    var pegaInputsAdicaoSubtracao  = document.querySelectorAll("input");
    var inputsAdicaoSubtracao  = "";
    var regra = /^[0-9]+$/;
    for(var y = 0; y  <= caracterResultado - 1; y++){
        inputsAdicaoSubtracao  += parseInt(pegaInputsAdicaoSubtracao[y].value);
    }
    if(event.keyCode === 13 && ganhou == false){
        if (inputsAdicaoSubtracao.match(regra)) {
            if(inputsAdicaoSubtracao  == resultadoAdicaoSubtracao ){
                msg.innerHTML = acertou;
                ganhou = true;    
            }else{
                msg.innerHTML = errou;
    
            }
        }else{
            msg.innerHTML = "Digite somente números.";
        }    
    }   
}

function novojogo(){
    location.reload();
}


        