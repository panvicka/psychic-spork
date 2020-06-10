import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  contactMethods = [
    {id:1, name:'Emails'},
    {id:2, name:'Post'},
    {id:3, name:'phone'},
  ];
  log(x) { console.log(x); }

  submit(f) {
    console.log(f);
  }

}
