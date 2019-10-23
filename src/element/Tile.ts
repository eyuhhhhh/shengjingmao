// TypeScript file
class Tile extends egret.Sprite{
    public index: number =0;
    private _redSkin:egret.Bitmap;
    private _blackSkin:egret.Bitmap;

    public constructor(textures:egret.SpriteSheet){
        super();
        this._redSkin = new egret.Bitmap();
        this._redSkin.texture = textures.getTexture("grid_yellow");
        this._blackSkin = new egret.Bitmap();
        this._blackSkin.texture = textures.getTexture("grid_white");

        this._blackSkin.width = 50;
        this._blackSkin.height = 50;
        this._redSkin.width = 50;
        this._redSkin.height = 50;
        this.touchEnabled = true;

        this.addChild(this._blackSkin);

        this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onclick,this)

    }

    private _isOpen :boolean =true;

    public getStatus():boolean{
        return this._isOpen;
    }

    public open(){
        if(!this._isOpen){
            this._isOpen = true;
            this.removeChild(this._redSkin);
            this.addChild(this._blackSkin)
        }
    }

    public close(){
        if(this._isOpen){
            this._isOpen = false;
            this.removeChild(this._blackSkin);
            this.addChild(this._redSkin)
        }
    }

    public onclick(){
        var sound: egret.Sound = RES.getRes("click1_mp3")
        sound.play(0,1).volume = 1
        if(this._isOpen){
            var evt:GameEvent = new GameEvent(GameEvent.OPEN_TILE);
            evt.opren_tile_index = this.index;
            this.dispatchEvent(evt)
            
        }
        this.close()
    }
}