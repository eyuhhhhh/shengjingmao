// TypeScript file
class CatNode{
    public preIndex: number = -1;
    public _isUsed: boolean = false;
    public clean(){
        this._isUsed = false;
        this.preIndex = -1;
    }
}