let escolhaValida = false;

let skills = 0;

let arraySkills = [];

const escolha = prompt("Qual área deseja seguir? 1 - Front-end || 2 - Back-end");

switch (escolha) {
  case "1":
    alert("Front-end, ótima escolha! Trabalhar com interfaces e design.");
    const tecnologia = prompt("Qual tecnologia do front-end deseja aprender? 1 - React || 2 - Vue.js");
    if (tecnologia === "1") {
      alert("React é a biblioteca mais usada na construção de interfaces de usuário.");
      escolhaValida = true;
    } else if (tecnologia === "2") {
      alert("Vue.js é um framework 'novo' bastante utilizado na construção de interfaces de usuário.");
      escolhaValida = true;
    } else {
      console.log("Opção inválida. Escolha 1 ou 2.");
    }
    break;
  case "2":
    alert("Back-end, ótima escolha! Trabalhar com banco de dados e lógica do servidor.");
    const tecnologia2 = prompt("Qual tecnologia do back-end deseja aprender? 1 - C# || 2 - Java");
    if (tecnologia2 === "1") {
      alert("C# é uma linguagem de programação de propósito geral, orientada a objetos.");
      escolhaValida = true;
    } else if (tecnologia2 === "2") {
      alert("Java é uma linguagem de programação popular, orientada a objetos e multiplataforma.");
      escolhaValida = true;
    } else {
      console.log("Opção inválida. Escolha 1 ou 2.");
    }
    break;
  default:
    alert("Você não escolheu uma opção válida!");
}

if (escolhaValida) {
  const especializacao = prompt(
    `Você deseja seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack? 
    (1 - Seguir na área ${escolha === "1" ? "Front-end" : "Back-end"} || 2 - Se tornar Fullstack)`
  );

  if (especializacao === "1") {
    console.log(
      `Excelente! Continuar se especializando em ${escolha === "1" ? "Front-end" : "Back-end"} vai te tornar uma referência na área.`
    );
  } else if (especializacao === "2") {
    console.log(
      "Incrível! Se tornar Fullstack vai te dar uma visão completa do desenvolvimento e abrir muitas oportunidades."
    );
  } else {
    console.log("Opção inválida. Escolha 1 ou 2.");
  }
}

if(escolhaValida) {
  while (skills < 5) {
    const skills2 = prompt(`${skills >= 1 ? "Você já escolheu " + (skills) : "Escolha 5"} tecnologia(s) que gostaria de aprender`)
    console.log(`Você escolheu: ${skills2}`);
    arraySkills.push(skills2) 
    skills++;
  }
  alert(`Parabéns! Você escolheu suas 5 tecnologias. (${arraySkills})`);
}