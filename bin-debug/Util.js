var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
// TypeScript file
var Util = (function () {
    function Util() {
    }
    Util.getPointByIndex = function (index) {
        var point = new egret.Point();
        point.x = index % 9;
        point.y = Math.floor(index / 9);
        return point;
    };
    Util.getPointXYByIndex = function (index) {
        var point = new egret.Point();
        var space = 0;
        if (Math.floor(index / 9) % 2 == 1) {
            space = 25;
        }
        point.x = 100 + 50 * (index % 9) + space;
        point.y = 500 + 50 * Math.floor(index / 9);
        return point;
    };
    Util.getIndexByPoint = function (p) {
        var index = p.y * 9 + p.x;
        return index;
    };
    return Util;
}());
__reflect(Util.prototype, "Util");
