import { ParameterService } from './../parameters.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parameter',
  templateUrl: './parameter.component.html',
  styleUrls: ['./parameter.component.css']
})
export class ParameterComponent implements OnInit {

  title = "List of parameters";
  parameters: string[];
  imageUrl = "https://via.placeholder.com/150";
  colSpan = 2;
  isActive = true;
 
  getTitle() {

    return this.title;
  }

  constructor(service: ParameterService) { 
    this.parameters = service.getParamters();


  }

  onSave($event){
    console.log("button clicked", $event);
  }

  ngOnInit(): void {
  }

}
