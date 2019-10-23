// TypeScript file
class GameOverPanelF extends egret.Sprite{
    public constructor ( textures: egret.SpriteSheet ){
        super()

        var gameOverPanelF: egret.Bitmap = new egret.Bitmap();
        gameOverPanelF.texture = textures.getTexture("end_tip_fail")
        this.addChild(gameOverPanelF)
        this.width = 448;
        this.height = 361;
        this.x = (egret.MainContext.instance.stage.stageWidth - this.width) / 2
        this.y = (egret.MainContext.instance.stage.stageHeight - this.height) / 2

        var text = new egret.TextField()
        text.text = '你失败了!'
        text.size = 50
        text.bold = true
        text.y = 20
        text.textColor = 0xffffff
        text.stroke = 3
        text.strokeColor = 0x0000ff
        text.width = 448
        text.height = 361
        text.verticalAlign = egret.VerticalAlign.MIDDLE
        text.textAlign = egret.HorizontalAlign.CENTER
        
        this.addChild(text)
    }
}