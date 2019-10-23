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
var GameOver = (function (_super) {
    __extends(GameOver, _super);
    function GameOver() {
        var _this = _super.call(this) || this;
        _this.text = new egret.TextField();
        _this.text.text = "再来一局";
        _this.text.size = 50;
        _this.text.width = 300;
        _this.text.height = 150;
        _this.text.textAlign = egret.HorizontalAlign.CENTER;
        _this.text.verticalAlign = egret.VerticalAlign.MIDDLE;
        _this.text.touchEnabled = true;
        _this.addChild(_this.text);
        _this.x = 50;
        _this.y = 400;
        return _this;
    }
    return GameOver;
}(egret.DisplayObjectContainer));
__reflect(GameOver.prototype, "GameOver");
