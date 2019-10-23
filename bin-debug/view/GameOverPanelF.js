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
var GameOverPanelF = (function (_super) {
    __extends(GameOverPanelF, _super);
    function GameOverPanelF(textures) {
        var _this = _super.call(this) || this;
        var gameOverPanelF = new egret.Bitmap();
        gameOverPanelF.texture = textures.getTexture("end_tip_fail");
        _this.addChild(gameOverPanelF);
        _this.width = 448;
        _this.height = 361;
        _this.x = (egret.MainContext.instance.stage.stageWidth - _this.width) / 2;
        _this.y = (egret.MainContext.instance.stage.stageHeight - _this.height) / 2;
        var text = new egret.TextField();
        text.text = '你失败了!';
        text.size = 50;
        text.bold = true;
        text.y = 20;
        text.textColor = 0xffffff;
        text.stroke = 3;
        text.strokeColor = 0x0000ff;
        text.width = 448;
        text.height = 361;
        text.verticalAlign = egret.VerticalAlign.MIDDLE;
        text.textAlign = egret.HorizontalAlign.CENTER;
        _this.addChild(text);
        return _this;
    }
    return GameOverPanelF;
}(egret.Sprite));
__reflect(GameOverPanelF.prototype, "GameOverPanelF");
