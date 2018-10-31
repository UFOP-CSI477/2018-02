function Imc(){
    p = prompt("Informe seu peso em KG");
    a = prompt("Informe sua altura em cm");

    if(p.lenght!=0 && a.lenght!=0){
      peso= parseFloat(p);
      altura=parseFloat(a);
      ideal1=(altura*altura)*18.5;
      ideal2=(altura*altura)*24.9;
      aux='<i class="tiny material-icons">send</i>'+(peso/(altura*altura))+'</br>Peso Saudável<i class="tiny material-icons">send</i>'+'Entre '+ideal1+' e '+ideal2;
      $("#resultado").append(aux);
   }

  }
  function carregar(){
  imc = document.getElementById("resultado");
  imc.addEventListener("click",Imc,false);
}