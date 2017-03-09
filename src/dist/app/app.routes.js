"use strict";
const home_component_1 = require("./home/home.component");
//import {LoginComponent} from "./login/login.component";
const createTask_component_1 = require("./createTask/createTask.component");
exports.routes = [{
        path: 'home',
        component: home_component_1.HomeComponent
    },
    // },{
    //   path : 'login',
    //   component: LoginComponent
    // },{
    //   path : 'details/:id',
    //   component: LoginComponent
    // },
    {
        path: 'createTask',
        component: createTask_component_1.CreateTaskComponent }
];
//# sourceMappingURL=app.routes.js.map