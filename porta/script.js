document.getElementById("formPorta").addEventListener("submit", function(e) {
  e.preventDefault();

  const largura = Number(document.getElementById("largura").value);
  const altura = Number(document.getElementById("altura").value);
  const tipoVidro = document.getElementById("tipoVidro").value;
  const corVidro = document.getElementById("corVidro").value;
  const tipoPorta = document.getElementById("tipoPorta").value;

  let precoMetro;

  if (tipoVidro === "temperado1" && corVidro === "incolor" && tipoBox === "duas_folhas" ) {
        precoMetro = 350;
  } 
  
  else if (tipoVidro === "temperado1" && corVidro === "verde" && tipoBox === "duas_folhas"){
        precoMetro = 400;
  }
  
   else if (tipoVidro === "temperado1" && corVidro === "fume" && tipoBox === "duas_folhas"){
        precoMetro = 450;
  }

  else if(tipoVidro === "temperado2" && corVidro === "incolor" && tipoBox === "duas_folhas") {
        precoMetro = 440;
  }  
  
  else if (tipoVidro === "temperado2" && corVidro === "verde" && tipoBox === "duas_folhas"){
        precoMetro = 500;
  } 
  
  else if (tipoVidro === "temperado2" && corVidro === "fume" && tipoBox === "duas_folhas") {
        precoMetro = 550;
  }

  else if (tipoVidro === "temperado1" && corVidro === "incolor" && tipoBox === "tres_folhas"){
        precoMetro = 370;
  }
  
  else if (tipoVidro === "temperado1" && corVidro === "verde" && tipoBox === "tres_folhas"){
        precoMetro = 430;
  }

  else if (tipoVidro === "temperado1" && corVidro === "fume" && tipoBox === "tres_folhas"){
        precoMetro = 470;
  }

  else if(tipoVidro === "temperado2" && corVidro === "incolor" && tipoBox === "tres_folhas") {
        precoMetro = 460;
  }  
  
  else if (tipoVidro === "temperado2" && corVidro === "verde" && tipoBox === "tres_folhas"){
        precoMetro = 520;
  } 
  
  else if (tipoVidro === "temperado2" && corVidro === "fume" && tipoBox === "tres_folhas") {
        precoMetro = 570;
  }
  //

  else if (tipoVidro === "temperado1" && corVidro === "incolor" && tipoBox === "quatro_folhas"){
        precoMetro = 390;
  }
  
  else if (tipoVidro === "temperado1" && corVidro === "verde" && tipoBox === "quatro_folhas"){
        precoMetro = 450;
  }

  else if (tipoVidro === "temperado1" && corVidro === "fume" && tipoBox === "quatro_folhas"){
        precoMetro = 490;
  }

  else if(tipoVidro === "temperado2" && corVidro === "incolor" && tipoBox === "quatro_folhas") {
        precoMetro = 500;
  }  
  
  else if (tipoVidro === "temperado2" && corVidro === "verde" && tipoBox === "quatro_folhas"){
        precoMetro = 540;
  } 
  
  else if (tipoVidro === "temperado2" && corVidro === "fume" && tipoBox === "quatro_folhas") {
        precoMetro = 580;
  }
  //

  else if (tipoVidro === "temperado1" && corVidro === "incolor" && tipoBox === "abrir_pivotante"){
        precoMetro = 350;
  }
  
  else if (tipoVidro === "temperado1" && corVidro === "verde" && tipoBox === "abrir_pivotante"){
        precoMetro = 410;
  }

  else if (tipoVidro === "temperado1" && corVidro === "fume" && tipoBox === "abrir_pivotante"){
        precoMetro = 450;
  }

  else if(tipoVidro === "temperado2" && corVidro === "incolor" && tipoBox === "abrir_pivotante") {
        precoMetro = 460;
  }  

  else if (tipoVidro === "temperado2" && corVidro === "verde" && tipoBox === "abrir_pivotante"){
      precoMetro = 520;
  } 
  //

  else if (tipoVidro === "temperado1" && corVidro === "incolor" && tipoBox === "abrir_dobradica"){
        precoMetro = 350;
  }
  
  else if (tipoVidro === "temperado1" && corVidro === "verde" && tipoBox === "abrir_dobradica"){
        precoMetro = 410;
  }

  else if (tipoVidro === "temperado1" && corVidro === "fume" && tipoBox === "abrir_dobradica"){
        precoMetro = 450;
  }

  else if(tipoVidro === "temperado2" && corVidro === "incolor" && tipoBox === "abrir_dobradica") {
        precoMetro = 460;
  }  

  else if (tipoVidro === "temperado2" && corVidro === "verde" && tipoBox === "abrir_dobradica"){
      precoMetro = 520;
  } else {
      precoMetro = 550;
  }

  const area = (largura/100) * (altura/100);
  const valor = area * precoMetro;

  document.getElementById("resultado").innerHTML = `Valor estimado: R$ ${valor.toFixed(2)} <br>
  <small>*Valor sujeito à visita técnica. O valor da instalação não está incluso.</small> <br><br>
  <a href="${gerarWhatsApp(valor)}" target="_blank">
    Enviar pelo WhatsApp
  </a>`;
});

function gerarWhatsApp(valor){
    const largura = document.getElementById("largura").value;
    const altura = document.getElementById("altura").value;
    const tipoPorta = document.getElementById("tipoPorta").value;
    const tipoVidro = document.getElementById("tipoVidro").value;

    const mensagem = `Olá! Gostaria de um orçamento:
    Porta: ${tipoPorta} <br>
    Medidas: ${largura}cm x ${altura}cm <br>
    Vidro: ${tipoVidro} <br>
    Valor estimado: R$ ${valor.toFixed(2)}`;

    return `https://wa.me/55SEUNUMERO?text=${encodeURIComponent(mensagem)}`;
}