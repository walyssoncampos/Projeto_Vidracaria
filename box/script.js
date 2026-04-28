document.getElementById("formBox").addEventListener("submit", function(e) {
  e.preventDefault();

  const largura = Number(document.getElementById("largura").value);
  const altura = Number(document.getElementById("altura").value);
  const tipoVidro = document.getElementById("tipoVidro").value;
  const corVidro = document.getElementById("corVidro").value;
  const tipoBox = document.getElementById("tipoBox").value;

  const precos = {
      temperado1: {
            duas_folhas: {
                  incolor: 350,
                  verde: 400,
                  fume: 450
            },
            tres_folhas: {
                  incolor: 370,
                  verde: 430,
                  fume: 470
            },
            quatro_folhas: {
                  incolor: 390,
                  verde: 450,
                  fume: 490
            },
            abrir: {
                  incolor: 350,
                  verde: 410,
                  fume: 450
            }

      },
      temperado2: {
            duas_folhas: {
                  incolor: 440,
                  verde: 500,
                  fume: 550

            },
            tres_folhas: {
                  incolor: 460,
                  verde: 520,
                  fume: 570
            },
            quatro_folhas: {
                  incolor: 500,
                  verde: 540,
                  fume: 580
            },
            abrir: {
                  incolor: 460,
                  verde: 520,
                  fume: 550,
            }

      }
  };
  
  const precoMetro = precos[tipoVidro]?.[tipoBox]?.[corVidro];
  
  if (!largura || !altura || precoMetro === 0) {
      alert("Preencha todos os campos corretamente!");
      return;
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