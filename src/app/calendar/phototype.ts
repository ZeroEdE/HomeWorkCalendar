/**
 * Created by Zero on 2017/3/20.
 */

export enum EventType {
  Work,Dating,Birthday
}

export class CalendarType {
  isCurrentMonth: boolean;
  day: string;
  items: CalendarItemType[];
}

export class CalendarItemType {
  type: EventType;
  title: string;
}
