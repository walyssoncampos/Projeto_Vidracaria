document.getElementById("formPorta").addEventListener("submit", function(e) {
  e.preventDefault();

  const largura = Number(document.getElementById("largura").value);
  const altura = Number(document.getElementById("altura").value);
  const tipoVidro = document.getElementById("tipoVidro").value;
  const corVidro = document.getElementById("corVidro").value;
  const tipoPorta = document.getElementById("tipoPorta").value;

  let precoMetro;

  if (!largura || !altura || precoMetro === 0) {
      alert("Preencha todos os campos corretamente!");
      return;
  }

  if (tipoVidro === "temperado1" && corVidro === "incolor" && tipoPorta === "duas_folhas" ) {
        precoMetro = 220;
  } 
  
  else if (tipoVidro === "temperado1" && corVidro === "verde" && tipoPorta === "duas_folhas"){
        precoMetro = 250;
  }
  
   else if (tipoVidro === "temperado1" && corVidro === "fume" && tipoPorta === "duas_folhas"){
        precoMetro = 300;
  }

  else if(tipoVidro === "temperado2" && corVidro === "incolor" && tipoPorta === "duas_folhas") {
        precoMetro = 250;
  }  
  
  else if (tipoVidro === "temperado2" && corVidro === "verde" && tipoPorta === "duas_folhas"){
        precoMetro = 350;
  } 
  
  else if (tipoVidro === "temperado2" && corVidro === "fume" && tipoPorta === "duas_folhas") {
        precoMetro = 450;
  }

  else if (tipoVidro === "temperado1" && corVidro === "incolor" && tipoPorta === "tres_folhas"){
        precoMetro = 250;
  }
  
  else if (tipoVidro === "temperado1" && corVidro === "verde" && tipoPorta === "tres_folhas"){
        precoMetro = 280;
  }

  else if (tipoVidro === "temperado1" && corVidro === "fume" && tipoPorta === "tres_folhas"){
        precoMetro = 320;
  }

  else if(tipoVidro === "temperado2" && corVidro === "incolor" && tipoPorta === "tres_folhas") {
        precoMetro = 350;
  }  
  
  else if (tipoVidro === "temperado2" && corVidro === "verde" && tipoPorta === "tres_folhas"){
        precoMetro = 450;
  } 
  
  else if (tipoVidro === "temperado2" && corVidro === "fume" && tipoPorta === "tres_folhas") {
        precoMetro = 550;
  }
  //

  else if (tipoVidro === "temperado1" && corVidro === "incolor" && tipoPorta === "quatro_folhas"){
        precoMetro = 300;
  }
  
  else if (tipoVidro === "temperado1" && corVidro === "verde" && tipoPorta === "quatro_folhas"){
        precoMetro = 350;
  }

  else if (tipoVidro === "temperado1" && corVidro === "fume" && tipoPorta === "quatro_folhas"){
        precoMetro = 400;
  }

  else if(tipoVidro === "temperado2" && corVidro === "incolor" && tipoPorta === "quatro_folhas") {
        precoMetro = 430;
  }  
  
  else if (tipoVidro === "temperado2" && corVidro === "verde" && tipoPorta === "quatro_folhas"){
        precoMetro = 530;
  } 
  
  else if (tipoVidro === "temperado2" && corVidro === "fume" && tipoPorta === "quatro_folhas") {
        precoMetro = 630;
  }
  //

  else if (tipoVidro === "temperado1" && corVidro === "incolor" && tipoPorta === "abrir_pivotante"){
        precoMetro = 180;
  }
  
  else if (tipoVidro === "temperado1" && corVidro === "verde" && tipoPorta === "abrir_pivotante"){
        precoMetro = 230;
  }

  else if (tipoVidro === "temperado1" && corVidro === "fume" && tipoPorta === "abrir_pivotante"){
        precoMetro = 280;
  }

  else if(tipoVidro === "temperado2" && corVidro === "incolor" && tipoPorta === "abrir_pivotante") {
        precoMetro = 280;
  }  

  else if (tipoVidro === "temperado2" && corVidro === "verde" && tipoPorta === "abrir_pivotante"){
      precoMetro = 320;
  } 

  else if (tipoVidro === "temperado2" && corVidro === "fume" && tipoPorta === "abrir_pivotante"){
      precoMetro = 380;
  } 
  //

  else if (tipoVidro === "temperado1" && corVidro === "incolor" && tipoPorta === "abrir_dobradica"){
        precoMetro = 250;
  }
  
  else if (tipoVidro === "temperado1" && corVidro === "verde" && tipoPorta === "abrir_dobradica"){
        precoMetro = 300;
  }

  else if (tipoVidro === "temperado1" && corVidro === "fume" && tipoPorta === "abrir_dobradica"){
        precoMetro = 350;
  }

  else if(tipoVidro === "temperado2" && corVidro === "incolor" && tipoPorta === "abrir_dobradica") {
        precoMetro = 280;
  }  

  else if (tipoVidro === "temperado2" && corVidro === "verde" && tipoPorta === "abrir_dobradica"){
      precoMetro = 330;
  } else {
      precoMetro = 380;
  }

  const area = (largura/100) * (altura/100);
  const valor = area * precoMetro;
  

  document.getElementById("resultado").innerHTML = `Valor estimado: R$ ${valor.toFixed(2)}` +
  `<p>Valor sujeito à visita técnica.</p>` + 
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
    const selectPorta = document.getElementById("tipoPorta");
    const tipoPorta = selectPorta.options[selectPorta.selectedIndex].text;
    const selectVidro = document.getElementById("tipoVidro");
    const tipoVidro = selectVidro.options[selectVidro.selectedIndex].text;
    const selectCor = document.getElementById("corVidro");
    const corVidro = selectCor.options[selectCor.selectedIndex].text;

     const mensagem = `Olá! Gostaria de um orçamento:\n\n` +
    `Porta: ${tipoPorta}\n` + 
    `Medidas: ${largura_metro}m x ${altura_metro}m\n` +
    `Vidro: ${tipoVidro}\n` +
    `Cor: ${corVidro}\n` +
    `Valor estimado: R$ ${valor.toFixed(2)}`;

    return `https://wa.me/55SEUNUMERO?text=${encodeURIComponent(mensagem)}`;
}