import {Component, OnInit} from '@angular/core';
import GameBuilder from 'phaser-gamebuilder';

@Component({
  selector: 'app-phaser',
  templateUrl: './phaser.component.html',
  styleUrls: ['./phaser.component.css']
})
export class PhaserComponent implements OnInit {

  constructor() {
    this.gameBuilder = new GameBuilder();

    // Cria um jogo com o game.json. Titulo: Game, no div 'phaser'.
    this.game = this.gameBuilder.newGame({'title': 'Game', 'parent': 'phaser'}, 'game.json');

    /**
     * Cria um jogo com o game.json. Titulo: Game-1, pois já existe um jogo com
     * titulo Game. Cria no div 'phaser2'.
     */
    // OBS: game.json é o caminho default se não for passado nenhum.
    this.game1 = this.gameBuilder.newGame({'title': 'Game', 'parent': 'phaser2'});

    /**
     * Cria um jogo com o game.json. Titulo: Game-2, pois Game e Game-1 já existem,
     * (Game é o titulo default), no div 'phaser3' com width e height 800.
     */
    this.game2 = this.gameBuilder.newGame({'width': 800, 'height': 800, 'parent': 'phaser3'});
  }

  ngOnInit() {

    /**
     * Um único GameBuilder pode guardar diversas instâncias de jogos com o Phaser.
     * Isso pode ser útil na hora de criar respostas de questões interativas.
     */

    // this.game.buildWorld();
    // this.game.spawnObjects();
    //
    // this.game1.buildWorld();
    // this.game1.spawnObjects();
    //
    // this.game2.buildWorld();
    // this.game2.spawnObjects();

    /**
     * Outras funções do GameBuilder:
     * @function getInstances() Retorna todos os jogos desse GameBuilder.
     * @function getInstanceByTitle() Retorna um jogo pelo titulo.
     * @function loadJson() Carrega qualquer json que possa ser necessário.
     */

    /**
     * Outras funções da instância do jogo:
     * @function refresh() Atualiza o jogo com possiveis diferenças no GameData (json com informações do jogo).
     */

    /**
     * Funções que precisam de ajuste:
     * @function resize() Ajusta o jogo ao div parent.
     */
  }

  move() {
    /**
     * Chama a função de nome move, o objeto vai olhar a lista de behaviors e apenas irá executar se for capaz de usar este comportamento.
     */
    this.game.scene.getMainCharacter().call('move');
  }

  load (instance: number) {
    /**
     * Só pra mostrar que da pra carregar cada instância separadamente.
     */
    if (instance === 0) {
      this.game.buildWorld();
    } else if (instance === 1) {
      this.game1.buildWorld();
      this.game1.spawnObjects();
    } else if (instance === 2) {
      this.game2.buildWorld();
      this.game2.spawnObjects();
    }
  }

  loadObj (instance: number) {
    if (instance === 0) {
      this.game.spawnObjects();
    }
  }
}
