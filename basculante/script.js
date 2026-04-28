document.getElementById("formBasculante").addEventListener("submit", function(e) {
  e.preventDefault();

  const largura = Number(document.getElementById("largura").value);
  const altura = Number(document.getElementById("altura").value);
  const tipoVidro = document.getElementById("tipoVidro").value;
  const corVidro = document.getElementById("corVidro").value;
  const tipoBasculante = document.getElementById("tipoBasculante").value;

  const precos = {
      temperado1: {
            basculante_com_corrente: {
                  incolor: 115,
                  verde: 125,
                  fume: 150
            },
            maximar: {
                  incolor: 200,
                  verde: 250,
                  fume: 300
            }
      },
      temperado2: {
            basculante_com_corrente: {
                  incolor: 180,
                  verde: 250,
                  fume: 300
            },
            maximar: {
                  incolor: 200,
                  verde: 300,
                  fume: 400
            }
      }
  };

  const precoMetro = precos[tipoVidro]?.[tipoBasculante]?.[corVidro];

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
    const selectBasculante = document.getElementById("tipoBasculante");
    const tipoBasculante = selectBasculante.options[selectBasculante.selectedIndex].text;
    const selectVidro = document.getElementById("tipoVidro");
    const tipoVidro = selectVidro.options[selectVidro.selectedIndex].text;
    const selectCor = document.getElementById("corVidro");
    const corVidro = selectCor.options[selectCor.selectedIndex].text;

     const mensagem = `Olá! Gostaria de um orçamento:\n\n` +
    `Basculante: ${tipoBasculante}\n` + 
    `Medidas: ${largura_metro}m x ${altura_metro}m\n` +
    `Vidro: ${tipoVidro}\n` +
    `Cor: ${corVidro}\n` +
    `Valor estimado: R$ ${valor.toFixed(2)}`;

    return `https://wa.me/55SEUNUMERO?text=${encodeURIComponent(mensagem)}`;
}