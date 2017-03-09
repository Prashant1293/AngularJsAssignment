import { Component, OnInit } from '@angular/core';
//import {Intern} from "./intern";
import {Task} from "./task";

import {AppService} from "./app.service";

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  providers : [AppService]
})
export class AppComponent implements OnInit{
  // name = 'Angular';
  // color: string = 'red';
  // intern: Intern = new Intern();
  
  tasks : Task[] ;
  
  // myInterns: Intern[];
  // formDate: Date[]=[];
  // formTitle: string[]=[];
  // formDescription: string[]=[];
  // formPriority: string[]=[];
  

  constructor(private service: AppService) {}

  ngOnInit() {
    //this.myInterns = this.service.interns;
    this.tasks = this.service.tasks;
  }

  // clickMe(param: string) {
  //   alert(param)
  // }

  // submit() {
  //   alert(JSON.stringify(this.intern.id))
  // }
  
  //  showFormValues(){
  //   alert("Tasks are :  "+this.service.tasks(0));
  //   //alert("date selected is "+this.formDate);
  //
  // }

  // saveTask(date:Date,title : string, desc : string, priority : string){
  //   this.service.tasks.push(new Task(date,title,desc,priority));
  //   this.tasks = this.service.tasks;
  //   alert("Task Created");
  // }

  showValues() {
    

}
  
}
