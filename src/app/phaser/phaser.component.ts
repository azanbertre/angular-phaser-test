import { Component, OnInit } from '@angular/core';
import GameBuilder from 'phaser-gamebuilder';

@Component({
  selector: 'app-phaser',
  templateUrl: './phaser.component.html',
  styleUrls: ['./phaser.component.css']
})
export class PhaserComponent implements OnInit {

  constructor() { }

  ngOnInit() {

      var gameBuilder = new GameBuilder();

      // Cria um jogo com o game.json. Titulo: Game, no div 'phaser'.
      var game = gameBuilder.newGame({"title": "Game", "parent": "phaser"}, "game.json");

      /**
       * Cria um jogo com o game.json. Titulo: Game-1, pois já existe um jogo com
       * titulo Game, no div 'phaser2'.
       */
      // OBS: game.json é o caminho default se não for passado nenhum.
      var game1 = gameBuilder.newGame({"title": "Game", "parent": "phaser2"});

      /**
       * Cria um jogo com o game.json. Titulo: Game-2, pois Game e Game-1 já existem,
       * (Game é o titulo default), no div 'phaser3' com width e height 800.
       */
      var game2 = gameBuilder.newGame({"width": 800, "height": 800, "parent": "phaser3"});


      /**
       * Um único GameBuilder pode guardar diversas instâncias de jogos com o Phaser.
       * Isso pode ser útil na hora de criar respostas de questões interativas.
       */

      game.buildWorld();
      game.spawnObjects();

      game1.buildWorld();
      game1.spawnObjects();

      game2.buildWorld();
      game2.spawnObjects();

      /**
       * Outras funções do GameBuilder:
       * @function getInstances Retorna todos os jogos desse GameBuilder.
       * @function getInstanceByTitle Retorna um jogo pelo titulo.
       * @function loadJson Carrega qualquer json que possa ser necessário.
       */

      /**
       * Outras funções da instância do jogo:
       * @function refresh Atualiza o jogo com possiveis diferenças no GameData (json com informações do jogo).
       */

      /**
       * Funções que precisam de ajuste:
       * @function resize Ajusta o jogo ao div parent.
       */

      /**
       * Existem muitas outras funções mais especificas, como funções de objeto,
       * no caso o Carrinho, e funções para execução de código, que posteriormente
       * poderá ser chamada pelo Blockly.
       */
  }
}
