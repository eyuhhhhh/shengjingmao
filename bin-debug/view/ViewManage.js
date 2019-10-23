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
    function ViewManage(root, textures) {
        var _this = _super.call(this) || this;
        _this._tiles = [];
        _this._rootView = root;
        _this._textures = textures;
        _this._backGroundPanel = new BackGroundPanel(root, textures);
        _this._startGmaePanel = new StartGmaePanel(textures);
        _this._startGmaePanel.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onStarGameClick, _this);
        _this._gameOverPanelS = new GameOverPanelS(textures);
        _this._gameOverPanelF = new GameOverPanelF(textures);
        _this._gameOverButtonPanel = new GameOverButtonPanel(textures);
        _this._gameOverButtonPanel._reStartBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onResetGameClick, _this);
        _this.showStartGameView();
        return _this;
    }
    ViewManage.prototype.createCat = function () {
        this._cat = new Cat();
    };
    ViewManage.prototype.showStartGameView = function () {
        if (this._startGmaePanel) {
            this._rootView.addChild(this._startGmaePanel);
        }
    };
    ViewManage.prototype.onStarGameClick = function () {
        this._rootView.removeChild(this._startGmaePanel);
        this._startGmaePanel.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onStarGameClick, this);
        this.createTiles();
        this.showTile();
        this.createCat();
        var evt = new GameEvent(GameEvent.START_GAME);
        this.dispatchEvent(evt);
    };
    ViewManage.prototype.onResetGameClick = function () {
        if (this._gameOverPanelS.parent) {
            this._rootView.removeChild(this._gameOverPanelS);
            this._rootView.removeChild(this._gameOverButtonPanel._reStartBtn);
        }
        else {
            this._rootView.removeChild(this._gameOverButtonPanel._reStartBtn);
            this._rootView.removeChild(this._gameOverPanelF);
        }
        var evt = new GameEvent(GameEvent.START_GAME);
        this.dispatchEvent(evt);
    };
    ViewManage.prototype.createTiles = function () {
        var len = 81;
        for (var i = 0; i < len; i++) {
            var tile = new Tile(this._textures);
            tile.index = i;
            this._tiles.push(tile);
            tile.addEventListener(GameEvent.OPEN_TILE, this.onOpenTile, this);
        }
    };
    ViewManage.prototype.onOpenTile = function (evt) {
        this.dispatchEvent(evt);
    };
    ViewManage.prototype.showTile = function () {
        var len = 81;
        for (var i = 0; i < len; i++) {
            var p = Util.getPointXYByIndex(this._tiles[i].index);
            this._tiles[i].x = p.x;
            this._tiles[i].y = p.y;
            this._rootView.addChild(this._tiles[i]);
        }
    };
    ViewManage.prototype.updateAll = function () {
        var len = 81;
        for (var i = 0; i < len; i++) {
            if (DataManage.instance().getStatusByIndex(i)) {
                this._tiles[i].open();
            }
            else {
                this._tiles[i].close();
            }
        }
        if (this._cat.parent == null) {
            console.log("created cat");
            this._rootView.addChild(this._cat);
        }
        this._cat.init();
        this.update();
    };
    ViewManage.prototype.update = function () {
        var p = Util.getPointXYByIndex(DataManage.instance().getCatIndex());
        var c = DataManage.instance().getberfore();
        this._tiles[c].touchEnabled = true;
        this._cat.x = p.x;
        this._cat.y = p.y - 55;
        this._tiles[DataManage.instance().getCatIndex()].touchEnabled = false;
        this._cat.isnormalmc = DataManage.catIsmc;
    };
    ViewManage.prototype.showGameOverView = function (isS) {
        if (isS) {
            this._rootView.addChild(this._gameOverPanelS);
            var sound = RES.getRes("shengli_mp3");
            sound.play(0, 1).volume = 0.2;
        }
        else {
            this._rootView.addChild(this._gameOverPanelF);
            var sound = RES.getRes("shibai_mp3");
            sound.play(0, 1).volume = 0.2;
        }
        this._rootView.addChild(this._gameOverButtonPanel._reStartBtn);
    };
    return ViewManage;
}(egret.EventDispatcher));
__reflect(ViewManage.prototype, "ViewManage");
