// TypeScript file
class GameOverButtonPanel extends egret.Sprite {
    public _reStartBtn: egret.Sprite

    public constructor ( textures: egret.SpriteSheet ) {
        super()

        this._reStartBtn = new egret.Sprite()
        this._reStartBtn.width=200
        this._reStartBtn.height = 103
        var bitmap: egret.Bitmap = new egret.Bitmap();
        bitmap.texture = textures.getTexture("btn_replay")
        this._reStartBtn.addChild(bitmap)
        this._reStartBtn.touchEnabled = true
        this.addChild(this._reStartBtn)
        
        this._reStartBtn.x = (egret.MainContext.instance.stage.stageWidth - this.width) / 2
        this._reStartBtn.y = egret.MainContext.instance.stage.stageHeight - 500
    }
}