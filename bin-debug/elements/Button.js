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
var Button = (function (_super) {
    __extends(Button, _super);
    function Button() {
        var _this = _super.call(this) || this;
        var lbtn = new egret.Shape();
        var rbtn = new egret.Shape();
        var mbtn = new egret.Shape();
        lbtn.graphics.beginFill(0xffff00, 0.7);
        lbtn.graphics.drawRect(0, 0, 110, 100);
        lbtn.graphics.endFill();
        rbtn.graphics.beginFill(0xffff00, 0.7);
        rbtn.graphics.drawRect(0, 0, 110, 100);
        rbtn.graphics.endFill();
        mbtn.graphics.beginFill(0xffff00, 0.7);
        mbtn.graphics.drawCircle(0, 0, 65);
        mbtn.graphics.endFill();
        lbtn.x = 70;
        lbtn.y = 1000;
        mbtn.x = 310;
        mbtn.y = 1050;
        rbtn.x = 450;
        rbtn.y = 1000;
        lbtn.touchEnabled = true;
        rbtn.touchEnabled = true;
        mbtn.touchEnabled = true;
        lbtn.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.LL, _this);
        rbtn.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.RR, _this);
        mbtn.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.rotate, _this);
        _this.addChild(lbtn);
        _this.addChild(rbtn);
        _this.addChild(mbtn);
        return _this;
    }
    Button.prototype.RR = function () {
        var cur = Manage.init().cur;
        var len = cur.arr.length;
        if (Manage.init().jianceR()) {
            cur.row++;
            for (var i = 0; i < len; i++) {
                cur.arr[i].tile.x += 40;
            }
            cur.arr.forEach(function (item) { return item.tilex += 1; });
        }
    };
    Button.prototype.LL = function () {
        var cur = Manage.init().cur;
        var len = cur.arr.length;
        if (Manage.init().jianceL()) {
            cur.row--;
            for (var i = 0; i < len; i++) {
                cur.arr[i].tile.x -= 40;
            }
            cur.arr.forEach(function (item) { return item.tilex -= 1; });
        }
    };
    Button.prototype.rotate = function () {
        Manage.init().rotate();
    };
    return Button;
}(egret.Sprite));
__reflect(Button.prototype, "Button");
