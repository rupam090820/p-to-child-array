import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit {

  constructor() { }
@Input() dataobj:any= {};
  ngOnInit(): void {
  }

}
