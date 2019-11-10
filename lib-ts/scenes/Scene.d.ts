import * as PIXI from "pixi.js";
export default abstract class Scene extends PIXI.Container {
    update(delta: number): void;
    protected registerUpdateingObject(): void;
    protected updateRegisteredObjects(delta: number): void;
    beginTransitionIn(onTransitionFinished: (scene: Scene) => void): void;
    beginTransitionOut(onTransitionFinished: (scene: Scene) => void): void;
}
