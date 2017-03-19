import {Component, OnInit} from '@angular/core';
import {CalendarType, EventType,CalendarItemType} from "./phototype";

@Component({
  selector: 'calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  calendarDays: CalendarType[] = [];
  nowDate: Date;
  calendarType = EventType;

  constructor() {

    // 產生日期
    this.nowDate = new Date();
    let year = this.nowDate.getFullYear();
    let month = this.nowDate.getMonth();

    let firstDay = new Date(year, month, 1).getDay();
    let lastDay = new Date(year, month, this.daysInMonth(year, month)).getDay();

    // 判斷從週日開始
    if (firstDay != 0) {
      let startDate = new Date(year, month, -firstDay).getDate() + 1;
      for (let i = startDate; i <= this.daysInMonth(year, month - 1); i++) {
        this.calendarDays.push({
          isCurrentMonth: false,
          day: i.toString(),
          items: this.getItems()
        });
      }
    }

    // 存當月份天數
    for (let i = 1; i <= this.daysInMonth(year, month); i++) {

      this.calendarDays.push({
        isCurrentMonth: true,
        day: i.toString(),
        items: this.getItems()
      });
    }

    // 判斷結束是否為週六
    if (lastDay != 6) {
      for (let i = 1; i <= 6 - lastDay; i++) {
        this.calendarDays.push({
          isCurrentMonth: false,
          day: i.toString(),
          items: this.getItems()
        });
      }
    }
  }

  ngOnInit() { }

  getItems() {
    let items: CalendarItemType[] = [];
    if (Math.floor(Math.random() * 6) == 0) {
      items.push({
        type: this.calendarType.Work,
        title: '工作'
      });
    }
    if (Math.floor(Math.random() * 6) == 1) {
      items.push({
        type: this.calendarType.Dating,
        title: '約會'
      });
    }
    if (Math.floor(Math.random() * 6) == 2) {
      items.push({
        type: this.calendarType.Birthday,
        title: '生日'
      });
    }
    return items;
  }

  daysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
  }

}
