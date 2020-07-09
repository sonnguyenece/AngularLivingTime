import {Injectable} from '@angular/core';
import {
  addMonths,
  addYears,
  differenceInDays,
  differenceInMonths,
  differenceInYears
} from 'date-fns';
@Injectable({
  providedIn: 'root'
})
export class DateUtilService {

  constructor() {
  }

  getDiffToNow(diff: string | number | Date): string {
    const result: string[] = [];
    const now = new Date();
    diff = new Date(diff);

    const years = differenceInYears(now, diff);
    if (years > 0) {
      result.push(`${years} years`);
      console.log(diff);
      diff = addYears(diff, years);
      console.log(diff);
    }

    const months = differenceInMonths(now, diff);
    if (months > 0) {
      result.push(`${months} months`);
      diff = addMonths(diff, months);
      console.log(diff);
    }

    const days = differenceInDays(now, diff);
    if (days > 0) {
      result.push(`${days} days`);
    }

    return result.join(' ');
  }
}
