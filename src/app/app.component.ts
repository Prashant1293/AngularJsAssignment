import { Component, OnInit } from '@angular/core';
import {Intern} from "./intern";
import {AppService} from "./app.service";

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  providers : [AppService]
})
export class AppComponent implements OnInit{
  name = 'Angular';
  color: string = 'red';
  intern: Intern = new Intern();
  myInterns: Intern[];
  formDate: Date[]=[];
  formTitle: string[]=[];
  formDescription: string[]=[];
  formPriority: string[]=[];

  constructor(private service: AppService) {}

  ngOnInit() {
    this.myInterns = this.service.interns;
  }

  clickMe(param: string) {
    alert(param)
  }

  submit() {
    alert(JSON.stringify(this.intern.id))
  }
  showFormValues(){
    alert("priority selected is "+this.formPriority);
    alert("date selected is "+this.formDate);

  }

  getFormValues(date:Date,title:string,desc:string,priority:string){
    this.formDate.push(date);
    this.formTitle.push(title);
    this.formDescription.push(desc);
    this.formPriority.push(priority);
    alert("hello Dude"+date+" "+title+" "+priority+" "+desc);
    //showFormValues()

  }
  
}
