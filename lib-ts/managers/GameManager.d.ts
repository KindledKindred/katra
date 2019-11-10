import * as PIXI from "pixi.js";
import Scene from "scenes/Scene";
export default class GameManager {
    static instance: GameManager;
    game: PIXI.Application;
    private sceneTransitionOutFinished;
    private currentScene?;
    /**
     * コンストラクタ
     * PIXI.Application インスタンスはユーザー任意のものを使用
     */
    constructor(app: PIXI.Application);
    /**
     * ゲームを起動する
     * 画面サイズや PIXI.Application を渡す
     */
    static start(params: {
        glWidth: number;
        glHeight: number;
        option?: PIXI.ApplicationOptions;
    }): void;
    /**
     * 可能であれば新しいシーンへのトランジションを開始
     */
    static transitionInIfPossible(newScene: Scene): boolean;
    /**
     * シーンのロード
     * 新しいシーンと古いシーンのトランジションを同時に開始
     */
    static loadScene(newScene: Scene): void;
}
