// TypeScript file
class ViewManage extends egret.Sprite{
    public clear
    public tiles: Tile
    constructor(root){
        super()
        this.graphics.beginFill(0x999999,0.5)
        this.graphics.drawRect(0,0,400,960)
        this.graphics.endFill()
        this.width = 400
        this.height = 960
        this.tiles = new Tile()
        this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onclick,this)
        
        this.touchEnabled = true
        var sudubtn = new DispactherBtn(root)
        sudubtn.addEventListener(SuduEvent.JIASU,jiansu,this)
        sudubtn.addEventListener(SuduEvent.JIANSU,jiansu,this)
        
        this.addChild(this.tiles)
        this.clear = setInterval(start,600,this)
        
        function jiansu(e: SuduEvent){
            console.log(e.step)
            clearInterval(this.clear)
                    
            this.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onclick,this)
            
            
           this.clear = setInterval(start,e.step,this,this.tiles)
        }
        
        function start(view,tiles) {
        
         
            let res = Manage.init().jiancexia()
          
            if(res){
                let len = Manage.init().cur.arr.length
                for(let i =0;i<len ;i++){
                    
                    Manage.init().cur.arr[i].tile.y += 40
                }
                Manage.init().cur.col++
                Manage.init().cur.arr.forEach((item)=>item.tiley +=1)
            }else{
                
                
                Manage.init().hecheng()
                Manage.init().xiaochu()
                if(!Manage.init().isOver()){
                    clearInterval(view.clear)
                    
                    view.removeEventListener(egret.TouchEvent.TOUCH_TAP,view.onclick,view)
                    document.removeEventListener("keydown",tiles.move)
                    var gameover = new GameOver()
                    view.addChild(gameover)
                    gameover.text.addEventListener(egret.TouchEvent.TOUCH_TAP,resetgame,view)
                    return 
                }
               
                let newtiles: Tile = new Tile()
                
                view.addChild(newtiles)
            
            }
            function resetgame(){
                this.removeChildren()
                this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onclick,this)
                Manage.init().area = new Array()
                Manage.init().areatiles = new Array()
                this.sudubtn.step11 = 500
                for(var i = 0;i<24;i++){0
                    Manage.init().area[i] = new Array()
                    Manage.init().areatiles[i] = new Array()
                    for(let t = 0; t < 10 ; t++){
                        Manage.init().area[i][t] = 0
                        Manage.init().areatiles[i][t] = 0
                    }
                }
                let newtiles: Tile = new Tile()
                this.addChild(newtiles)
                this.clear = setInterval(start,500,this,newtiles)
                
            }
        }
        

    }
    
     

    private onclick() {
      
        Manage.init().rotate()
        
    }
  
}
