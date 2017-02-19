import {Routes} from '@angular/router'
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {TaskComponent} from "./tasks/task.component";
export const routes: Routes = [{
  path : 'home',
  component: HomeComponent
},{
  path : 'login',
  component: LoginComponent
},{
  path : 'details/:id',
  component: LoginComponent
},{
  path : 'tasks',
  component: TaskComponent
},{
  path : '',
  redirectTo: '/home',
  pathMatch: 'full'
}];

