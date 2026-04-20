document.getElementById("formBox").addEventListener("submit", function(e) {
  e.preventDefault();

  const largura = Number(document.getElementById("largura").value);
  const altura = Number(document.getElementById("altura").value);
  const tipoVidro = document.getElementById("tipoVidro").value;
  const corVidro = document.getElementById("corVidro").value;
  const tipoBox = document.getElementById("tipoBox").value;

  let precoMetro;

  if (!largura || !altura || precoMetro === 0) {
      alert("Preencha todos os campos corretamente!");
      return;
  }

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
  else if (tipoVidro === "temperado1" && corVidro === "incolor" && tipoBox === "abrir"){
        precoMetro = 350;
  }
  
  else if (tipoVidro === "temperado1" && corVidro === "verde" && tipoBox === "abrir"){
        precoMetro = 410;
  }

  else if (tipoVidro === "temperado1" && corVidro === "fume" && tipoBox === "abrir"){
        precoMetro = 450;
  }

  else if(tipoVidro === "temperado2" && corVidro === "incolor" && tipoBox === "abrir") {
        precoMetro = 460;
  }  

  else if (tipoVidro === "temperado2" && corVidro === "verde" && tipoBox === "abrir"){
      precoMetro = 520;
  } else {
      precoMetro = 550;
  }

  const area = (largura/100) * (altura/100);
  const valor = area * precoMetro;

  document.getElementById("resultado").innerHTML = `Valor estimado: R$ ${valor.toFixed(2)}` +
  `<p>Valor sujeito à visita técnica</p>` +
   `<p>O valor da instalação não está incluso.</p>` +
  `<a href="${gerarWhatsApp(valor)}" target="_blank">
    Enviar pelo WhatsApp
  </a>`;
});

function gerarWhatsApp(valor){
    const largura = document.getElementById("largura").value;
    const largura_metro = (largura/100);
    const altura = document.getElementById("altura").value;
    const altura_metro = (altura/100);
    const selectBox = document.getElementById("tipoBox");
    const tipoBox = selectBox.options[selectBox.selectedIndex].text;
    const selectVidro = document.getElementById("tipoVidro");
    const tipoVidro = selectVidro.options[selectVidro.selectedIndex].text;
    const selectCor = document.getElementById("corVidro");
    const corVidro = selectCor.options[selectCor.selectedIndex].text;

     const mensagem = `Olá! Gostaria de um orçamento:\n\n` +
    `Box: ${tipoBox}\n` + 
    `Medidas: ${largura_metro}m x ${altura_metro}m\n` +
    `Vidro: ${tipoVidro}\n` +
    `Cor: ${corVidro}\n` +
    `Valor estimado: R$ ${valor.toFixed(2)}`;

    return `https://wa.me/55SEUNUMERO?text=${encodeURIComponent(mensagem)}`;
}