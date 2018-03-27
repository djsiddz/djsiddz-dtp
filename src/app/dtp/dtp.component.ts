import { Component, OnChanges, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MonthOptions, DateOptions, YearOptions, HourOptions, MinutesOptions } from './dtp.model';
@Component({
  selector: 'djsiddz-dtp',
  templateUrl: './dtp.component.html',
  styleUrls: ['./dtp.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DtpComponent),
      multi: true
    }
  ]
})
export class DtpComponent implements OnChanges, ControlValueAccessor {

  @Input() showDate: Boolean = false;
  @Input() showTime: Boolean = false;
  @Input() label: String;

  @Input() _finalDate : Date = new Date();

  showPicker = false;
  selectedMonth: number;
  selectedDate: number;
  selectedYear: number;
  selectedHour: number;
  selectedMinute: number;

  monthOptions = MonthOptions;
  dateOptions = DateOptions;
  yearOptions = YearOptions;
  hourOptions = HourOptions;
  minutesOptions = MinutesOptions;

  constructor() { }

  // overriding functions for ControlValueAccessor
  writeValue(value: any) {
    if (value !== undefined) {
      this._finalDate = value;
    }
  }
  propagateChange = (_: any) => {};
  registerOnChange(fn) {
    this.propagateChange = fn;
  }
  registerOnTouched() {}
  // overriding END

  ngOnChanges() {
    this.selectedMonth =  this._finalDate.getMonth();
    this.selectedDate = this._finalDate.getDate();
    this.selectedYear = this._finalDate.getFullYear();
    this.selectedHour = this._finalDate.getHours();;
    this.selectedMinute = this._finalDate.getMinutes();
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
    if(this.showPicker === false) {
      this.setDate();
    }
  }

  public updateMonth(event): void {
    this.selectedMonth = event.target.value;
    this.setDate();
  }
  public updateYear(event): void {
    this.selectedYear = event.target.value;
    this.setDate();
  }
  public updateDate(event): void {
    this.selectedDate = event.target.value;
    this.setDate();
  }
  public updateHour(event): void {
    this.selectedHour = event.target.value;
    this.setDate();
  }
  public updateMinutes(event): void {
    this.selectedMinute = event.target.value;
    this.setDate();
  }

  setDate() {
    console.log("okay");
    // this.showPicker = !this.showPicker;
    if(this.showDate && this.showTime) {
      //build date+time
      this._finalDate =  new Date(this.selectedYear, this.selectedMonth, this.selectedDate, this.selectedHour, this.selectedMinute, 0);
      console.log(this._finalDate);
    } else if(this.showDate && !this.showTime) {
      //build date
      this._finalDate =  new Date(this.selectedYear, this.selectedMonth, this.selectedDate, 0, 0, 0);
      console.log(this._finalDate);
    } else if(!this.showDate && this.showTime) {
      //build time
      this._finalDate =  new Date(this.selectedYear, this.selectedMonth, this.selectedDate, this.selectedHour, this.selectedMinute, 0);
      console.log(this._finalDate);
    }
    this.propagateChange(this._finalDate);
  }


}
