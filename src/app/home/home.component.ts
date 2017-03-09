import {Component, OnInit} from '@angular/core'
import {Router} from '@angular/router'
import {Task} from '../task';
import {AppService} from "../app.service";


@Component({
  selector: 'home',
  templateUrl: './app/home/home.component.html',
  styleUrls: [''],
  providers : [AppService]
})
export class HomeComponent implements  OnInit{

  myTasks : Task[];
  showLink = false;

  ngOnInit(){
    this.myTasks = this.service.tasks;
  }

  constructor(private service: AppService) {}
  
  update() {
    this.myTasks = this.service.tasks;
    this.showLink = true;
  }

  // goToLogin() {
  //   this.router.navigate(['login'])
  // }
  //
  // showTasks(){
  //   this.router.navigate(['createTask'])
  // }
  //
  // sendRouteParams() {
  //
  //   this.router.navigate(['details',3])
  //    }
}
