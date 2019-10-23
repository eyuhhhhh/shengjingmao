// TypeScript file
class GameOverPanelS extends egret.Sprite{
    public constructor ( textures: egret.SpriteSheet ){
        super()

        var gameOverPanelS: egret.Bitmap = new egret.Bitmap();
        gameOverPanelS.texture = textures.getTexture("end_tip_success")
        this.addChild(gameOverPanelS)
        this.width = 448;
        this.height = 338;
        this.x = (egret.MainContext.instance.stage.stageWidth - this.width) / 2
        this.y = (egret.MainContext.instance.stage.stageHeight - this.height) / 2

         var tx = new egret.TextField();
         tx.text = "你成功了"
         tx.width = 448
         tx.height = 338
         tx.textColor = 0xffffff
         tx.size = 60
         tx.y = 20
         tx.bold = true
         tx.stroke = 4
         tx.strokeColor = 0x000000
         tx.textAlign =egret.HorizontalAlign.CENTER
         tx.verticalAlign = egret.VerticalAlign.MIDDLE
         this.addChild(tx)
    }
   

}