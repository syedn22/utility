export default class Date {
  static monthInNumbers = [
    { label: "Jan", value: 1 },
    { label: "Feb", value: 2 },
    { label: "Mar", value: 3 },
    { label: "Apr", value: 4 },
    { label: "May", value: 5 },
    { label: "Jun", value: 6 },
    { label: "Jul", value: 7 },
    { label: "Aug", value: 8 },
    { label: "Sep", value: 9 },
    { label: "Oct", value: 10 },
    { label: "Nov", value: 11 },
    { label: "Dec", value: 12 },
  ];

  static findMonthNumber(date) {
    return this.monthInNumbers.find((m) => m.label === date["month"]).value;
  }

  static findDifference(fromDate, toDate) {
    return {
      year: toDate["year"] - fromDate["year"],
      month: this.findMonthNumber(toDate) - this.findMonthNumber(fromDate),
      day:
        toDate["day"] - fromDate["day"] == 0
          ? 0
          : Math.abs(toDate["day"] - fromDate["day"]),
      hour: Math.abs(toDate["hour"] - fromDate["hour"]),
      minute: Math.abs(toDate["minute"] - fromDate["minute"]),
    };
  }
}
