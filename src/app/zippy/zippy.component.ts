import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent {
@Input('title') title: String;
isExpanded: boolean;


toggle() {
  this.isExpanded = !this.isExpanded;
  console.log(this.isExpanded);
}
   
}
