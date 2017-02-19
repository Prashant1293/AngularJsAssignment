"use strict";
const home_component_1 = require("./home/home.component");
const login_component_1 = require("./login/login.component");
const task_component_1 = require("./tasks/task.component");
exports.routes = [{
        path: 'home',
        component: home_component_1.HomeComponent
    }, {
        path: 'login',
        component: login_component_1.LoginComponent
    }, {
        path: 'details/:id',
        component: login_component_1.LoginComponent
    }, {
        path: 'tasks',
        component: task_component_1.TaskComponent
    }, {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }];
//# sourceMappingURL=app.routes.js.map