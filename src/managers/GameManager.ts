import * as PIXI from 'pixi.js'
import Scene from 'scenes/Scene'

export default class GameManager {
  // シングルトンインスタンス
  public static instance: GameManager

  // 初期化時に生成
  public game!: PIXI.Application

  // シーンのトランジション完了フラグ
  private sceneTransitionOutFinished: boolean = true

  // 現在のシーンインスタンス
  private currentScene?: Scene

  /**
   * コンストラクタ
   * PIXI.Application インスタンスはユーザー任意のものを使用
   */
  constructor(app: PIXI.Application) {
    if (GameManager.instance) {
      throw new Error('GameManager can be instantiate only once')
    }

    this.game = app
  }

  /**
   * ゲームを起動する
   * 画面サイズや PIXI.Application を渡す
   */
  public static start(params: {
    glWidth: number;
    glHeight: number;
    option?: PIXI.ApplicationOptions;
  }): void {
    // PIXI.Application 生成
    const game = new PIXI.Application(
      params.glWidth,
      params.glHeight,
      params.option
    )
    // GameManager インスタンス生成
    const instance = new GameManager(game)
    GameManager.instance = instance

    // canvas を DOM に追加
    document.body.appendChild(game.view)

    // メインループ
    game.ticker.add((delta: number) => {
      if (instance.currentScene) {
        instance.currentScene.update(delta)
      }
    })
  }

  /**
   * 可能であれば新しいシーンへのトランジションを開始
   */
  public static transitionInIfPossible(newScene: Scene): boolean {
    const instance = GameManager.instance

    if (!instance.sceneTransitionOutFinished) {
      return false
    }

    if (instance.currentScene) {
      instance.currentScene.destroy()
    }
    instance.currentScene = newScene

    if (instance.game) {
      instance.game.stage.addChild(newScene)
    }

    newScene.beginTransitionIn((_: Scene) => {})

    return true
  }

  /**
   * シーンのロード
   * 新しいシーンと古いシーンのトランジションを同時に開始
   */
  public static loadScene(newScene: Scene): void {
    const instance = GameManager.instance

    if (instance.currentScene) {
      instance.sceneTransitionOutFinished = false
      instance.currentScene.beginTransitionOut((_: Scene) => {
        instance.sceneTransitionOutFinished = true
        GameManager.transitionInIfPossible(newScene)
      })
    } else {
      instance.sceneTransitionOutFinished = true
      GameManager.transitionInIfPossible(newScene)
    }
  }
}
