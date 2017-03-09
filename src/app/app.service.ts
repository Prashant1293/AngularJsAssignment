import {Injectable} from '@angular/core'
import {Intern} from "./intern";
import {Task} from "./task";


@Injectable()
export class AppService {
  // interns: Intern[] = [{
  //   name : 'Akshay',
  //   id : 1
  // },{
  //   name : 'Akhil',
  //   id : 2
  // },{
  //   name : 'Kunal',
  //   id : 3
  // }];
  //
  
  tasks : Task[] = [
    {
      date : "01-1-2014",
      title : "abc",
      desc : "ashbj",
      priority : "jhdjs"
    }
  ]
  
  
}
