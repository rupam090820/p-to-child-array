import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-child4',
  templateUrl: './child4.component.html',
  styleUrls: ['./child4.component.css']
})
export class Child4Component implements OnInit {

  constructor() { }
@Input() data_ary_obj:any[]=[];
  ngOnInit(): void {
  }

}
