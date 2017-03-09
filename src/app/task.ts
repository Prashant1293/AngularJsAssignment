export class Task{
    date : string;
    title : string;
    desc : string;
    priority : string;

    // constructor() {
    //     this.date = null;
    //     this.title = null;
    //     this.desc = null;
    //     this.priority = null;
    // }

    constructor(date: string,title:string,desc:string,priority:string){
        this.date = date;
        this.title = title;
        this.desc= desc;
        this.priority=priority;
    }
}