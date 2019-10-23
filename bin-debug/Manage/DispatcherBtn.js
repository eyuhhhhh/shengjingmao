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
var DispactherBtn = (function (_super) {
    __extends(DispactherBtn, _super);
    function DispactherBtn(root) {
        var _this = _super.call(this) || this;
        _this.suduf = new egret.TextField();
        _this.sudul = new egret.TextField();
        _this.suduf.width = 80;
        _this.suduf.height = 40;
        _this.sudul.width = 80;
        _this.sudul.height = 40;
        _this.suduf.text = "加速";
        _this.sudul.text = "减速";
        _this.suduf.x = 550;
        _this.suduf.y = 700;
        _this.sudul.x = 550;
        _this.sudul.y = 800;
        _this.suduf.touchEnabled = true;
        _this.sudul.touchEnabled = true;
        root.addChild(_this.suduf);
        root.addChild(_this.sudul);
        _this.suduf.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onclickjiasu, _this);
        _this.sudul.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onclickjiansu, _this);
        return _this;
    }
    DispactherBtn.prototype.onclickjiasu = function () {
        console.log(this);
        var fasong = new SuduEvent(SuduEvent.JIASU);
        if (Manage.init().step > 300) {
            fasong.step = Manage.init().step = Manage.init().step - 100;
        }
        else {
            fasong.step = 200;
        }
        this.dispatchEvent(fasong);
    };
    DispactherBtn.prototype.onclickjiansu = function () {
        var fasong = new SuduEvent(SuduEvent.JIANSU);
        if (Manage.init().step < 1500) {
            fasong.step = Manage.init().step = Manage.init().step + 100;
        }
        else {
            fasong.step = 1500;
        }
        this.dispatchEvent(fasong);
    };
    return DispactherBtn;
}(egret.EventDispatcher));
__reflect(DispactherBtn.prototype, "DispactherBtn");
