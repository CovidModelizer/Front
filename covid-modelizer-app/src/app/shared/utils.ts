import * as moment from 'moment';

export class Utils {

  static getAllDaysSinceTheBeginning(days: any[] | undefined): string[] {
    const startDate = moment('2020-03-01');
    const endDate = moment().add(1, 'day');
    days = [];

    if (endDate.isBefore(startDate)) {
      throw new Error('End date must be greated than start date.');
    }
    while (startDate.isBefore(endDate)) {
      days.push(startDate.format('DD/MM/YYYY'));
      startDate.add(1, 'day');
    }
    return days;
  }

  // -1 pour jour précédent et 1 pour jour suivant
  static getDayBeforeOrAfterGivenDate(date: Date, beforeOrAfter: number): string {
    return (moment(date).add(beforeOrAfter, 'day')).format('YYYY-MM-DD');
  }

  static isDate1BeforeDate2(date1: Date, date2: Date) {
    let res = true;
    if(date1.getUTCFullYear() > date2.getUTCFullYear()) res = false;
    else if(date1.getUTCFullYear() == date2.getUTCFullYear()) {
      if(date1.getUTCMonth()+1 > date2.getUTCMonth()+1) res = false;
      else if(date1.getUTCMonth()+1 == date2.getUTCMonth()+1) {
        if(date1.getUTCDate() >= date2.getUTCDate()) res = false;
      }
    }
    return res;
  }

  /*
  static isDate1EqualsDate2(date1: any, date2: any) {
    let date1Format = new Date(date1);
    return date1Format.getUTCFullYear() == date2.getUTCFullYear() && 
            date1Format.getUTCMonth()+1 == date2.getUTCMonth()+1 && 
            date1Format.getUTCDate() == date2.getUTCDate();
  }
  */

  static getStrDate(date: Date): string {
    var strDate = moment(date);
    strDate.locale('fr');
    return strDate.format('DD MMMM YYYY');
  }

}
