import Scene from "scenes/Scene";
export default class TestSecondScene extends Scene {
    private text;
    private count;
    /**
     * コンストラクタ
     * 描画物を初期化
     */
    constructor();
    /**
     * メインループ
     */
    update(dt: number): void;
    /**
     * TestFirstSceneのロード
     */
    nextScene(): void;
}
