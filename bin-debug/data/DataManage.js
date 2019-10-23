var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
// TypeScript file
var DataManage = (function () {
    function DataManage() {
        this.stepNum = 0;
        this._catDefaultIndex = 40;
        this._isS = false;
        this.before = this._catDefaultIndex;
        this.tileNum = 81;
        this._tileDatas = [];
        this._catIndex = 0;
        if (!DataManage._isInit) {
            throw (new Error("Error!"));
        }
        this._catAI = new CatAi();
        this.createDate();
    }
    DataManage.prototype.setberfore = function (num) {
        this.before = num;
    };
    DataManage.prototype.getberfore = function () {
        return this.before;
    };
    DataManage.instance = function () {
        if (!DataManage._dataManage) {
            DataManage._isInit = true;
            DataManage._dataManage = new DataManage();
            DataManage._isInit = false;
        }
        return DataManage._dataManage;
    };
    DataManage.prototype.createDate = function () {
        for (var i = 0; i < this.tileNum; i++) {
            this._tileDatas.push(true);
        }
    };
    DataManage.prototype.init_tileDatas = function () {
        this._catDefaultIndex = 40;
        DataManage.catIsmc = true;
        for (var i = 0; i < this.tileNum; i++) {
            this._tileDatas[i] = true;
        }
    };
    DataManage.prototype.selectTile = function () {
        var num = Math.floor((Math.random() * 5 + 20));
        for (var i = 0; i < num; i++) {
            var index = Math.floor(Math.random() * this.tileNum);
            this._tileDatas[index] = false;
        }
        this._tileDatas[40] = true;
    };
    DataManage.prototype.closeTileByIndex = function (index) {
        this._tileDatas[index] = false;
    };
    DataManage.prototype.getStatusByIndex = function (index) {
        return this._tileDatas[index];
    };
    DataManage.prototype.createCatPoint = function () {
        this._catIndex = 40;
    };
    DataManage.prototype.getCatIndex = function () {
        return this._catIndex;
    };
    DataManage.prototype.isHaveNextPointByCat = function () {
        if (this._catAI.isExit(this._catIndex)) {
            this._isS = false;
            return false;
        }
        var nextPointIndex = this._catAI.findNextPoint(this._catIndex);
        console.log(nextPointIndex);
        if (nextPointIndex == null) {
            DataManage.catIsmc = false;
            DataManage.instance().setberfore(this._catIndex);
            this._catIndex = this._catAI.getNear(this._catIndex);
            if (this._catIndex) {
                return true;
            }
            this._isS = true;
            return false;
        }
        this._catIndex = nextPointIndex;
        return true;
    };
    DataManage._isInit = false;
    DataManage.catIsmc = true;
    return DataManage;
}());
__reflect(DataManage.prototype, "DataManage");
