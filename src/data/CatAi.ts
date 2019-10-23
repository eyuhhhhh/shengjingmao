// TypeScript file
class CatAi {
    public constructor(){
        
    }

    public findPath(from: number): number{
        var currentNodeIndexs: number[] = [from];
        var usedNodeIndexs: number[] = [];
        var currentNodeIndex: number;
        var round: number[];
        var len_round: number = 0;
        var rel: boolean = true;
        
        while (rel){
            if(currentNodeIndexs.length ==0){
                rel =false;
                return null;
            }
            var newIndexs: Array<number> = [];
            var l: number = currentNodeIndexs.length;
            for(var t: number = 0;t <l; t++){
                currentNodeIndex = currentNodeIndexs.shift();
                round = this.findRound(currentNodeIndex);
                len_round =round.length;
                
                for( let i: number = 0; i < len_round ;i++ ){
                    if( this.map[round[i]]._isUsed ){
                        usedNodeIndexs.push(round[i])
                    }
                    if( usedNodeIndexs.indexOf(round[i]) >-1 || currentNodeIndexs.indexOf(round[i]) > -1 ){
                        continue;
                    }
                    
                    this.map[round[i]].preIndex = currentNodeIndex;
                    
                    if( this.isExit( round[i]) ){
                        
                        return round[i];
                    }
                    newIndexs.push(round[i]);
                    
                }
                
                usedNodeIndexs.push(currentNodeIndex)
            }
            currentNodeIndexs = newIndexs;
        } 
    }


    public findNextPoint(catIndex: number):number{
        this.initMap();
        var nextIndex: number = this.findPath(catIndex);
        console.log(nextIndex)
        if(nextIndex == null){
            return null;
        }
        if(nextIndex == -1){
            return -1
        }
        var rel: boolean=true;
        var preindex: number;
        while (rel){
            preindex = this.map[nextIndex].preIndex;
            DataManage.instance().setberfore(preindex)
            if(preindex !=catIndex && preindex != -1){
                
                nextIndex = preindex
            } 
            else{
                rel =false
            }
        }
        
        return nextIndex;
        
    }

    public isExit(index: number):boolean{
        var p: egret.Point = Util.getPointByIndex(index);
        if(p.y ==0 || p.y==8 || p.x==0 || p.x==8){
            return true
        }else{
            return false
        }
    }

    public getNear (_catIndex: number): number{
        var arr: number[] = this.findRound(_catIndex);
        return arr[0]
    }

    public map: Array<CatNode>;
    private initMap(){
        if(this.map == null ){
            this.map = [];
            for( var i=0;i<81;i++){
                this.map.push(new CatNode())
            }
        }
        for( var i=0;i<81;i++){
                this.map[i].clean();
                if(DataManage.instance().getStatusByIndex(i) == false){
                    this.map[i]._isUsed = true;
                }
            }
    }

    public findRound(index: number):number[]{
        var arr: number[] = [];
        
        var p: egret.Point = Util.getPointByIndex(index);
        
        var row = p.y;
        var column = p.x;

        var left: number = column - 1;
        if( left >= 0 && this.map[Util.getIndexByPoint(new egret.Point( left , row))]._isUsed == false){
            arr.push(Util.getIndexByPoint(new egret.Point( left , row)))
        }
        var right: number = column + 1;
        if( right <=8 && this.map[Util.getIndexByPoint(new egret.Point( right , row))]._isUsed == false ){
            arr.push(Util.getIndexByPoint(new egret.Point( right , row)))
        }
        var top: number = row - 1;
        if(top >=0 && this.map[Util.getIndexByPoint(new egret.Point( column , top))]._isUsed == false){
            arr.push(Util.getIndexByPoint(new egret.Point( column , top)))
        }
        var bottom: number = row + 1;
        if(bottom <=8 && this.map[Util.getIndexByPoint(new egret.Point( column , bottom))]._isUsed == false){
            arr.push(Util.getIndexByPoint(new egret.Point( column , bottom)))
        }

        if(row%2 !=0){
            if( top >=0 && right <=8 && this.map[Util.getIndexByPoint(new egret.Point( right , top))]._isUsed == false){
                arr.push(Util.getIndexByPoint(new egret.Point( right , top)))
            }
            if( bottom <=8 && right <=8 &&this.map[Util.getIndexByPoint(new egret.Point( right , bottom))]._isUsed ==false ){
                arr.push(Util.getIndexByPoint(new egret.Point( right , bottom)))
            }
        }else{
            if( top >=0 && left >=0 && this.map[Util.getIndexByPoint(new egret.Point( left , top))]._isUsed == false ){
                arr.push(Util.getIndexByPoint(new egret.Point( left , top)))
            }
            if( bottom <=8 && left >=0 && this.map[Util.getIndexByPoint(new egret.Point( left , bottom))]._isUsed ==false){
                arr.push(Util.getIndexByPoint(new egret.Point( left , bottom)))
            }
        }
        
        arr = arr.sort()
        return arr
    }
}