document.getElementById("formBasculante").addEventListener("submit", function(e) {
  e.preventDefault();

  const largura = Number(document.getElementById("largura").value);
  const altura = Number(document.getElementById("altura").value);
  const tipoVidro = document.getElementById("tipoVidro").value;
  const corVidro = document.getElementById("corVidro").value;
  const tipoBasculante = document.getElementById("tipoBasculante").value;

  let precoMetro;

  /*CONDIÇÕES PARA VIDRO 6MM */

  if (tipoVidro === "temperado1" && corVidro === "incolor" && tipoBasculante === "basculante_com_corrente" ) {
        precoMetro = 115;
  } 
  
  else if (tipoVidro === "temperado1" && corVidro === "verde" && tipoBasculante === "basculante_com_corrente"){
        precoMetro = 125;
  }
  
   else if (tipoVidro === "temperado1" && corVidro === "fume" && tipoBasculante === "basculante_com_corrente"){
        precoMetro = 150;
  }

   else if (tipoVidro === "temperado1" && corVidro === "incolor" && tipoBasculante === "maximar" ) {
        precoMetro = 200;
  } 
  
  else if (tipoVidro === "temperado1" && corVidro === "verde" && tipoBasculante === "maximar"){
        precoMetro = 250;
  }
  
   else if (tipoVidro === "temperado1" && corVidro === "fume" && tipoBasculante === "maximar"){
        precoMetro = 300;
  }

  /*CONDIÇÕES PARA VIDRO 8MM */
  
  else if(tipoVidro === "temperado2" && corVidro === "incolor" && tipoBasculante === "basculante_com_corrente") {
        precoMetro = 180;
  }  
  
  else if (tipoVidro === "temperado2" && corVidro === "verde" && tipoBasculante === "basculante_com_corrente"){
        precoMetro = 250;
  }
  else if (tipoVidro === "temperado2" && corVidro === "fume" && tipoBasculante === "basculante_com_corrente"){
      precoMetro = 300;
  }

  else if(tipoVidro === "temperado2" && corVidro === "incolor" && tipoBasculante === "maximar") {
        precoMetro = 200;
  }  
  
  else if (tipoVidro === "temperado2" && corVidro === "verde" && tipoBasculante === "maximar"){
        precoMetro = 300;
  }
  else {
      precoMetro = 400;
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
    const tipoBasculante = document.getElementById("tipoBasculante").value;
    const tipoVidro = document.getElementById("tipoVidro").value;

    const mensagem = `Olá! Gostaria de um orçamento:
    Basculante: ${tipoBasculante} <br>
    Medidas: ${largura}cm x ${altura}cm <br>
    Vidro: ${tipoVidro} <br>
    Valor estimado: R$ ${valor.toFixed(2)}`;

    return `https://wa.me/55SEUNUMERO?text=${encodeURIComponent(mensagem)}`;
}