import * as PIXI from 'pixi.js'
import Transition from 'interfaces/Transition'
import Immediate from 'scenes/transition/Immediate'

export default abstract class Scene extends PIXI.Container {
  /**
   * シーン開始用のトランジションオブジェクト
   */
  protected transitionIn:  Transition = new Immediate()
  /**
   * シーン終了用のトランジションオブジェクト
   */
  protected transitionOut: Transition = new Immediate()

  /**
   * メインループ
   * @param delta 経過フレーム
   */
  public update(delta: number): void {
    this.updateRegisteredObjects(delta)
  }

  /**
   * メインループで更新するオブジェクトの登録
   */
  protected registerUpdateingObject(/** object: object */): void {}

  /**
   * 登録されたオブジェクトのフレーム更新
   * @param delta 経過フレーム
   */
  protected updateRegisteredObjects(delta: number): void {
    delta
  }

  /**
   * シーン追加トランジション開始
   * @param onTransitionFinished トランジション終了時のコールバック
   */
  public beginTransitionIn(onTransitionFinished: (scene: Scene) => void): void {
    this.transitionIn.setCallback(() => onTransitionFinished(this))

    const container = this.transitionIn.getContainer()
    if (container) {
      this.addChild(container)
    }

    this.transitionIn.begin()
  }

  /**
   * シーン削除トランジション開始
   * @param onTransitionFinished トランジション終了時のコールバック
   */
  public beginTransitionOut(
    onTransitionFinished: (scene: Scene) => void
  ): void {
    this.transitionIn.setCallback(() => onTransitionFinished(this))

    const container = this.transitionIn.getContainer()
    if (container) {
      this.addChild(container)
    }

    this.transitionIn.begin()
  }
}
