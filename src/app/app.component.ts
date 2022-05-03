import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstname:string='virat';
  lastname:string='kohli';
  gender:string="male";
  age:number=31;
image:string = 'assets/kohli.jpg';
  h = 150;
  w = 150;
  ChangeData(){
    this.firstname="ramgopal";
    this.lastname="varma";
    this.age=42;
   this.gender="male";
  }  

}