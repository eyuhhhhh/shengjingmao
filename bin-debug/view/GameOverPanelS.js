var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
// TypeScript file
var GameOverPanelS = (function (_super) {
    __extends(GameOverPanelS, _super);
    function GameOverPanelS(textures) {
        var _this = _super.call(this) || this;
        var gameOverPanelS = new egret.Bitmap();
        gameOverPanelS.texture = textures.getTexture("end_tip_success");
        _this.addChild(gameOverPanelS);
        _this.width = 448;
        _this.height = 338;
        _this.x = (egret.MainContext.instance.stage.stageWidth - _this.width) / 2;
        _this.y = (egret.MainContext.instance.stage.stageHeight - _this.height) / 2;
        var tx = new egret.TextField();
        tx.text = "你成功了";
        tx.width = 448;
        tx.height = 338;
        tx.textColor = 0xffffff;
        tx.size = 60;
        tx.y = 20;
        tx.bold = true;
        tx.stroke = 4;
        tx.strokeColor = 0x000000;
        tx.textAlign = egret.HorizontalAlign.CENTER;
        tx.verticalAlign = egret.VerticalAlign.MIDDLE;
        _this.addChild(tx);
        return _this;
    }
    return GameOverPanelS;
}(egret.Sprite));
__reflect(GameOverPanelS.prototype, "GameOverPanelS");
