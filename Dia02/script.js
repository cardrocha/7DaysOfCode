// Verifica se as respostas iniciais do usuário estão vazias
const nome = prompt("Qual o seu nome?");
if (nome === "") {
  alert("Nome não pode estar vazio!");
}
const idade = prompt("Quantos anos você tem?");
if (idade === "") {
  alert("Idade não pode estar vazio!");
}
const linguagem = prompt("Qual linguagem de programação você está estudando?")
if (linguagem === "") {
  alert("Linguagem não pode estar vazio!");
}

// Só continua se todas as perguntas iniciais foram respondidas
if (nome === "" || idade === "" || linguagem === "") {
  console.log("Você não respondeu corretamente as perguntas de antes!");
} else {
  const mensagem = `Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`;
  console.log(mensagem);

  //Condição extra: Verifica se o usuário gosta da linguagem informada
  const pergunta = prompt(`Você gosta de estudar ${linguagem}? (Sim ou Não)`);

  if (pergunta && pergunta.toUpperCase() === "SIM") {
    console.log("Muito bom! Continue estudando e você terá muito sucesso");
  } else if (pergunta && pergunta.toUpperCase() === "NÃO") {
    console.log("Ahh que pena... Já tentou aprender outras linguagens?");
  } else {
    console.log("Resposta inválida. Por favor, responda com 'Sim' ou 'Não'.");
  }
}