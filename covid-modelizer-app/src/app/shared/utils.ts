import * as moment from 'moment';

export class Utils {
  static getAllMonthsSinceTheBeginning(months: any[] | undefined): string[] {
    const startDate = moment('2020-03-01');
    const endDate = moment().add(30, 'days');
    months = [];

    if (endDate.isBefore(startDate)) {
      throw new Error('End date must be greated than start date.');
    }
    while (startDate.isBefore(endDate)) {
      months.push(startDate.format('MM/YYYY'));
      startDate.add(1, 'month');
    }
    return months;
  }
}
