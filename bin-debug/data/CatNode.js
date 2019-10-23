var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
// TypeScript file
var CatNode = (function () {
    function CatNode() {
        this.preIndex = -1;
        this._isUsed = false;
    }
    CatNode.prototype.clean = function () {
        this._isUsed = false;
        this.preIndex = -1;
    };
    return CatNode;
}());
__reflect(CatNode.prototype, "CatNode");
