var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
// TypeScript file
var Manage = (function () {
    function Manage() {
        this.area = new Array();
        this.areatiles = new Array();
        this.step = 500;
        this.cope = [];
        if (Manage.is) {
            this.create();
        }
    }
    Manage.prototype.jianceL = function () {
        var len = this.cur.arr.length;
        for (var i_1 = 0; i_1 < len; i_1++) {
            if (this.cur.arr[i_1].tiley > -1 && (this.cur.arr[i_1].tilex == 0 || this.area[this.cur.arr[i_1].tiley][this.cur.arr[i_1].tilex - 1] == 1)) {
                return false;
            }
        }
        for (var i = 0; i < len; i++) {
            if (this.cur.arr[i].tilex <= 0) {
                return false;
            }
        }
        return true;
    };
    Manage.prototype.jianceR = function () {
        var len = this.cur.arr.length;
        for (var i_2 = 0; i_2 < len; i_2++) {
            if (this.cur.arr[i_2].tiley > -1 && (this.cur.arr[i_2].tilex == 9 || this.area[this.cur.arr[i_2].tiley][this.cur.arr[i_2].tilex + 1] == 1)) {
                return false;
            }
        }
        for (var i = 0; i < len; i++) {
            if (this.cur.arr[i].tilex + 1 >= 10) {
                return false;
            }
        }
        return true;
    };
    Manage.prototype.create = function () {
        for (var i = 0; i < 24; i++) {
            0;
            this.area[i] = new Array();
            this.areatiles[i] = new Array();
            for (var t = 0; t < 10; t++) {
                this.area[i][t] = 0;
                this.areatiles[i][t] = 0;
            }
        }
    };
    Manage.init = function () {
        if (!Manage.obj) {
            Manage.is = true;
            Manage.obj = new Manage();
            Manage.is = false;
            return Manage.obj;
        }
        else {
            return Manage.obj;
        }
    };
    Manage.prototype.rotate = function () {
        this.jiancerotate();
        var newarr = new Array();
        var q = this.cur.boxarr;
        var d = q.length;
        for (var i = 0; i < q.length; i++) {
            newarr[i] = new Array();
            for (var t = 0; t < q.length; t++) {
                d--;
                newarr[i][t] = q[d][i];
            }
            d = q.length;
        }
        this.cur.boxarr = newarr;
        if (this.isrotate) {
            this.shuaxin();
        }
    };
    Manage.prototype.shuaxin = function () {
        var p = 0;
        var c = this.cur.boxarr;
        for (var i = 0; i < c.length; i++) {
            for (var t = 0; t < c[i].length; t++) {
                if (c[i][t] !== 0) {
                    this.cur.arr[p].tilex = this.cur.row + t;
                    this.cur.arr[p].tiley = this.cur.col + i;
                    p += 1;
                    console.log(p);
                }
            }
        }
        if (this.isrotate) {
            for (var d = 0; d < this.cur.arr.length; d++) {
                this.cur.arr[d].tile.x = this.cur.arr[d].tilex * 40;
                this.cur.arr[d].tile.y = this.cur.arr[d].tiley * 40;
            }
        }
    };
    Manage.prototype.jiancerotate = function () {
        var newarr = new Array();
        var q = this.cur.boxarr.slice(0);
        var d = q.length;
        for (var i = 0; i < q.length; i++) {
            newarr[i] = new Array();
            for (var t = 0; t < q.length; t++) {
                d--;
                newarr[i][t] = q[d][i];
            }
            d = q.length;
        }
        var X = [];
        var Y = [];
        var c = newarr;
        this.cope.splice(0, this.cope.length);
        for (var i = 0; i < c.length; i++) {
            for (var t = 0; t < c[i].length; t++) {
                if (c[i][t] !== 0) {
                    X.push((this.cur.row + t) * 40);
                    Y.push((this.cur.col + i) * 40);
                    this.cope.push({
                        tilex: this.cur.row + t,
                        tiley: this.cur.col + i
                    });
                }
            }
        }
        // && this.cope[i].tilex >0 && this.cope[i].tilex <10 && 
        var len = this.cope.length;
        for (var i = 0; i < len; i++) {
            if (this.cope[i].tilex < 0 || this.cope[i].tilex > 9 || this.cope[i].tiley < 0 && this.cope[i].tiley > 23) {
                this.isrotate = false;
                return;
            }
            else if (this.area[this.cope[i].tiley][this.cope[i].tilex] == 1) {
                this.isrotate = false;
                return;
            }
        }
        this.isrotate = true;
    };
    Manage.prototype.xiaochu = function () {
        console.log(this.area);
        var istrue;
        for (var i = 0; i < this.areatiles.length; i++) {
            istrue = false;
            if (this.areatiles[i].indexOf(0) == -1) {
                for (var t = 0; t < 10; t++) {
                    if (this.areatiles[i][t].parent) {
                        this.areatiles[i][t].parent.removeChild(this.areatiles[i][t]);
                        istrue = true;
                    }
                }
                /*let o = i
                for(o;o>0;o--){
                    this.area[o] = this.area[o - 1]
                    this.areatiles[o] = this.areatiles[o - 1]
                }*/
                var arrar = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                this.area.splice(i, 1);
                this.area.unshift(arrar);
                this.areatiles.splice(i, 1);
                this.areatiles.unshift(arrar);
                console.log(this.area);
            }
            if (istrue) {
                var u = i;
                for (u; u >= 0; u--) {
                    for (var t = 0; t < 10; t++) {
                        if (this.areatiles[u][t] !== 0) {
                            this.areatiles[u][t].y += 40;
                        }
                    }
                }
            }
        }
    };
    Manage.prototype.jiancexia = function () {
        var len = Manage.init().cur.arr.length;
        for (var i = 0; i < len; i++) {
            if (Manage.init().cur.arr[i].tiley > -1 && (Manage.init().cur.arr[i].tiley == 23 || Manage.init().area[Manage.init().cur.arr[i].tiley + 1][Manage.init().cur.arr[i].tilex] == 1)) {
                return false;
            }
        }
        return true;
    };
    Manage.prototype.hecheng = function () {
        var x, y;
        for (var i = 0; i < this.cur.arr.length; i++) {
            x = this.cur.arr[i].tilex;
            y = this.cur.arr[i].tiley;
            if (y > 0 && Manage.init().area[y][x] == 0) {
                Manage.init().area[y][x] = 1;
                Manage.init().areatiles[y][x] = this.cur.arr[i].tile;
            }
        }
    };
    Manage.prototype.isOver = function () {
        for (var i = 0; i < this.cur.arr.length; i++) {
            if (this.cur.arr[i].tiley < 0) {
                return false;
            }
        }
        return true;
    };
    Manage.is = false;
    return Manage;
}());
__reflect(Manage.prototype, "Manage");
