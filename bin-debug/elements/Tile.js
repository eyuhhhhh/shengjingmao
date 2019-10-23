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
    function Tile() {
        var _this = _super.call(this) || this;
        _this.box = {
            row: 4,
            col: -3,
            arr: [],
            boxarr: []
        };
        _this.create();
        document.addEventListener("keydown", _this.move);
        return _this;
    }
    Tile.prototype.create = function () {
        var tiles = {
            j: [
                [0, 1, 0],
                [0, 1, 0],
                [1, 1, 0]
            ],
            o: [
                [1, 1],
                [1, 1]
            ],
            l: [
                [0, 1, 0, 0],
                [0, 1, 0, 0],
                [0, 1, 0, 0],
                [0, 1, 0, 0]
            ],
            t: [
                [1, 1, 1],
                [0, 1, 0],
                [0, 0, 0],
            ],
            z: [
                [1, 1, 0],
                [0, 1, 1],
                [0, 0, 0],
            ],
            m: [
                [0, 1, 0],
                [0, 1, 0],
                [0, 1, 1],
            ],
            r: [
                [0, 1, 1],
                [1, 1, 0],
                [0, 0, 0],
            ]
        };
        var jol = "joltzmr";
        var index = Math.floor(Math.random() * 7);
        var c = tiles[jol[index]];
        this.box.boxarr = c;
        for (var i = 0; i < c.length; i++) {
            for (var t = 0; t < c[i].length; t++) {
                if (c[i][t] !== 0) {
                    var tile = new egret.Shape();
                    tile.graphics.beginFill(0x0000ff);
                    tile.graphics.drawRect(0, 0, 40, 40);
                    tile.graphics.endFill();
                    tile.width = 40;
                    tile.height = 40;
                    tile.x = (this.box.row + t) * 40;
                    tile.y = (this.box.col + i) * 40;
                    this.addChild(tile);
                    this.box.arr.push({
                        tile: tile,
                        tilex: this.box.row + t,
                        tiley: this.box.col + i
                    });
                }
            }
        }
        Manage.init().cur = this.box;
    };
    Tile.prototype.move = function (e) {
        switch (e.keyCode) {
            case 39:
                R();
                break;
            case 37:
                L();
                break;
            case 32:
                Manage.init().rotate();
                break;
        }
        function R() {
            var cur = Manage.init().cur;
            var len = cur.arr.length;
            if (Manage.init().jianceR()) {
                cur.row++;
                for (var i = 0; i < len; i++) {
                    cur.arr[i].tile.x += 40;
                }
                cur.arr.forEach(function (item) { return item.tilex += 1; });
            }
        }
        function L() {
            var cur = Manage.init().cur;
            var len = cur.arr.length;
            if (Manage.init().jianceL()) {
                cur.row--;
                for (var i = 0; i < len; i++) {
                    cur.arr[i].tile.x -= 40;
                }
                cur.arr.forEach(function (item) { return item.tilex -= 1; });
            }
        }
    };
    return Tile;
}(egret.Sprite));
__reflect(Tile.prototype, "Tile");
