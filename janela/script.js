document.getElementById("formJanela").addEventListener("submit", function(e) {
  e.preventDefault();

  const largura = Number(document.getElementById("largura").value);
  const altura = Number(document.getElementById("altura").value);
  const tipoVidro = document.getElementById("tipoVidro").value;
  const corVidro = document.getElementById("corVidro").value;
  const tipoJanela = document.getElementById("tipoJanela").value;

  let precoMetro;

  if (tipoVidro === "temperado1" && corVidro === "incolor" && tipoJanela === "duas_folhas" ) {
        precoMetro = 115;
  } 
  
  else if (tipoVidro === "temperado1" && corVidro === "verde" && tipoJanela === "duas_folhas"){
        precoMetro = 125;
  }
  
   else if (tipoVidro === "temperado1" && corVidro === "fume" && tipoJanela == "duas_folhas"){
        precoMetro = 150;
  }

  else if(tipoVidro === "temperado2" && corVidro === "incolor" && tipoJanela == "quatro_folhas") {
        precoMetro = 200;
  }  
  
  else if (tipoVidro === "temperado2" && corVidro === "verde" && tipoJanela == "quatro_folhas"){
        precoMetro = 230;
  } 
  
  else if (tipoVidro === "temperado2" && corVidro === "fume" && tipoJanela == "quatro_folhas") {
        precoMetro = 250;
  }

  else if (tipoVidro === "temperado2" && corVidro === "incolor" && tipoJanela === "retratil"){
      precoMetro = 400;
  }

   else if (tipoVidro === "temperado2" && corVidro === "verde" && tipoJanela === "retratil"){
      precoMetro = 425;
  } else {
      precoMetro = 450;
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
    const tipoJanela = document.getElementById("tipoJanela").value;
    const tipoVidro = document.getElementById("tipoVidro").value;

    const mensagem = `Olá! Gostaria de um orçamento:
    Janela: ${tipoJanela} <br>
    Medidas: ${largura}cm x ${altura}cm <br>
    Vidro: ${tipoVidro} <br>
    Valor estimado: R$ ${valor.toFixed(2)}`;

    return `https://wa.me/55SEUNUMERO?text=${encodeURIComponent(mensagem)}`;
}