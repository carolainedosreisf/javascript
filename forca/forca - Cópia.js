fruta = ["maçã", "uva", "melão", "laranja", "kiwi", "melancia", "pessego"];
            moveis = ["cama", "mesa", "armario", "pia","cadeira","ropeiro", "estante"];
            sobremesa = ["gelatina", "pudim", "torta", "brigadeiro", "mousse", "sorvete", "frutas"];
            var i = Math.floor(3*Math.random());
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
            }
            var i = Math.floor(7*Math.random());
            document.getElementById("demo").innerHTML ="Dica: "+ text2 +"<br>";
            var palavra = text[i];
            var contandoLetras = palavra.length - 1;
            
            //for
            var anderline = "";
            var x ;
            for(x = 0; x <= parseInt(contandoLetras); x++){
                anderline = anderline  + `<span id="border${x}" style="border: 1px solid black; padding: 10px; visibility: visible;"><span id="span${x}"> ${palavra[parseInt(x)]} </span></span>`; ;
            }
            document.getElementById("anderline").innerHTML = anderline;
            
            //for
            var y ;
            for(y = 0; y <= parseInt(contandoLetras); y++){
                document.getElementById("span" + y).style.visibility = 'hidden';
            }

            //função

            function  meuclick(){
                
                var letra = document.getElementById("letra").value;
                var letrax = letra.length;
                var id = palavra.indexOf(letra);
                var id2 = palavra.lastIndexOf(letra);

                if(palavra.includes(letra) && letra != ""){
                    document.getElementById("span" + id).style.visibility =  'visible';
                    document.getElementById("span" + id2).style.visibility =  'visible';
                }else if (letrax > 1){
                    alert('Por favor, digite apenas uma letra.');
                }else if(letrax == 0){
                    alert('Por favor, digite uma letra');
                }else{
                    /*var srcforca= "";
                    var v ;
                    for(v = 10; v >=1; v--){
                    srcforca +=`img2/${v}.png`;
                    }*/
                    var contador = document.querySelector('#demo2');

                    var v = parseInt(contador.textContent) - 1;
                    contador.textContent = v;
                    
                    if(v > 0){
                        document.querySelector("#forcadesenho").src = `img2/${v}.png`;
                    }else{
                        alert('Voce perdeu!')
                    }
                }
                
            }
            //$('#myModal').modal('show');