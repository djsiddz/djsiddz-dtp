import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

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
  // example2 = new Date(2017,1,5,10,30);

  form: FormGroup;


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      example2: new Date(2017,1,5,10,30)
    });
  }

}
