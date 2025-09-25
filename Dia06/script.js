let ListaCompras = [];
ListaCompras.laticinios = ["leite vegetal", "leite de vaca", "leite em pó"]
ListaCompras.frutas = ["banana", "tomate", "macã", "uva", "abacate"]
ListaCompras.doces = ["chiclete", "bala de ursinho"]
ListaCompras.outros = []

const escolha = prompt("Escolha uma das opções: 1 - Adicionar um item a lista / 2 - Remover um item da lista? / 3 - Exibir a lista de compras")

switch (escolha) {
  case "1":
    const item = prompt("1 - Qual a categoria? 1 - laticinios, 2 - frutas, 3 - doces, 4 - outros")
    switch (item) {
      case "1":
        let item = prompt("Digite o nome do item que deseja adicionar na catgoria Laticínios:");
        ListaCompras.laticinios.push(item);
        console.log(ListaCompras.laticinios)
        break;
      case "2":
        let item2 = prompt("Digite o nome do item que deseja adicionar na categoria frutas:");
        ListaCompras.frutas.push(item2);
        console.log(ListaCompras.frutas)
        break;
      case "3":
        let item3 = prompt("Digite o nome do item que deseja adicionar na categoria doces:");
        ListaCompras.doces.push(item3);
        console.log(ListaCompras.doces)
        break;
      case "4":
        let item4 = prompt("Digite o nome do item que deseja adicionar na categoria outros:");
        ListaCompras.outros.push(item4);
        console.log(ListaCompras.outros)
        break;
      default:
        alert("Opção inválida!")
    }
    break;
  case "2":
    alert("Este são os itens da sua lista de compras.")
    alert(`Sua lista:\nLaticínios: ${ListaCompras.laticinios}\nFrutas: ${ListaCompras.frutas}\nDoces: ${ListaCompras.doces}\nOutros: ${ListaCompras.outros}`);
    alert(`Qual deles deseja remover?`)
    const itemRemovido = prompt("Digite o nome do item que deseja remover da lista de compras.")
    const index = ListaCompras.laticinios.indexOf(itemRemovido);
    const index2 = ListaCompras.frutas.indexOf(itemRemovido);
    const index3 = ListaCompras.doces.indexOf(itemRemovido);
    const index4 = ListaCompras.outros.indexOf(itemRemovido);
    if (index > -1) {
      ListaCompras.laticinios.splice(index, 1);
    } else if (index2 > -1) {
      ListaCompras.frutas.splice(index2, 1);
    } else if (index3 > -1) {
      ListaCompras.doces.splice(index3, 1);
    } else if (index4 > -1) {
      ListaCompras.outros.splice(index4, 1);
    } else {
      alert(`O item ${itemRemovido} não está na sua lista!`);
      break;
    }
  case "3":
    alert(`Sua lista:\nLaticínios: ${ListaCompras.laticinios}\nFrutas: ${ListaCompras.frutas}\nDoces: ${ListaCompras.doces}\nOutros: ${ListaCompras.outros}`);
    break;
  default:
    alert("Opção inválida!")
}