/**
 * Created by prashant on 19-02-2017.
 */
import {Component, OnInit} from '@angular/core'
import {Router} from '@angular/router'
import {Task} from '../task';
import {AppService} from "../app.service";

@Component({
    selector: 'createTask',
    templateUrl: './app/createTask/createTask.component.html',
    styleUrls: [''],
    providers : [AppService]
})
export class CreateTaskComponent implements OnInit{
    
    myTasks:Task[];
    showLink = false;

    constructor(private service: AppService) {
    }

    saveTask(date : string,title : string, desc : string, priority : string){
        this.service.tasks.push(new Task(date,title,desc,priority));
        this.myTasks = this.service.tasks;
        alert("Task Created");
    }

    showFormValues(){

        this.showLink = true;
        //
        // for(let i=0;i<this.myTasks.length;i++){
        //     alert("Date  :  " + this.service.tasks[i].date);
        //     alert("Tasks are :  " + this.service.tasks[i].title);
        //     alert("Tasks are :  " + this.service.tasks[i].desc);
        //     alert("Tasks are :  " + this.service.tasks[i].priority);
        //
        // }
        // //alert("date selected is "+this.formDate);
    }

    done(position : number){
        this.service.tasks.splice(position,1);
    }

    edit(){
        this.setCreateLink();
    }

    ngOnInit() {
        this.myTasks = this.service.tasks;
    }



    // goToLogin() {
    //     this.router.navigate(['login'])
    // }
    //
    // showTasks(){
    //     this.router.navigate(['tasks'])
    // }
    //
    // sendRouteParams() {
    //
    //     this.router.navigate(['details',3])
    // }
}
