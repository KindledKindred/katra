/**
 * 更新処理が行われるオブジェクトのインターフェース
 */
export default interface UpdateObject {
    isDestroyed(): boolean;
    update(_dt: number): void;
}
