"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by prashant on 19-02-2017.
 */
const core_1 = require('@angular/core');
const task_1 = require('./app/task');
const app_service_1 = require("../app.service");
let CreateTaskComponent = class CreateTaskComponent {
    constructor(service) {
        this.service = service;
    }
    saveTask(date, title, desc, priority) {
        this.service.tasks.push(new task_1.Task(date, title, desc, priority));
        this.tasks = this.service.tasks;
        alert("Task Created");
    }
    showFormValues() {
        alert("Tasks are :  " + this.service.tasks(0));
        //alert("date selected is "+this.formDate);
    }
    ngOnInit() {
        this.tasks = this.service.tasks;
    }
};
CreateTaskComponent = __decorate([
    core_1.Component({
        selector: 'home',
        templateUrl: './app/createTask/createTask.component.html',
        styleUrls: [''],
        providers: [app_service_1.AppService]
    }), 
    __metadata('design:paramtypes', [app_service_1.AppService])
], CreateTaskComponent);
exports.CreateTaskComponent = CreateTaskComponent;
//# sourceMappingURL=task.component.js.map