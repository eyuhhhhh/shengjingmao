// TypeScript file
class GameOver extends egret.DisplayObjectContainer{
    public text: egret.TextField
    constructor(){
        super()
       this.text = new egret.TextField()
        this.text.text = "再来一局"
        this.text.size = 50
        this.text.width = 300
        this.text.height = 150
        this.text.textAlign = egret.HorizontalAlign.CENTER
        this.text.verticalAlign = egret.VerticalAlign.MIDDLE
        this.text.touchEnabled = true
        this.addChild(this.text)
        this.x = 50
        this.y = 400
    }
}