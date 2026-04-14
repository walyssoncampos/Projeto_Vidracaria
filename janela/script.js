document.getElementById("formJanela").addEventListener("submit", function(e) {
  e.preventDefault();

  const largura = Number(document.getElementById("largura").value);
  const altura = Number(document.getElementById("altura").value);
  const tipoVidro = document.getElementById("tipoVidro").value;
  const corVidro = document.getElementById("corVidro").value;
  const tipoJanela = document.getElementById("tipoJanela").value;

  let precoMetro;

  if (!largura || !altura || precoMetro === 0) {
      alert("Preencha todos os campos corretamente!");
      return;
  }

  /*CONDIÇÕES PARA VIDRO 6MM */

  if (tipoVidro === "temperado1" && corVidro === "incolor" && tipoJanela === "duas_folhas" ) {
        precoMetro = 180;
  } 
  
   else if (tipoVidro === "temperado1" && corVidro === "verde" && tipoJanela === "duas_folhas"){
        precoMetro = 200;
  }
  
   else if (tipoVidro === "temperado1" && corVidro === "fume" && tipoJanela === "duas_folhas"){
        precoMetro = 250;
  }

   else if (tipoVidro === "temperado1" && corVidro === "incolor" && tipoJanela === "quatro_folhas" ) {
        precoMetro = 280;
  } 
  
   else if (tipoVidro === "temperado1" && corVidro === "verde" && tipoJanela === "quatro_folhas"){
        precoMetro = 320;
  }
  
   else if (tipoVidro === "temperado1" && corVidro === "fume" && tipoJanela === "quatro_folhas"){
        precoMetro = 360;
  }

   else if (tipoVidro === "temperado1" && corVidro === "incolor" && tipoJanela === "retratil" ) {
        precoMetro = 300;
  } 
  
   else if (tipoVidro === "temperado1" && corVidro === "verde" && tipoJanela === "retratil"){
        precoMetro = 340;
  }
  
   else if (tipoVidro === "temperado1" && corVidro === "fume" && tipoJanela === "retratil"){
        precoMetro = 380;
  }

  /*CONDIÇÕES PARA VIDRO 8MM */

  else if(tipoVidro === "temperado2" && corVidro === "incolor" && tipoJanela === "duas_folhas") {
        precoMetro = 290;
  }  
  
  else if (tipoVidro === "temperado2" && corVidro === "verde" && tipoJanela === "duas_folhas"){
        precoMetro = 330;
  } 
  
  else if (tipoVidro === "temperado2" && corVidro === "fume" && tipoJanela === "duas_folhas") {
        precoMetro = 370;
  }

  else if(tipoVidro === "temperado2" && corVidro === "incolor" && tipoJanela === "quatro_folhas") {
        precoMetro = 380;
  }  
  
  else if (tipoVidro === "temperado2" && corVidro === "verde" && tipoJanela === "quatro_folhas"){
        precoMetro = 420;
  } 
  
  else if (tipoVidro === "temperado2" && corVidro === "fume" && tipoJanela === "quatro_folhas") {
        precoMetro = 460;
  }

  else if (tipoVidro === "temperado2" && corVidro === "incolor" && tipoJanela === "retratil"){
      precoMetro = 480;
  }

   else if (tipoVidro === "temperado2" && corVidro === "verde" && tipoJanela === "retratil"){
      precoMetro = 540;
  } else {
      precoMetro = 600;
  }

  const area = (largura/100) * (altura/100);
  const valor = area * precoMetro;

  document.getElementById("resultado").innerHTML = `Valor estimado: R$ ${valor.toFixed(2)} \n
  <small>*Valor sujeito à visita técnica. O valor da instalação não está incluso.</small> \n\n
  <a href="${gerarWhatsApp(valor)}" target="_blank">
    Enviar pelo WhatsApp
  </a>`;
});

function gerarWhatsApp(valor){
    const largura = document.getElementById("largura").value;
    const altura = document.getElementById("altura").value;
    const tipoJanela = document.getElementById("tipoJanela").value;
    const tipoVidro = document.getElementById("tipoVidro").value;

    const mensagem = `Olá! Gostaria de um orçamento:
    Janela: ${tipoJanela} \n
    Medidas: ${largura}cm x ${altura}cm \n
    Vidro: ${tipoVidro} \n
    Valor estimado: R$ ${valor.toFixed(2)}`;

    return `https://wa.me/55SEUNUMERO?text=${encodeURIComponent(mensagem)}`;
}