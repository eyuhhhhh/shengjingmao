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
var BackGroundPanel = (function (_super) {
    __extends(BackGroundPanel, _super);
    function BackGroundPanel(root, textures) {
        var _this = _super.call(this) || this;
        _this.texture = textures.getTexture("bg");
        root.addChild(_this);
        return _this;
    }
    return BackGroundPanel;
}(egret.Bitmap));
__reflect(BackGroundPanel.prototype, "BackGroundPanel");
