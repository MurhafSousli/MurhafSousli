import {Pipe} from '@angular/core';

@Pipe({
  name: 'DatePipe'
})
export class DatePipe {
  transform(value: string, args?: string[]): any {
    if (value) {
      let date = new Date(value);
      console.log(date);
      let monthNames = [
        'January', 'February', 'March',
        'April', 'May', 'June', 'July',
        'August', 'September', 'October',
        'November', 'December'
      ];
      if (args && args[0] === 'medium') {
        let result = date.getDate() + ' ' +
          monthNames[date.getMonth()] + ', ' + date.getFullYear();
        return date.now;
      }
      let result = date.getDate() + ' ' + date.getMonth() + ' ' + date.getFullYear();
      return result;
    } else {
      console.error('DatePipe: input value is undefined');
      return 'date is unknown';
    }
  }
}
