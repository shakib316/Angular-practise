import { Component } from '@angular/core';
import  {NgForm} from "@angular/forms"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'templateform';

  firstname:string = ''
  email:string = ''
  description:string= ''
  terms:boolean = false


  adduser(userform: NgForm){
  console.log(userform.value);
  
  }

}
