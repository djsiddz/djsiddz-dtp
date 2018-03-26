import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MonthOptions, DateOptions, YearOptions, HourOptions, MinutesOptions } from './dtp.model';
@Component({
  selector: 'djsiddz-dtp',
  templateUrl: './dtp.component.html',
  styleUrls: ['./dtp.component.css']
})
export class DtpComponent implements OnInit {

  @Input() showDate: Boolean = false;
  @Input() showTime: Boolean = false;
  @Input() label: String;

  defaultDate : Date;

  showPicker = false;
  selectedMonth: number;
  selectedDate: number;
  selectedYear: number;
  selectedHour: number;
  selectedMinute: number;
  selectedFinalDate: Date;

  monthOptions = MonthOptions;
  dateOptions = DateOptions;
  yearOptions = YearOptions;
  hourOptions = HourOptions;
  minutesOptions = MinutesOptions;

  constructor() { }

  ngOnInit() {
    this.defaultDate = new Date();
    this.selectedMonth =  this.defaultDate.getMonth();
    this.selectedDate = this.defaultDate.getDate();
    this.selectedYear = this.defaultDate.getFullYear();
    this.selectedHour = this.defaultDate.getHours();;
    this.selectedMinute = this.defaultDate.getMinutes();
    console.log(this.selectedHour);
    //fix minutes to one of 00/15/30/45
    if(this.selectedMinute > 0 && this.selectedMinute <=14) {
      this.selectedMinute = 15;
    } else if(this.selectedMinute > 15 && this.selectedMinute <= 29) {
      this.selectedMinute = 30;
    } else if(this.selectedMinute > 30 && this.selectedMinute <= 44) {
      this.selectedMinute = 45;
    } else if(this.selectedMinute > 45 && this.selectedMinute <= 59) {
      this.selectedMinute = 0;
      if(this.selectedHour == 23) {
        this.selectedHour = 0;
      } else {
        this.selectedHour += 1;
      }
    }
    console.log(this.selectedHour);
  }

  togglePicker() {
    this.showPicker = !this.showPicker;
  }

  public updateMonth(event): void {
    this.selectedMonth = event.target.value;
    console.log("updated ", this.selectedMonth);
  }
  public updateYear(event): void {
    this.selectedYear = event.target.value;
    console.log("updated ", this.selectedYear);
  }
  public updateDate(event): void {
    this.selectedDate = event.target.value;
    console.log("updated ", this.selectedDate);
  }
  public updateHour(event): void {
    this.selectedHour = event.target.value;
    console.log("updated ", this.selectedHour);
  }
  public updateMinutes(event): void {
    this.selectedMinute = event.target.value;
    console.log("updated ", this.selectedMinute);
  }

  setDate() {
    console.log("okay");
    this.showPicker = !this.showPicker;
    if(this.showDate && this.showTime) {
      //build date+time
      this.selectedFinalDate =  new Date(this.selectedYear, this.selectedMonth, this.selectedDate, this.selectedHour, this.selectedMinute, 0);
      console.log(this.selectedFinalDate);
    } else if(this.showDate && !this.showTime) {
      //build date
      this.selectedFinalDate =  new Date(this.selectedYear, this.selectedMonth, this.selectedDate, 0, 0, 0);
      console.log(this.selectedFinalDate);
    } else if(!this.showDate && this.showTime) {
      //build time
      this.selectedFinalDate =  new Date(this.selectedYear, this.selectedMonth, this.selectedDate, this.selectedHour, this.selectedMinute, 0);
      console.log(this.selectedFinalDate);
    }
  }


}
