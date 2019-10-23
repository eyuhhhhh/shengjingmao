// TypeScript file
class ViewManage extends egret.EventDispatcher {

    private _rootView: egret.DisplayObjectContainer
    private _textures: egret.SpriteSheet

    private _backGroundPanel: BackGroundPanel;
    private _startGmaePanel: StartGmaePanel;
    private _gameOverPanelS: GameOverPanelS;
    private _gameOverPanelF: GameOverPanelF;
    private _gameOverButtonPanel: GameOverButtonPanel;

    public constructor( root: egret.DisplayObjectContainer,textures: egret.SpriteSheet ){
        super()
        this._rootView = root
        this._textures = textures
        
        this._backGroundPanel = new BackGroundPanel(root,textures)
        this._startGmaePanel = new StartGmaePanel(textures)
        this._startGmaePanel.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onStarGameClick,this)
        this._gameOverPanelS = new GameOverPanelS(textures)
        this._gameOverPanelF = new GameOverPanelF(textures)
        this._gameOverButtonPanel = new GameOverButtonPanel(textures)
        this._gameOverButtonPanel._reStartBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onResetGameClick,this)
        this.showStartGameView()
        
        
    }

    private _cat: Cat;
    private createCat(){
        this._cat = new Cat();
    }

    private showStartGameView(){
        if(this._startGmaePanel){
            this._rootView.addChild(this._startGmaePanel)
        }
    }

    private onStarGameClick(){
        this._rootView.removeChild(this._startGmaePanel);
        this._startGmaePanel.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onStarGameClick,this)
        this.createTiles()
        this.showTile()
        
        this.createCat()
        var evt :GameEvent = new GameEvent(GameEvent.START_GAME);
        this.dispatchEvent(evt)
    }

    private onResetGameClick(){
        if(this._gameOverPanelS.parent){
            this._rootView.removeChild(this._gameOverPanelS)
            this._rootView.removeChild(this._gameOverButtonPanel._reStartBtn)
        }else{
            this._rootView.removeChild(this._gameOverButtonPanel._reStartBtn)
            this._rootView.removeChild(this._gameOverPanelF)
        }
        
        var evt :GameEvent = new GameEvent(GameEvent.START_GAME);
        this.dispatchEvent(evt)
    }

    private _tiles: any[] = [];
    private createTiles(){
        var len:number = 81;
        
        for (var i:number=0;i < len;i++){
            var tile: Tile = new Tile(this._textures);
            tile.index = i;
            this._tiles.push(tile)
            tile.addEventListener(GameEvent.OPEN_TILE,this.onOpenTile,this)
        } 
    }
    private onOpenTile(evt: GameEvent){
        this.dispatchEvent(evt);
    }

    private showTile() {
        var len:number = 81;
        for(var i: number=0;i<len;i++){
            var p: egret.Point = Util.getPointXYByIndex(this._tiles[i].index);
            this._tiles[i].x= p.x;
            this._tiles[i].y= p.y;
            this._rootView.addChild(this._tiles[i])
        }
    }

    public updateAll(){
        var len: number=81;
        for(var i=0;i<len;i++){
            if(DataManage.instance().getStatusByIndex(i)){
                this._tiles[i].open();
            }
            else{
                this._tiles[i].close();
            }
        }
        if(this._cat.parent ==null){
            console.log("created cat")
            this._rootView.addChild(this._cat)
        }
        this._cat.init();
        this.update()
    }

    public update(){
        var p: egret.Point = Util.getPointXYByIndex(DataManage.instance().getCatIndex());
        
        var c =DataManage.instance().getberfore()
        this._tiles[c].touchEnabled = true
        this._cat.x = p.x ;
        this._cat.y = p.y -55;
        this._tiles[DataManage.instance().getCatIndex()].touchEnabled = false
        this._cat.isnormalmc = DataManage.catIsmc;
        
    }
    public showGameOverView(isS:boolean){
        if(isS){
            this._rootView.addChild(this._gameOverPanelS)
            var sound: egret.Sound = RES.getRes("shengli_mp3")
            sound.play(0,1).volume = 0.2
        }else{
            this._rootView.addChild(this._gameOverPanelF)
            var sound: egret.Sound = RES.getRes("shibai_mp3")
            sound.play(0,1).volume = 0.2
        }
        this._rootView.addChild(this._gameOverButtonPanel._reStartBtn)
        
    }

}