    fruta = ["abacaxi", "uva", "kiwi", "laranja","banana", "melancia", "pessego"];
    moveis = ["cama", "mesa", "armario", "pia","cadeira","ropeiro", "estante"];
    sobremesa = ["gelatina", "pudim", "torta", "brigadeiro", "mousse", "sorvete", "frutas"];
    cores = ["amarelo", "vermelho", "laranjado", "azul", "branco", "preto", "marrom"];
    desenhos = ["rapunzel", "mickey", "alladin", "cinderela", "pinoquio", "pokemon", "peppa"];
    cidades = ["criciuma", "imarui", "garopaba", "florianopolis", "laguna", "imbituba", "blumenau"];
    lugares = ["cinema", "lanchonete", "pizzaria", "parque", "restautante", "praia", "teatro"];
    animais = ["cachorro", "hipopotamo", "jacare", "girafa", "passaro", "golfinho", "minhoca"];
    
    
    
    
    var i = Math.floor(8*Math.random());
    switch (i){
        case 0:
        text = fruta;
        text2 = "frutas";
        break;
        case 1:
        text = moveis;
        text2 = 'moveis'
        break;
        case 2:
        text = sobremesa;
        text2 = 'sobremesas'
        break
        case 3:
        text = cores;
        text2 = 'cores';
        break
        case 4:
        text = desenhos;
        text2 = 'desenhos';
        break
        case 5:
        text = cidades;
        text2 = 'cidades';
        break
        case 6:
        text = lugares;
        text2 = 'lugares';
        break
        case 7:
        text = animais;
        text2 = 'animais';
        break
    }
    var i = Math.floor(7*Math.random());
    document.getElementById("demo").innerHTML ="Dica: "+ text2 +"<br>";
    var palavra = text[i];
    var contandoLetras = palavra.length - 1;

    //for
    var anderline = "";
    var x ;
    for(x = 0; x <= parseInt(contandoLetras); x++){
        anderline = anderline  + `<span style="border: 1px solid black; visibility: visible;"><span id="span${x}"> ${palavra[parseInt(x)]} </span></span>`; 
    }
    document.getElementById("anderline").innerHTML = anderline;

    //for
    var y ;
    for(y = 0; y <= parseInt(contandoLetras); y++){
        document.getElementById("span" + y).style.visibility = 'hidden';
    }

    function pegaindexsletras(palavra, letra){
        var listaindexs = [];  
        var tamanhopalavra = palavra.length - 1;
        for (var i = 0; i <= tamanhopalavra; i++){
            if(palavra[i] == letra){
                listaindexs.push(i)
            }
        }
        return listaindexs;
    }
    //função
    function  meuclick(){
        var regra = /^[a-z]+$/;
        var letrai = document.getElementById("letra").value;
        var letra = letrai.toLowerCase();
        var letrax = letra.length;
        var listaindexs = pegaindexsletras(palavra, letra);
        if (letra.match(regra)){
            if(palavra.includes(letra) && letra != ""){
                document.querySelector("#error").innerHTML = '';
                for(var i = 0; i < listaindexs.length; i++){
                    document.getElementById("span" + listaindexs[i]).style.visibility =  'visible';
                    var venceu = "";
                    var visible = "";
                    var g;
                    for(g = 0; g <= parseInt(contandoLetras); g++){
                    venceu += document.getElementById("span" + g).style.visibility;
                    visible  += "visible";
                    }
                    if(venceu == visible){
                        $('#myModal').modal('show');
                        document.querySelector(".botao2").disabled = true;
                        document.querySelector("#sucess").innerHTML = 'Você venceu!';
                    }
                }
            }else if (letrax > 1){
                document.querySelector("#error").innerHTML ='Por favor, digite apenas uma letra.';
            }else if(letrax == 0){
                document.querySelector("#error").innerHTML = 'Por favor, digite uma letra!';
            }else if (!palavra.includes(letra)){
                document.querySelector("#error").innerHTML = '';
                var contador = document.querySelector('#demo2');
    
                var v = parseInt(contador.textContent) - 1;
                contador.textContent = v;
                
                if(v > 0){
                    document.querySelector("#forcadesenho").src = `img2/${v}.png`;
                    
                     if (v <= 1){
                        document.querySelector("#error").innerHTML = 'Voce perdeu!';
                        $('#myModal2').modal('show');
                        document.querySelector(".botao2").disabled = true;
                    }
                }
            }
        }else{
            document.querySelector("#error").innerHTML = 'Digite somente letras de a - z.';
        }
        
        
    }
    function novojogo(){
        location.reload();
    }
    
  
    
    