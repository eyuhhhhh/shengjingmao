// TypeScript file
class SuduEvent extends egret.Event{
    public static JIASU: string = "jiasu"
    public static JIANSU: string = "jiansu"
    public step: number 
    public constructor(type: string, bubbles: boolean = false,cancelable:boolean=false){
        super(type,bubbles,cancelable)
    }
}