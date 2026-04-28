document.getElementById("formPorta").addEventListener("submit", function(e) {
  e.preventDefault();

  const largura = Number(document.getElementById("largura").value);
  const altura = Number(document.getElementById("altura").value);
  const tipoVidro = document.getElementById("tipoVidro").value;
  const corVidro = document.getElementById("corVidro").value;
  const tipoPorta = document.getElementById("tipoPorta").value;

  const precos = {
      temperado1: {
            duas_folhas: {
                  incolor: 220,
                  verde: 250, 
                  fume: 300
            },
            tres_folhas: {
                  incolor: 250,
                  verde: 280,
                  fume: 320
            },
            quatro_folhas: {
                  incolor: 300,
                  verde: 350,
                  fume: 400
            },
            abrir_pivotante: {
                  incolor: 180,
                  verde: 230,
                  fume: 280
            },
            abrir_dobradica: {
                  incolor: 250,
                  verde: 300, 
                  fume: 350
            }

      },
      temperado2: {
            duas_folhas: {
                  incolor: 250,
                  verde: 350,
                  fume: 450 
            },
            tres_folhas: {
                  incolor: 350,
                  verde: 450,
                  fume: 550
            },
            quatro_folhas: {
                  incolor: 430,
                  verde: 530,
                  fume: 630
            },
            abrir_pivotante: {
                  incolor: 280,
                  verde: 320,
                  fume: 380 
            },
            abrir_dobradica: {
                  incolor: 280,
                  verde: 330,
                  fume: 380
            }
      }
  };
  
  const precoMetro = precos[tipoVidro]?.[tipoPorta]?.[corVidro];

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