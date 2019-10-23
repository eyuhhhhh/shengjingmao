// TypeScript file
class Tile extends egret.Sprite{
    constructor (){
        super()
        
        this.create()
        
        document.addEventListener("keydown",this.move)
        
    }
   
    private box ={
          row : 4,
          col : -3,
          arr : [],
          
          boxarr: []
      }
   
    

    private create() {
        
        
      
      
        let tiles = {
            j : [
                [0,1,0],
                [0,1,0],
                [1,1,0]
              
            ],
            o : [
                [1,1],
                [1,1]
            ],
            l : [
                [0,1,0,0],
                [0,1,0,0],
                [0,1,0,0],
                [0,1,0,0]
            ],
            t : [
                [1,1,1],
                [0,1,0],
                [0,0,0],
            ],
            z : [
                [1,1,0],
                [0,1,1],
                [0,0,0],
            ],
            m:[
                [0,1,0],
                [0,1,0],
                [0,1,1],
            ],
            r:[
                [0,1,1],
                [1,1,0],
                [0,0,0],
            ]
        }
        var jol = "joltzmr"
        var index = Math.floor(Math.random()*7)
        var c = tiles[jol[index]]
        this.box.boxarr = c
       
       
        for(let i=0;i<c.length;i++){
            for(let t = 0 ;t<c[i].length;t++){
                if(c[i][t] !==0){
                    let tile = new egret.Shape();
                    tile.graphics.beginFill(0x0000ff)
                    tile.graphics.drawRect(0,0,40,40)
                    tile.graphics.endFill()
                    tile.width = 40
                    tile.height = 40
                    tile.x = (this.box.row + t)*40
                    tile.y = (this.box.col + i)*40
                    this.addChild(tile)
                    
                    this.box.arr.push({
                        tile: tile,
                        tilex:this.box.row + t,
                        tiley:this.box.col + i
                    })
                    
                }
            }   
        }
        Manage.init().cur = this.box
        

    }
    
   

    public move(e){
        
        switch(e.keyCode){
            
            case 39: R(); break;
            case 37: L(); break;
            case 32: Manage.init().rotate();break;
        }
        function R(){
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
        function L(){
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
       
    }




}