// TypeScript file
class DispactherBtn extends egret.EventDispatcher{
    public suduf
    public sudul
    
    constructor(root){
        super()
        this.suduf = new egret.TextField()
        this.sudul = new egret.TextField()
        this.suduf.width = 80
        this.suduf.height = 40
        this.sudul.width = 80
        this.sudul.height = 40
        this.suduf.text = "加速"
        this.sudul.text = "减速"
        this.suduf.x = 550
        this.suduf.y = 700
        this.sudul.x = 550
        this.sudul.y = 800
        this.suduf.touchEnabled = true
        this.sudul.touchEnabled = true
        root.addChild(this.suduf)
        root.addChild(this.sudul)
        this.suduf.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onclickjiasu,this)
        this.sudul.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onclickjiansu,this)
    }
      public onclickjiasu(){
            console.log(this)
            let fasong = new SuduEvent(SuduEvent.JIASU)
            if(Manage.init().step>300){
                fasong.step = Manage.init().step = Manage.init().step - 100
            }else{
                fasong.step = 200
            }
            
            
            this.dispatchEvent(fasong)
        }
        public onclickjiansu(){
            let fasong = new SuduEvent(SuduEvent.JIANSU)
            if(Manage.init().step<1500){
                fasong.step = Manage.init().step = Manage.init().step + 100
            }else{
                fasong.step = 1500
            }
            
            
            this.dispatchEvent(fasong)
        }
}