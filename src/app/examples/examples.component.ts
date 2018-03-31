import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'djsiddz-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.css']
})
export class ExamplesComponent implements OnInit {

  title = 'Date Time Picker';
  // using ngModel example
  example1 = new Date(2017,1,5,10,30);
  // using formControlName example
  // example2: Date;

  // form: FormGroup;


  constructor() { }

  ngOnInit() {
    // this.form =  new FormGroup({
    //   example2: new FormControl(this.example1)
    // });
  }

}
