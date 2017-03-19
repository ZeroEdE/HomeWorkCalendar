import {Component, OnInit, HostBinding, Input} from '@angular/core';
import {EventType} from "../../phototype";


@Component({
  selector: 'event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  @HostBinding('class') class = 'calendar-item';

  type: EventType;

  @Input('type')
  set _type(value: EventType) {
    this.type = value;
    this.class += ' ' + this.calendarType[value].toLowerCase();
  }

  calendarType = EventType;

  constructor() { }

  ngOnInit() { }


}
