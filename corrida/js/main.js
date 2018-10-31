
function pegardados(obj){
    $('td').click(function(){

      var id = $(this).attr("id");

      if(id.length<6){

        person=document.getElementById(id);

        t = prompt("qual seu nome");

        if(t.length!=0)person.innerHTML=t;

      }else if(id.length>7) resultado();

      else{

        person=document.getElementById(id);

        t = prompt("informe seu tempo sem segundos!");

        if(t.length!=0)person.innerHTML=t;

      }

    })

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

         $("#final").append('<tr><td>'+parseInt(i+1)+'</td'+'<td>'+'</td>'+'<td>'+resultado[i][0]+'</td>'+'<td>'+resultado[i][1]+'</td>'+'<td>'+resultado[i][2]+'</td>'+'<td>Vencedor(a)!</td>'+'</tr>');

       }

       else 
        $("#final").append('<tr><td>'+parseInt(i+1)+'</td'+'<td>'+'</td>'+'<td>'+resultado[i][0]+'</td>'+'<td>'+resultado[i][1]+'</td>'+'<td>'+resultado[i][2]+'</td>'+'<td>-</td>'+'</tr>');
       
     }
    
 }

function load(){    

  pegardados(this);
  
}