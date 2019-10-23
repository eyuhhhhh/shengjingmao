// TypeScript file
class Cat extends egret.Sprite {
    private mcF: egret.MovieClipDataFactory
    private mc: egret.MovieClip
    private bg: egret.MovieClip
    private bg2: egret.MovieClip
    private isnormal: boolean=true

    public constructor (){
        super()
        var data = RES.getRes("cat_normal_json")
        var texture = RES.getRes("cat_normal_png")
        this.bg = new  egret.MovieClip()
        this.mcF =new egret.MovieClipDataFactory( data , texture )
        this.mc = new egret.MovieClip(this.mcF.generateMovieClipData( "cat_normal" ))
        
        this.bg.movieClipData =this.mc.movieClipData
        

        data = RES.getRes("cat_loser_json")
        texture = RES.getRes("cat_loser_png")
        this.bg2 = new  egret.MovieClip()
        this.mcF =new egret.MovieClipDataFactory( data , texture )
        this.mc = new egret.MovieClip(this.mcF.generateMovieClipData( "cat_loser" ))
        
        this.bg2.movieClipData =this.mc.movieClipData
        
        this.playmc()
        
       
    }

    public init (){
        this.isnormal = true
        this.playmc()
    }
    private playmc(){
        if (this.numChildren){
            this.removeChildAt(0)
        }
        if(this.isnormal){
            this.bg.play(-1)
            this.addChild(this.bg)
        }else{
            this.bg2.play(-1)
            this.addChild(this.bg2)
        }
    }

    public get isnormalmc(): boolean{
        return this.isnormal
    }
    public set isnormalmc(val: boolean){
        if(this.isnormal !== val){
            this.isnormal = val
            this.playmc()
        }
    }
}