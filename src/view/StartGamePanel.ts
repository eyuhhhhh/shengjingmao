// TypeScript file
class StartGmaePanel extends egret.Sprite {
    public constructor ( textures: egret.SpriteSheet ){
        super()

        var bmp: egret.Bitmap = new egret.Bitmap();
        bmp.texture = textures.getTexture("cat_start_bg")
        var bmp2: egret.Bitmap = new egret.Bitmap();
        bmp2.texture = textures.getTexture("btn_start")
        this.width = 400
        this.height = 500
        bmp2.touchEnabled = true
        bmp2.x = 100
        bmp2.y = 500
        this.x = (egret.MainContext.instance.stage.stageWidth - this.width) / 2
        this.y = (egret.MainContext.instance.stage.stageHeight - this.height) / 2
        this.addChild(bmp)
        this.addChild(bmp2)
    }
}