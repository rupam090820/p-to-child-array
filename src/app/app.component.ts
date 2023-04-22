import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'p-to-child-array';
  name= 'rupam saha';
  food=["apple","banana", "mango","potato"];
  obj={
    name:"rupam",
    age:"22",
    roll:27,
    address:"birati",
    ismarried:true
  }

  changedata(){
    this.name= 'swaraj Das';  // this is use for changing data value
  }

  public user_info:any=[
    {'name':'Rupam' ,'Course':'Angular','fees':14500},
    {'name':'Swaraj' ,'Course':'React','fees':14500},
    {'name':'Anjan' ,'Course':'Angular','fees':14500},
    {'name':'Sourav' ,'Course':'React','fees':14500},
    {'name':'Akash' ,'Course':'DOT.net','fees':14500},
  ];

}
