import {Routes} from '@angular/router'
import {HomeComponent} from "./home/home.component";
//import {LoginComponent} from "./login/login.component";
import {CreateTaskComponent} from "./createTask/createTask.component";
export const routes: Routes = [{
  path: 'home',
  component: HomeComponent
},
// },{
//   path : 'login',
//   component: LoginComponent
// },{
//   path : 'details/:id',
//   component: LoginComponent
// },
  {
  path : 'createTask',
  component: CreateTaskComponent }
// },{
//   path : '',
//   redirectTo: '/home',
//   pathMatch: 'full'
// }
];

