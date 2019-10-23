// TypeScript file
class Manage {
    constructor(){
        if(Manage.is){
            this.create()
        }
        
    }
    private static is: boolean = false
    private static obj: Manage
    public  area = new Array()
    public  cur
    public  areatiles = new Array()
    public step: number = 500
    
    public jianceL(){

         

        var len = this.cur.arr.length
       
        for(let i=0;i<len;i++){
            
            if(this.cur.arr[i].tiley > -1 && (this.cur.arr[i].tilex == 0  ||  this.area[this.cur.arr[i].tiley][this.cur.arr[i].tilex - 1]==1)) {
                return false
            }
            
        }
        for(var i=0;i<len;i++){
            if(this.cur.arr[i].tilex   <= 0){
                return false
            }
        }
        
        return true
    }
    public jianceR(){
        var len = this.cur.arr.length
        
        
        for(let i=0;i<len;i++){
            if(this.cur.arr[i].tiley > -1 && (this.cur.arr[i].tilex ==9 || this.area[this.cur.arr[i].tiley][this.cur.arr[i].tilex +1]==1)){
                return false
            }
            
        }



        for(var i=0;i<len;i++){
            
            if(this.cur.arr[i].tilex + 1 >= 10){
                return false
            }
        }
        
        return true
    }
    private  create(){
          for(var i = 0;i<24;i++){0
            this.area[i] = new Array()
            this.areatiles[i] = new Array()
            for(let t = 0; t < 10 ; t++){
                this.area[i][t] = 0
                this.areatiles[i][t] = 0
            }
            
        }
      
    }
     

    public static init(): Manage{
        
        if(!Manage.obj){
            Manage.is = true
             Manage.obj = new Manage()
             Manage.is = false
             return Manage.obj
        }else{
            return Manage.obj
        }
    }
   public isrotate: boolean
  
    public rotate(){
         
        this.jiancerotate()
        
        var newarr = new Array()
        var q =  this.cur.boxarr
         var d = q.length 
     
 
        for(let i=0;i<q.length;i++){
            newarr[i] = new Array()
            for(let t=0;t<q.length;t++){
                d--
                
                newarr[i][t] = q[d][i]
            }
            d=q.length 
        }
        this.cur.boxarr = newarr
       if(this.isrotate){
           this.shuaxin()
       }
        
       
    }
    public cope = []
    public shuaxin(){
            
        
        var p = 0
        var c = this.cur.boxarr
      
        for(let i=0;i<c.length;i++){
            for(let t = 0 ;t<c[i].length;t++){
                if(c[i][t] !==0){
                                 
                    this.cur.arr[p].tilex = this.cur.row + t
                    this.cur.arr[p].tiley = this.cur.col + i   
                    p += 1
                    console.log(p)
                }
            }   
        }
        
         if(this.isrotate){
            for(let d=0;d<this.cur.arr.length;d++){
                        this.cur.arr[d].tile.x = this.cur.arr[d].tilex*40
                        this.cur.arr[d].tile.y = this.cur.arr[d].tiley*40
                    }
        }
         
        
    }

    private jiancerotate() {
        
        let newarr = new Array()
        let q =  this.cur.boxarr.slice(0)
         let d = q.length 
     
 
        for(let i=0;i<q.length;i++){
            newarr[i] = new Array()
            for(let t=0;t<q.length;t++){
                d--
                
                newarr[i][t] = q[d][i]
            }
            d=q.length 
        }
      
       

      
       let X = []
        let Y = []
        let c = newarr
        this.cope.splice(0,this.cope.length)
        for(let i=0;i<c.length;i++){
            for(let t = 0 ;t<c[i].length;t++){
                if(c[i][t] !==0){
                    
                    X.push((this.cur.row + t)*40)
                    Y.push((this.cur.col + i)*40)
                   
                    this.cope.push({
                        tilex:this.cur.row + t,
                        tiley:this.cur.col + i
                    })
                   
                }
            }   
        }

// && this.cope[i].tilex >0 && this.cope[i].tilex <10 && 

         var len = this.cope.length
         
        for(let i=0;i<len;i++){
           
            if(this.cope[i].tilex < 0 || this.cope[i].tilex >9  || this.cope[i].tiley <0 && this.cope[i].tiley >23){
                this.isrotate = false
                return
            }else if(this.area[this.cope[i].tiley][this.cope[i].tilex ]==1){
                this.isrotate = false
                return
            }
            
        }
        this.isrotate = true
    }


    public xiaochu(){
        console.log(this.area)
        var  istrue: boolean 
        for(let i=0;i<this.areatiles.length;i++){
            istrue = false
            if(this.areatiles[i].indexOf(0) == -1){
                for(let t=0;t<10;t++){
                    if(this.areatiles[i][t].parent){
                        this.areatiles[i][t].parent.removeChild(this.areatiles[i][t])
                        istrue = true
                    }
                }
                /*let o = i
                for(o;o>0;o--){
                    this.area[o] = this.area[o - 1]
                    this.areatiles[o] = this.areatiles[o - 1]
                }*/
                var arrar = [0,0,0,0,0,0,0,0,0,0]
                this.area.splice(i,1)
                this.area.unshift(arrar)
                this.areatiles.splice(i,1)
                this.areatiles.unshift(arrar)
              console.log(this.area)
            }
            if(istrue){
                var u = i
                 for(u;u>=0;u--){
                     for(let t=0;t<10;t++){
                        if(this.areatiles[u][t] !== 0){
                            this.areatiles[u][t].y += 40
                        
                        }
                    }
                 }
            }
             
         }
    }

public jiancexia() {
        var len = Manage.init().cur.arr.length
        for(var i=0;i<len;i++){   
            if(Manage.init().cur.arr[i].tiley > -1 && (Manage.init().cur.arr[i].tiley == 23 || Manage.init().area[Manage.init().cur.arr[i].tiley + 1][Manage.init().cur.arr[i].tilex] == 1 ) ){
                return false
            }
        }
        return true
    }
 public hecheng() {
        var x,y;
        for(let i=0;i<this.cur.arr.length;i++){
            x = this.cur.arr[i].tilex
            y = this.cur.arr[i].tiley
             
            if(y> 0 && Manage.init().area[y][x] == 0 ){
                Manage.init().area[y][x] = 1    
                Manage.init().areatiles[y][x] = this.cur.arr[i].tile    
            }
            
           
        }
      
        
    }

public isOver(){
    for(let i=0;i<this.cur.arr.length;i++){
        if(this.cur.arr[i].tiley<0){
            return false
        }
    }
    return true
}


 


























}