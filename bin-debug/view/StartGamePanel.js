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
var StartGmaePanel = (function (_super) {
    __extends(StartGmaePanel, _super);
    function StartGmaePanel(textures) {
        var _this = _super.call(this) || this;
        var bmp = new egret.Bitmap();
        bmp.texture = textures.getTexture("cat_start_bg");
        var bmp2 = new egret.Bitmap();
        bmp2.texture = textures.getTexture("btn_start");
        _this.width = 400;
        _this.height = 500;
        bmp2.touchEnabled = true;
        bmp2.x = 100;
        bmp2.y = 500;
        _this.x = (egret.MainContext.instance.stage.stageWidth - _this.width) / 2;
        _this.y = (egret.MainContext.instance.stage.stageHeight - _this.height) / 2;
        _this.addChild(bmp);
        _this.addChild(bmp2);
        return _this;
    }
    return StartGmaePanel;
}(egret.Sprite));
__reflect(StartGmaePanel.prototype, "StartGmaePanel");
