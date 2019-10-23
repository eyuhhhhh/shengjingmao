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
var GameOverButtonPanel = (function (_super) {
    __extends(GameOverButtonPanel, _super);
    function GameOverButtonPanel(textures) {
        var _this = _super.call(this) || this;
        _this._reStartBtn = new egret.Sprite();
        _this._reStartBtn.width = 200;
        _this._reStartBtn.height = 103;
        var bitmap = new egret.Bitmap();
        bitmap.texture = textures.getTexture("btn_replay");
        _this._reStartBtn.addChild(bitmap);
        _this._reStartBtn.touchEnabled = true;
        _this.addChild(_this._reStartBtn);
        _this._reStartBtn.x = (egret.MainContext.instance.stage.stageWidth - _this.width) / 2;
        _this._reStartBtn.y = egret.MainContext.instance.stage.stageHeight - 500;
        return _this;
    }
    return GameOverButtonPanel;
}(egret.Sprite));
__reflect(GameOverButtonPanel.prototype, "GameOverButtonPanel");
