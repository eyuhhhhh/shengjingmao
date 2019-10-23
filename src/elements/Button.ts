// TypeScript file
class Button extends egret.Sprite{
  
    constructor(){
        super()
        var lbtn = new egret.Shape()
        var  rbtn = new egret.Shape()
        var  mbtn = new egret.Shape()
        lbtn.graphics.beginFill(0xffff00,0.7)
        lbtn.graphics.drawRect(0,0,110,100)
        lbtn.graphics.endFill()
        rbtn.graphics.beginFill(0xffff00,0.7)
        rbtn.graphics.drawRect(0,0,110,100)
        rbtn.graphics.endFill()
        mbtn.graphics.beginFill(0xffff00,0.7)
        mbtn.graphics.drawCircle(0,0,65)
        mbtn.graphics.endFill()
        lbtn.x = 70
        lbtn.y = 1000
        mbtn.x = 310
        mbtn.y = 1050
        rbtn.x = 450
        rbtn.y = 1000
        lbtn.touchEnabled = true
        rbtn.touchEnabled = true
        mbtn.touchEnabled = true
        lbtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.LL,this)
        rbtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.RR,this)
        mbtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.rotate,this)
        this.addChild(lbtn)
        this.addChild(rbtn)
        this.addChild(mbtn)
     
        
    }
      
    public RR(){
            var cur = Manage.init().cur
            
            
            var len = cur.arr.length
            
            if(Manage.init().jianceR()){
                cur.row++
                for(let i =0;i<len ;i++){
                    cur.arr[i].tile.x += 40
                    
                }
                cur.arr.forEach((item)=>item.tilex += 1)
            }
            
           
        }
        public LL(){
            var cur = Manage.init().cur
            
            var len = cur.arr.length
            
            if(Manage.init().jianceL()){
                cur.row--
                for(let i =0;i<len ;i++){
                    cur.arr[i].tile.x -= 40
                    
                    }
                cur.arr.forEach((item)=>item.tilex -= 1)
            }
            
        }
        public rotate(){
            Manage.init().rotate()
        }
      
}