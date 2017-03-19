import {Component, OnInit, Input, HostBinding} from '@angular/core';

@Component({
  selector: 'date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  @Input() day: string;
  @Input('isCurrentMonth')

  set _isCurrentMonth(value: boolean | string) {
    this.currentMonthClass = (typeof value == 'string' && value.toLowerCase() == 'true') || value == true;
  };

  @HostBinding('class') class = 'col-md-1 app-grid';
  @HostBinding('class.current-month') currentMonthClass = true;

  constructor() { }

  ngOnInit() { }

}
