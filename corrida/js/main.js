

function addnome1(){
    comp1= document.getElementById("comp1");
    nome = prompt("qual seu nome?");
    if(nome.length!=0)comp1.innerHTML=nome;
    // if(nome.length!=0)$(this).innerHTML=nome;
  //$(this).innerHTML=nome;
}
function addtempo1(){
     temp1 = document.getElementById("temp1");
     t = prompt("informe seu tempo sem segundos!");
     if(t.length!=0)temp1.innerHTML=t;
}

   function addnome2(){
    comp1= document.getElementById("comp2");
    nome = prompt("qual seu nome?");
    if(nome.length!=0)comp1.innerHTML=nome;
}
function addtempo2(){
     temp1 = document.getElementById("temp2");
     t = prompt("informe seu tempo sem segundos!");
     if(t.length!=0)temp1.innerHTML=t;
}

   function addnome3(){
    comp1= document.getElementById("comp3");
    nome = prompt("qual seu nome?");
    if(nome.length!=0)comp1.innerHTML=nome;
}
function addtempo3(){
     temp1 = document.getElementById("temp3");
     t = prompt("informe seu tempo sem segundos!");
     if(t.length!=0)temp1.innerHTML=t;
}

   function addnome4(){
    comp1= document.getElementById("comp4");
    nome = prompt("qual seu nome?");
    if(nome.length!=0)comp1.innerHTML=nome;
}
function addtempo4(){
     temp1 = document.getElementById("temp4");
     t = prompt("informe seu tempo sem segundos!");
     if(t.length!=0)temp1.innerHTML=t;
}

   function addnome5(){
    comp1= document.getElementById("comp5");
    nome = prompt("qual seu nome?");
    if(nome.length!=0)comp1.innerHTML=nome;
}
function addtempo5(){
     temp1 = document.getElementById("temp5");
     t = prompt("informe seu tempo sem segundos!");
     if(t.length!=0)temp1.innerHTML=t;
}

   function addnome6(){
    comp1= document.getElementById("comp6");
    nome = prompt("qual seu nome?");
    if(nome.length!=0)comp1.innerHTML=nome;
}
function addtempo6(){
     temp1 = document.getElementById("temp6");
     t = prompt("informe seu tempo sem segundos!");
     if(t.length!=0)temp1.innerHTML=t;
}
//    selecionar os campos para resultado
function resultado(){
     // pego os valores de todos os campos e adiciono no vetor
     var aux = new Array();
     //seleciono o ID TBL1 dos campos que preciso pegar e onde pegar(TD)
     var lista = $('#tbl1>td');
     $.each(lista, function(index,item){
       valor = $(item).text();
       aux[index]=valor;
     });

     // copio os valores do vetor para matriz
      k=0;
     var resultado = new Array();
     for(i=0; i <6;i++){
       resultado[i]=new Array(4);
       for(j=0; j < 3;j++){
         resultado[i][j]=(aux[k]);                
         resultado[i][3]=0;
         k++                
       }
     }
     //  ordeno o vetor de acordo com tempo para decidir o vencedor
     resultado.sort(function(a,b){
       if (parseInt(b[2]) > parseInt(a[2])) return -1;
       else if (parseInt(b[2]) < parseInt(a[2])) return 1;
       else return 0;
     });

     //verifico se ouver empate e insiro os resultados na tabela
     for(i=0; i< resultado.length;i++){
       
       if(resultado[0][2]==resultado[i][2]){
         resultado[i][3]="Vencedor(a)!";
         $("#final").append('<tr><td>'+parseInt(i+1)+'</td'+'<td>'+'</td>'+'<td>'+resultado[i][0]+'</td>'+'<td>'+resultado[i][1]+'</td>'+'<td>'+resultado[i][2]+'</td>'+'<td>'+resultado[i][3]+'</td>'+'</tr>');
       }
       else{
         resultado[i][3]="-"; 
         $("#final").append('<tr><td>'+parseInt(i+1)+'</td'+'<td>'+'</td>'+'<td>'+resultado[i][0]+'</td>'+'<td>'+resultado[i][1]+'</td>'+'<td>'+resultado[i][2]+'</td>'+'<td>'+resultado[i][3]+'</td>'+'</tr>');
       }
     }
      

     
     
 }

// function t(btn) {
//   $(this).innerHTML
// }


function load(){
    comp1 = document.getElementById("comp1");
    temp1 = document.getElementById("temp1");
    comp2 = document.getElementById("comp2");
    temp2 = document.getElementById("temp2");
 
    comp1.addEventListener("click",addnome1,false);
    temp1.addEventListener("click",addtempo1,false);
    
    temp1.onclick = function(obj) {
        t(obj)
    }

     comp2 = document.getElementById("comp2");
    temp2 = document.getElementById("temp2");
 
    comp2.addEventListener("click",addnome2,false);
    temp2.addEventListener("click",addtempo2,false);

     comp1 = document.getElementById("comp3");
    temp1 = document.getElementById("temp3");
 
    comp3.addEventListener("click",addnome3,false);
    temp3.addEventListener("click",addtempo3,false);


     comp4 = document.getElementById("comp4");
    temp4 = document.getElementById("temp4");
 
    comp4.addEventListener("click",addnome4,false);
    temp4.addEventListener("click",addtempo4,false);

     comp5 = document.getElementById("comp5");
    temp5 = document.getElementById("temp5");
 
    comp5.addEventListener("click",addnome5,false);
    temp5.addEventListener("click",addtempo5,false);

     comp6 = document.getElementById("comp6");
    temp6 = document.getElementById("temp6");
 
    comp6.addEventListener("click",addnome6,false);
    temp6.addEventListener("click",addtempo6,false);
    
    final= document.getElementById("resultado");

    final.addEventListener("click",resultado,false);

}