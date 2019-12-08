    var n = [ parseInt(Math.floor(Math.random() * 60) + 1), parseInt(Math.floor(Math.random() * 60) + 1) , parseInt(Math.floor(Math.random() * 60) + 1) , parseInt(Math.floor(Math.random() * 60) + 1) , parseInt(Math.floor(Math.random() * 60) + 1) , parseInt(Math.floor(Math.random() * 60) + 1) ];       
    var n2 = [...new Set(n)];
    if (n2.length == 5){
        n2.push(parseInt(Math.floor(Math.random() * 60) + 1)) ;
    }else if(n2.length == 4){
        n2.push(parseInt(Math.floor(Math.random() * 60) + 1)) ;
        n2.push(parseInt(Math.floor(Math.random() * 60) + 1)) ;
    }else if(n2.length == 3){
        n2.push(parseInt(Math.floor(Math.random() * 60) + 1)) ;
        n2.push(parseInt(Math.floor(Math.random() * 60) + 1)) ;
        n2.push(parseInt(Math.floor(Math.random() * 60) + 1)) ; 
    }     
    n2.sort(function(a,b){
        return a - b;
    });

    //document.querySelector("#demo").innerHTML = n2 ;
    var numerosEscolhidos = [];
    var numeros = [];
    var numerosFinal = [];

    function meuclick(){

        var numero = parseInt(document.querySelector("#numero").value);
        
        var contador = document.querySelector('#chances');
        var v = parseInt(contador.textContent) - 1;

        var pError = document.querySelector("#error"); 
        var pSeuNumero = document.querySelector("#seuNumero");
         
        
        function contMais(){
            v++;
            contador.textContent = v;
        }
        function errorVazio(){
            pError.innerHTML = ""; 
        }
        function inputReset(){
            document.querySelector("#numero").value = "";
        }
        contador.textContent = v;
        if(numero > 60  && numero < 100   || numero <= 0) {
            //erro
            pError.innerHTML = "Apenas números de 1 á 60 são validos.";
            contMais();
            inputReset();
            
        }else if(("" + numero).length <= 2){
            if(v >= 0 ){
                if(n2.includes(numero)){
                    numeros.push(numero);
                    numerosFinal = [...new Set(numeros)];
                    errorVazio();
                    if( v !== 0){
                        inputReset()
                        
                    }  
                }else{
                    numerosEscolhidos.push(numero);
                    errorVazio();
                    if( v !== 0){
                        inputReset()   
                    }
                }
            }else if (v == -1) {
                numerosFinal.sort(function(a,b){
                    return a - b;
                });
                inputReset();
                document.querySelector("#seuNumero2").innerHTML = "Seus números: " + numerosEscolhidos + ',' + numeros;
                document.querySelector("#sorteado").innerHTML = 'Números sorteados:  ' + n2;
                document.querySelector("#numeroChances").innerHTML ="";
                document.querySelector("#botao").disabled = true;
                pError.innerHTML = "";
                if (numerosFinal.length == 0){
                    pSeuNumero.innerHTML = "Que pena você não acertou nenhum numero!"
                      
                }else if (numerosFinal.length == 1){
                    pSeuNumero.innerHTML = ' Número que você acertou: '  + numerosFinal;
                    
                }  else if (numerosFinal.length > 1){
                    pSeuNumero.innerHTML = ' Números que você acertou: '  + numerosFinal;  
                    
                }      
            }
        }else if(document.querySelector("#numero").value == "" ) {
            //erro
                        
                pError.innerHTML = "Por favor digite um numero de 1 á 60. ";
                contMais();
                inputReset();

        }else{
            //erro
            pError.innerHTML = "Numeros com mais de dois digitos não são válidos.";    
            contMais();
            inputReset();

        }    

        if(parseInt(contador.textContent) == 0){
            document.querySelector("#botao").innerHTML = 'Ver o resultado';
        }
        
            
    }