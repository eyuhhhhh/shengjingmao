// TypeScript file
class DataManage {

    private static _isInit: boolean = false;
    public stepNum: number = 0;
    private _catDefaultIndex: number = 40;
    public _isS: boolean=false;
    public static catIsmc: boolean = true;
    private _catAI: CatAi;
    private before: number = this._catDefaultIndex

    public setberfore(num){
        this.before = num
    }
    public getberfore(): number{
        return this.before
    }
    
    public constructor(){
        if(!DataManage._isInit){
            throw(new Error("Error!"))
        }
        this._catAI = new CatAi();
        this.createDate()
    }
    private static _dataManage: DataManage;
    public static instance(){
        if(!DataManage._dataManage){
            DataManage._isInit = true;
            DataManage._dataManage = new DataManage();
            DataManage._isInit = false
        }
        return DataManage._dataManage;
    }

    private tileNum: number = 81;
    private _tileDatas: Array<boolean> = [];

    private createDate(){
        for(var i= 0;i<this.tileNum;i++){
            this._tileDatas.push(true)
        }
    }

    public init_tileDatas(){
        this._catDefaultIndex = 40;
        DataManage.catIsmc = true;
        for(var i= 0;i<this.tileNum;i++){
            this._tileDatas[i]  =  true 
        }
    }

    public selectTile() {
        var num: number = Math.floor((Math.random()*5+20));
        for(var i= 0;i<num;i++){
             var index:number = Math.floor(Math.random()*this.tileNum);
             this._tileDatas[index] = false
        }
        this._tileDatas[40] = true;
    }

    public closeTileByIndex(index: number){
        this._tileDatas[index] = false
    }

    public getStatusByIndex(index: number): boolean{
        return this._tileDatas[index]
    }

    private _catIndex:number = 0;
    public createCatPoint(){
        this._catIndex = 40;
    }

    public getCatIndex():number{
        return this._catIndex
    }

    public isHaveNextPointByCat(): boolean{
        if(this._catAI.isExit(this._catIndex)){
            this._isS = false;
            return false
        }
        var nextPointIndex: number = this._catAI.findNextPoint(this._catIndex);
        console.log(nextPointIndex)
        if(nextPointIndex == null){
            DataManage.catIsmc = false;
            DataManage.instance().setberfore(this._catIndex)
            this._catIndex = this._catAI.getNear(this._catIndex);
            if(this._catIndex){
                return true
            }
            this._isS = true;
            return false;
        }
        
        this._catIndex = nextPointIndex;
        return true
    }


}