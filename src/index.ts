import * as PIXI from "pixi.js";
import GameManager from "managers/GameManager";
import TestFirstScene from "scenes/TestFirstScene";

/**
 * ゲームの初期化処理
 */
function initGame() {
  const width = 1136;
  const height = 640;
  const pixiAppOption: PIXI.ApplicationOptions = {
    backgroundColor: 0x222222
  };

  GameManager.start({
    glWidth: width,
    glHeight: height,
    option: pixiAppOption
  });
  // 最初のシーンの読み込み
  GameManager.loadScene(new TestFirstScene());
}

window.onload = () => {
  initGame();
};
