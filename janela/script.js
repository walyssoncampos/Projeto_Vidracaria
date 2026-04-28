document.getElementById("formJanela").addEventListener("submit", function(e) {
  e.preventDefault();

  const largura = Number(document.getElementById("largura").value);
  const altura = Number(document.getElementById("altura").value);
  const tipoVidro = document.getElementById("tipoVidro").value;
  const corVidro = document.getElementById("corVidro").value;
  const tipoJanela = document.getElementById("tipoJanela").value;

  const precos = {
      temperado1: {
            duas_folhas: {
                  incolor: 180,
                  verde: 200,
                  fume: 250
            },
            quatro_folhas: {
                  incolor: 280,
                  verde: 320,
                  fume: 360
            },
            retratil: {
                  incolor: 300,
                  verde: 340,
                  fume: 380
            }
      },
      temperado2: {
            duas_folhas: {
                  incolor: 290,
                  verde: 330,
                  fume: 370
            },
            quatro_folhas: {
                  incolor: 380,
                  verde: 420,
                  fume: 460
            },
            retratil: {
                  incolor: 480, 
                  verde: 540, 
                  fume: 600
            }
      }
  };
  
  const precoMetro = precos[tipoVidro]?.[tipoJanela]?.[corVidro];

  if (!largura || !altura || precoMetro === 0) {
      alert("Preencha todos os campos corretamente!");
      return;
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
    const selectJanela = document.getElementById("tipoJanela");
    const tipoJanela = selectJanela.options[selectJanela.selectedIndex].text;
    const selectVidro = document.getElementById("tipoVidro");
    const tipoVidro = selectVidro.options[selectVidro.selectedIndex].text;
    const selectCor = document.getElementById("corVidro");
    const corVidro = selectCor.options[selectCor.selectedIndex].text;

    const mensagem = `Olá! Gostaria de um orçamento:\n\n` +
    `Janela: ${tipoJanela}\n` + 
    `Medidas: ${largura_metro}m x ${altura_metro}m\n` +
    `Vidro: ${tipoVidro}\n` +
    `Cor: ${corVidro}\n` +
    `Valor estimado: R$ ${valor.toFixed(2)}`;

    return `https://wa.me/55SEUNUMERO?text=${encodeURIComponent(mensagem)}`;
}