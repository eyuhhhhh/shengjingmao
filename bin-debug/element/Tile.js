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
var Tile = (function (_super) {
    __extends(Tile, _super);
    function Tile(textures) {
        var _this = _super.call(this) || this;
        _this.index = 0;
        _this._isOpen = true;
        _this._redSkin = new egret.Bitmap();
        _this._redSkin.texture = textures.getTexture("grid_yellow");
        _this._blackSkin = new egret.Bitmap();
        _this._blackSkin.texture = textures.getTexture("grid_white");
        _this._blackSkin.width = 50;
        _this._blackSkin.height = 50;
        _this._redSkin.width = 50;
        _this._redSkin.height = 50;
        _this.touchEnabled = true;
        _this.addChild(_this._blackSkin);
        _this.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onclick, _this);
        return _this;
    }
    Tile.prototype.getStatus = function () {
        return this._isOpen;
    };
    Tile.prototype.open = function () {
        if (!this._isOpen) {
            this._isOpen = true;
            this.removeChild(this._redSkin);
            this.addChild(this._blackSkin);
        }
    };
    Tile.prototype.close = function () {
        if (this._isOpen) {
            this._isOpen = false;
            this.removeChild(this._blackSkin);
            this.addChild(this._redSkin);
        }
    };
    Tile.prototype.onclick = function () {
        var sound = RES.getRes("click1_mp3");
        sound.play(0, 1).volume = 1;
        if (this._isOpen) {
            var evt = new GameEvent(GameEvent.OPEN_TILE);
            evt.opren_tile_index = this.index;
            this.dispatchEvent(evt);
        }
        this.close();
    };
    return Tile;
}(egret.Sprite));
__reflect(Tile.prototype, "Tile");
