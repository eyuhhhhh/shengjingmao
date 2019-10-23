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
var Cat = (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        var _this = _super.call(this) || this;
        _this.isnormal = true;
        var data = RES.getRes("cat_normal_json");
        var texture = RES.getRes("cat_normal_png");
        _this.bg = new egret.MovieClip();
        _this.mcF = new egret.MovieClipDataFactory(data, texture);
        _this.mc = new egret.MovieClip(_this.mcF.generateMovieClipData("cat_normal"));
        _this.bg.movieClipData = _this.mc.movieClipData;
        data = RES.getRes("cat_loser_json");
        texture = RES.getRes("cat_loser_png");
        _this.bg2 = new egret.MovieClip();
        _this.mcF = new egret.MovieClipDataFactory(data, texture);
        _this.mc = new egret.MovieClip(_this.mcF.generateMovieClipData("cat_loser"));
        _this.bg2.movieClipData = _this.mc.movieClipData;
        _this.playmc();
        return _this;
    }
    Cat.prototype.init = function () {
        this.isnormal = true;
        this.playmc();
    };
    Cat.prototype.playmc = function () {
        if (this.numChildren) {
            this.removeChildAt(0);
        }
        if (this.isnormal) {
            this.bg.play(-1);
            this.addChild(this.bg);
        }
        else {
            this.bg2.play(-1);
            this.addChild(this.bg2);
        }
    };
    Object.defineProperty(Cat.prototype, "isnormalmc", {
        get: function () {
            return this.isnormal;
        },
        set: function (val) {
            if (this.isnormal !== val) {
                this.isnormal = val;
                this.playmc();
            }
        },
        enumerable: true,
        configurable: true
    });
    return Cat;
}(egret.Sprite));
__reflect(Cat.prototype, "Cat");
