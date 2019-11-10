import Scene from "scenes/Scene";
export default class TestFirstScene extends Scene {
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
     * TestSecondSceneのロード
     */
    nextScene(): void;
}
