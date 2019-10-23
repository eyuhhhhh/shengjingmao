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
var ViewManage = (function (_super) {
    __extends(ViewManage, _super);
    function ViewManage(root) {
        var _this = _super.call(this) || this;
        _this.graphics.beginFill(0x999999, 0.5);
        _this.graphics.drawRect(0, 0, 400, 960);
        _this.graphics.endFill();
        _this.width = 400;
        _this.height = 960;
        _this.tiles = new Tile();
        _this.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onclick, _this);
        _this.touchEnabled = true;
        var sudubtn = new DispactherBtn(root);
        sudubtn.addEventListener(SuduEvent.JIASU, jiansu, _this);
        sudubtn.addEventListener(SuduEvent.JIANSU, jiansu, _this);
        _this.addChild(_this.tiles);
        _this.clear = setInterval(start, 600, _this);
        function jiansu(e) {
            console.log(e.step);
            clearInterval(this.clear);
            this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onclick, this);
            this.clear = setInterval(start, e.step, this);
        }
        function start(view) {
            var res = Manage.init().jiancexia();
            if (res) {
                var len = Manage.init().cur.arr.length;
                for (var i = 0; i < len; i++) {
                    Manage.init().cur.arr[i].tile.y += 40;
                }
                Manage.init().cur.col++;
                Manage.init().cur.arr.forEach(function (item) { return item.tiley += 1; });
            }
            else {
                Manage.init().hecheng();
                Manage.init().xiaochu();
                if (!Manage.init().isOver()) {
                    clearInterval(view.clear);
                    view.removeEventListener(egret.TouchEvent.TOUCH_TAP, view.onclick, view);
                    document.removeEventListener("keydown", view.tiles.move);
                    var gameover = new GameOver();
                    view.addChild(gameover);
                    gameover.text.addEventListener(egret.TouchEvent.TOUCH_TAP, resetgame, view);
                    return;
                }
                var newtiles = new Tile();
                view.addChild(newtiles);
            }
            function resetgame() {
                this.removeChildren();
                this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onclick, this);
                Manage.init().area = new Array();
                Manage.init().areatiles = new Array();
                this.sudubtn.step11 = 500;
                for (var i = 0; i < 24; i++) {
                    0;
                    Manage.init().area[i] = new Array();
                    Manage.init().areatiles[i] = new Array();
                    for (var t = 0; t < 10; t++) {
                        Manage.init().area[i][t] = 0;
                        Manage.init().areatiles[i][t] = 0;
                    }
                }
                var newtiles = new Tile();
                this.addChild(newtiles);
                this.clear = setInterval(start, 600, this, newtiles);
            }
        }
        return _this;
    }
    ViewManage.prototype.onclick = function () {
        Manage.init().rotate();
    };
    return ViewManage;
}(egret.Sprite));
__reflect(ViewManage.prototype, "ViewManage");
