class Student
{
    private _studentRollno:number;
    private _studentName:string; 
    private _studentMailid:string;  
    private _studentPercentage:number  
    private static _schoolName:string;  
    private static _schoolAddress:string;

    constructor(rollNo:number,name:string, mailId:string, percentage:number){
        this._studentRollno = rollNo
        this._studentName = name
        this._studentMailid = mailId
        this._studentPercentage = percentage
    }

    public printStudentDetails():void{
        console.log(this._studentRollno);
        console.log(this._studentName);
        console.log(this._studentMailid);
        console.log(this._studentPercentage);
        console.log(Student._schoolName)
        console.log(Student._schoolAddress)
    }

    
}