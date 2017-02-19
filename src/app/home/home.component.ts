import {Component} from '@angular/core'
import {Router} from '@angular/router'

@Component({
  selector: 'home',
  templateUrl: './app/home/home.component.html',
  styleUrls: ['']
})
export class HomeComponent {

  constructor(private router: Router) {}

  goToLogin() {
    this.router.navigate(['login'])
  }

  showTasks(){
    this.router.navigate(['tasks'])
  }

  sendRouteParams() {

    this.router.navigate(['details',3])
     }
}
