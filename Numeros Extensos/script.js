var rg = document.getElementById('rg'); //pega o elemento de range
var exibir = document.getElementById('exibir');
var extenso = document.getElementById('extenso');

function passe(){

    var vetUnidade = ['','Um', 'Dois', 'Três',' Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove'];
    var vetDezena = ['','Dez','Vinte', 'Trinta', 'Quarenta', 'Cinquenta', 'Sesenta', 'Setenta', 'Oitenta', 'Noventa'];
    var vetCentena = ['','Cento','Duzentos','Trezentos','Quatrocentos','Quinhentos','Seicentos', 'Setecentos','Oitocentos','Novecentos'];
    var vetDezFormato = ['Dez', 'Onze', 'Doze', 'Treze', 'Quatorze', 'Quinze', 'Dezesseis', 'Dezesete', 'Dezoito', 'Dezenove'];
    var cp1,cp2,cp3

    exibir.textContent = rg.value; //retorna valor

    cp1 = rg.value.substr(0,1) //separando os numeros individualmente
    cp2 = rg.value.substr(1,1) //separando os numeros individualmente
    cp3 = rg.value.substr(2,1) //separando os numeros individualmente
    cp4 = rg.value.substr(0,2)
    if( rg.value.toString().length == 1){

        for(i = 0; i < rg.value; i++){
            extenso.innerText =
                vetUnidade[cp1]        
        }
    }// se o tamanho de rg for 1

    if( rg.value.toString().length == 2 && rg.value >=10 && rg.value <=19 ){
        for(i = 0; i < rg.value; i++){
                extenso.innerText =
                    vetDezFormato[cp2]
        
        }
    }// se o tamanho de rg for 2

    if( rg.value.toString().length == 2 && rg.value >=20 && rg.value <=99 ){
        for(i = 0; i < rg.value; i++){
                extenso.innerText =
                cp2 == 0 ? vetDezena[cp1] + vetUnidade[cp2] 
                         : vetDezena[cp1] + ' e ' + vetUnidade[cp2] 
        
        }
    }// se o tamanho de rg for 2

    if( rg.value.toString().length == 3){
        for(i = 0; i < rg.value; i++){
           formatar(vetCentena,vetDezena,vetUnidade,cp1,cp2,cp3);
        }
    }// se o tamanho de rg for 3
    return extenso 
}

function formatar(vetCentena,vetDezena,vetUnidade,cp1,cp2,cp3){
    if(cp1 == 1 && cp2 == 0 && cp3 == 0){
        extenso.innerText = 'Cem'
    }
    if(cp1 > 1 && cp2 == 0 && cp3 == 0){
        extenso.innerText = vetCentena[cp1]
    }
    else if(cp1 > 0 && cp2 > 0 && cp3 == 0){
        extenso.innerText = 
                vetCentena[cp1] + ' e ' + vetDezena[cp2]
    }
    else if(cp1 > 0 && cp2 == 0 && cp3 > 0){
        extenso.innerText =
        vetCentena[cp1] + ' e ' + vetUnidade[cp3]

    }
    else{
        extenso.innerHTML = 
            vetCentena[cp1] + ' e ' 
            + vetDezena[cp2] + ' e '
             + vetUnidade[cp3]
    }  
    return extenso
}




