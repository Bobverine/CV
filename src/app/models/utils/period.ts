enum EPeriod {
  INTERVAL,
  YEAR_INTERVAL,
  MONTH_INTERVAL,
  DATE,
  STRING,
}

interface IntervalPeriod {
  periodType: EPeriod.INTERVAL | EPeriod.MONTH_INTERVAL | EPeriod.YEAR_INTERVAL;
  from: string;
  to: string;
}

interface DatePeriod {
  periodType: EPeriod.DATE;
  value: Date;
}

interface StringPeriod {
  periodType: EPeriod.STRING;
  value: string;
}

type Period = IntervalPeriod | DatePeriod | StringPeriod;

export { DatePeriod, EPeriod, IntervalPeriod, Period, StringPeriod };
