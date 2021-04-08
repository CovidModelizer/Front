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

}
