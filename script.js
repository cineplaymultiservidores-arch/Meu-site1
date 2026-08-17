const form = document.getElementById("quoteForm");
const whatsapp = "5511943510381";

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const tipo = document.getElementById("tipo").value;
  const detalhes = document.getElementById("detalhes").value.trim();

  if (!nome || !tipo || !detalhes) {
    alert("Preencha todos os campos.");
    return;
  }

  const mensagem = `Olá Gabriel! 👋

Vi seu site e quero solicitar um orçamento.

👤 Nome: ${nome}
💻 Tipo de projeto: ${tipo}

📝 Minha ideia:
${detalhes}

Gostaria de saber o valor e o prazo para desenvolvimento.`;

  window.open(
    `https://wa.me/${whatsapp}?text=${encodeURIComponent(mensagem)}`,
    "_blank",
    "noopener,noreferrer"
  );
});

document.getElementById("year").textContent = new Date().getFullYear();
