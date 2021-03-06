import * as PIXI from "pixi.js";
import Scene from "scenes/Scene";
import GameManager from "managers/GameManager";
import TestFirstScene from "scenes/TestFirstScene";

export default class TestSecondScene extends Scene {
  private text!: PIXI.Text;

  // メインループ更新確認用
  private count: number = 0;

  /**
   * コンストラクタ
   * 描画物を初期化
   */
  constructor() {
    super();

    const renderer = GameManager.instance.game.renderer;

    this.text = new PIXI.Text(
      "first scene",
      new PIXI.TextStyle({
        fontSize: 64,
        fill: 0xffffff
      })
    );

    this.text.interactive = true;
    this.text.anchor.set(0.5, 0.5);
    this.text.position.set(renderer.width * 0.5, renderer.height * 0.5);
    this.text.on("pointerdown", this.nextScene);
    this.addChild(this.text);
  }

  /**
   * メインループ
   */
  public update(dt: number): void {
    super.update(dt);
    this.text.text = `second scene \n${this.count--}`;
  }

  /**
   * TestFirstSceneのロード
   */
  public nextScene(): void {
    GameManager.loadScene(new TestFirstScene());
  }
}
