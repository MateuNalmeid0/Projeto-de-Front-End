const dadosRegioes = {
    "Pernambuco": {
      nome: "Pernambuco",
      percentualVerde: 20, // Porcentagem sem problema
      percentualAmarelo: 30, // Porcentagem com problema
      percentualVermelho: 50, // Porcentagem com problema grave
      descricao: "Problemas graves com infraestrutura, mas com algumas soluções em andamento.",
    },
    "São Paulo": {
      nome: "São Paulo",
      percentualVerde: 10,
      percentualAmarelo: 30,
      percentualVermelho: 60,
      descricao: "Problemas graves com saúde pública e segurança, alta densidade populacional.",
    },
    "Minas Gerais": {
      nome: "Minas Gerais",
      percentualVerde: 50,
      percentualAmarelo: 30,
      percentualVermelho: 20,
      descricao: "Problemas sérios em áreas rurais, mas ações estão sendo tomadas.",
    },
    "Rio de Janeiro": {
      nome: "Rio de Janeiro",
      percentualVerde: 5,
      percentualAmarelo: 20,
      percentualVermelho: 75,
      descricao: "Problemas muito graves em várias áreas, exigindo intervenção urgente.",
    },
    "Bahia": {
      nome: "Bahia",
      percentualVerde: 70,
      percentualAmarelo: 20,
      percentualVermelho: 10,
      descricao: "Estado com boa infraestrutura e poucos problemas.",
    },
    "Ceará": {
      nome: "Ceará",
      percentualVerde: 60,
      percentualAmarelo: 30,
      percentualVermelho: 10,
      descricao: "Região com baixos problemas, mas algumas áreas precisam de atenção.",
    },
  };
  
  async function atualizarInfografico() {
    const regiao = document.getElementById('input-regiao').value.trim();
    const circle = document.getElementById('circle');
    const percentage = document.getElementById('percentage');
    const infoRegiao = document.getElementById('info-regiao');
    const verdeDiv = document.getElementById('verde');
    const amareloDiv = document.getElementById('amarelo');
    const vermelhoDiv = document.getElementById('vermelho');
  
    // Limpa as divisões de informações
    verdeDiv.innerHTML = '';
    amareloDiv.innerHTML = '';
    vermelhoDiv.innerHTML = '';
  
    // Verifica se os dados são locais ou se precisa buscar na API
    if (dadosRegioes[regiao]) {
      const dados = dadosRegioes[regiao];
      exibirInformacoes(dados, circle, percentage, infoRegiao, verdeDiv, amareloDiv, vermelhoDiv);
    } else {
      // Caso não tenha dados locais, buscamos na API (por enquanto não estamos utilizando API aqui)
      infoRegiao.innerHTML = "<p>Região não encontrada. Tente novamente.</p>";
    }
  }
  
  function exibirInformacoes(dados, circle, percentage, infoRegiao, verdeDiv, amareloDiv, vermelhoDiv) {
    // Atualizando o gráfico circular com múltiplas cores
    const percentualTotal = dados.percentualVerde + dados.percentualAmarelo + dados.percentualVermelho;
    percentage.textContent = `${percentualTotal}%`;
    circle.style.background = `conic-gradient(
      green ${dados.percentualVerde}% 0%, 
      yellow ${dados.percentualVerde}% ${dados.percentualVerde + dados.percentualAmarelo}%, 
      red ${dados.percentualVerde + dados.percentualAmarelo}% ${dados.percentualVerde + dados.percentualAmarelo + dados.percentualVermelho}%
    )`;
  
    // Exibindo a descrição da região
    infoRegiao.innerHTML = `<p><strong>${dados.nome}</strong></p><p>${dados.descricao}</p>`;
  
    // Categorizar a região
    categorizarRegiao(dados, verdeDiv, amareloDiv, vermelhoDiv);
  }
  
  function categorizarRegiao(dados, verdeDiv, amareloDiv, vermelhoDiv) {
    const divInfo = `<p><strong>${dados.nome}</strong>: ${dados.percentualVerde}% sem problema, ${dados.percentualAmarelo}% com problema, ${dados.percentualVermelho}% com problema grave</p><p>${dados.descricao}</p>`;
  
    verdeDiv.innerHTML += divInfo;
    amareloDiv.innerHTML += divInfo;
    vermelhoDiv.innerHTML += divInfo;
  }
  