var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
// TypeScript file
var CatAi = (function () {
    function CatAi() {
    }
    CatAi.prototype.findPath = function (from) {
        var currentNodeIndexs = [from];
        var usedNodeIndexs = [];
        var currentNodeIndex;
        var round;
        var len_round = 0;
        var rel = true;
        while (rel) {
            if (currentNodeIndexs.length == 0) {
                rel = false;
                return null;
            }
            var newIndexs = [];
            var l = currentNodeIndexs.length;
            for (var t = 0; t < l; t++) {
                currentNodeIndex = currentNodeIndexs.shift();
                round = this.findRound(currentNodeIndex);
                len_round = round.length;
                for (var i = 0; i < len_round; i++) {
                    if (this.map[round[i]]._isUsed) {
                        usedNodeIndexs.push(round[i]);
                    }
                    if (usedNodeIndexs.indexOf(round[i]) > -1 || currentNodeIndexs.indexOf(round[i]) > -1) {
                        continue;
                    }
                    this.map[round[i]].preIndex = currentNodeIndex;
                    if (this.isExit(round[i])) {
                        return round[i];
                    }
                    newIndexs.push(round[i]);
                }
                usedNodeIndexs.push(currentNodeIndex);
            }
            currentNodeIndexs = newIndexs;
        }
    };
    CatAi.prototype.findNextPoint = function (catIndex) {
        this.initMap();
        var nextIndex = this.findPath(catIndex);
        console.log(nextIndex);
        if (nextIndex == null) {
            return null;
        }
        if (nextIndex == -1) {
            return -1;
        }
        var rel = true;
        var preindex;
        while (rel) {
            preindex = this.map[nextIndex].preIndex;
            DataManage.instance().setberfore(preindex);
            if (preindex != catIndex && preindex != -1) {
                nextIndex = preindex;
            }
            else {
                rel = false;
            }
        }
        return nextIndex;
    };
    CatAi.prototype.isExit = function (index) {
        var p = Util.getPointByIndex(index);
        if (p.y == 0 || p.y == 8 || p.x == 0 || p.x == 8) {
            return true;
        }
        else {
            return false;
        }
    };
    CatAi.prototype.getNear = function (_catIndex) {
        var arr = this.findRound(_catIndex);
        return arr[0];
    };
    CatAi.prototype.initMap = function () {
        if (this.map == null) {
            this.map = [];
            for (var i = 0; i < 81; i++) {
                this.map.push(new CatNode());
            }
        }
        for (var i = 0; i < 81; i++) {
            this.map[i].clean();
            if (DataManage.instance().getStatusByIndex(i) == false) {
                this.map[i]._isUsed = true;
            }
        }
    };
    CatAi.prototype.findRound = function (index) {
        var arr = [];
        var p = Util.getPointByIndex(index);
        var row = p.y;
        var column = p.x;
        var left = column - 1;
        if (left >= 0 && this.map[Util.getIndexByPoint(new egret.Point(left, row))]._isUsed == false) {
            arr.push(Util.getIndexByPoint(new egret.Point(left, row)));
        }
        var right = column + 1;
        if (right <= 8 && this.map[Util.getIndexByPoint(new egret.Point(right, row))]._isUsed == false) {
            arr.push(Util.getIndexByPoint(new egret.Point(right, row)));
        }
        var top = row - 1;
        if (top >= 0 && this.map[Util.getIndexByPoint(new egret.Point(column, top))]._isUsed == false) {
            arr.push(Util.getIndexByPoint(new egret.Point(column, top)));
        }
        var bottom = row + 1;
        if (bottom <= 8 && this.map[Util.getIndexByPoint(new egret.Point(column, bottom))]._isUsed == false) {
            arr.push(Util.getIndexByPoint(new egret.Point(column, bottom)));
        }
        if (row % 2 != 0) {
            if (top >= 0 && right <= 8 && this.map[Util.getIndexByPoint(new egret.Point(right, top))]._isUsed == false) {
                arr.push(Util.getIndexByPoint(new egret.Point(right, top)));
            }
            if (bottom <= 8 && right <= 8 && this.map[Util.getIndexByPoint(new egret.Point(right, bottom))]._isUsed == false) {
                arr.push(Util.getIndexByPoint(new egret.Point(right, bottom)));
            }
        }
        else {
            if (top >= 0 && left >= 0 && this.map[Util.getIndexByPoint(new egret.Point(left, top))]._isUsed == false) {
                arr.push(Util.getIndexByPoint(new egret.Point(left, top)));
            }
            if (bottom <= 8 && left >= 0 && this.map[Util.getIndexByPoint(new egret.Point(left, bottom))]._isUsed == false) {
                arr.push(Util.getIndexByPoint(new egret.Point(left, bottom)));
            }
        }
        arr = arr.sort();
        return arr;
    };
    return CatAi;
}());
__reflect(CatAi.prototype, "CatAi");
