import * as PIXI from "pixi.js";

export default abstract class Scene extends PIXI.Container {
  // メインループ
  public update(delta: number): void {
    this.updateRegisteredObjects(delta);
  }

  // メインループで更新するオブジェクトの登録
  protected registerUpdateingObject(/** object: object */): void {}

  // 登録されたオブジェクトのフレーム更新
  protected updateRegisteredObjects(delta: number): void {
    delta;
  }

  // シーン開始トランジション
  public beginTransitionIn(onTransitionFinished: (scene: Scene) => void): void {
    onTransitionFinished(this);
  }

  // シーン終了トランジション
  public beginTransitionOut(
    onTransitionFinished: (scene: Scene) => void
  ): void {
    onTransitionFinished(this);
  }
}
