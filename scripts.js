function calculaPontos(jogador) {
    var pontos = jogador.vitorias * 2 + jogador.empates - jogador.derrotas;
    return pontos;
  }
  
  var jogadores = [];
  
  function exibeJogadoresNaTela() {
    var elemento = "";
    for (var i = 0; i < jogadores.length; i++) {
      elemento = elemento + "<tr><td>" + jogadores[i].nome + "</td>";
      elemento += "<td>" + jogadores[i].vitorias + "</td>";
      elemento += "<td>" + jogadores[i].empates + "</td>";
      elemento += "<td>" + jogadores[i].derrotas + "</td>";
      elemento += "<td>" + jogadores[i].pontos + "</td>";
      //para o JavaScript entender as ASPAS, devo colocar aspas simples dentro das duplas;
      elemento +=
        "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
      elemento +=
        "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
      elemento +=
        "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
      elemento += "</tr>";
    }
  
    var tabelaJogadores = document.getElementById("tabelaJogadores");
    tabelaJogadores.innerHTML = elemento;
  }
  
  exibeJogadoresNaTela(jogadores);
  
  function adicionarVitoria(i) {
    var jogador = jogadores[i];
    jogador.vitorias++;
    jogador.pontos = calculaPontos(jogador);
    exibeJogadoresNaTela(jogadores);
  }
  
  function adicionarEmpate(i) {
    var jogador = jogadores[i];
    jogador.empates++;
    jogador.pontos = calculaPontos(jogador);
    exibeJogadoresNaTela(jogadores);
  }
  
  function adicionarDerrota(i) {
    var jogador = jogadores[i];
    jogador.derrotas++;
    jogador.pontos = calculaPontos(jogador);
    exibeJogadoresNaTela(jogadores);
  }
  
  function zerarPontos() {}
  
  function excluirJogador() {}
  
  function incluirJogador() {
    var pegarNome = document.getElementById("novoJogador").value;
    var nomeParaIncluir = {
      nome: pegarNome,
      vitorias: 0,
      empates: 0,
      derrotas: 0,
      pontos: 0
    };
    jogadores.push(nomeParaIncluir);
    exibeJogadoresNaTela();
    document.getElementById("novoJogador").value = "";
  }
