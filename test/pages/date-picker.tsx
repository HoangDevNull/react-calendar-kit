import React from 'react';
import { Roboto } from 'next/font/google';
import { type DateValue } from '@internationalized/date';
import { useDatePicker, type UseDatePickerProps } from 'react-calendar-kit';

import CalendarButton from './components/calendar-button';
import { Primitives } from './components/primitives';

const fontSans = Roboto({ subsets: ['latin'], weight: ['300', '400', '500'] });

const DatePicker = <T extends DateValue>(props: UseDatePickerProps<T>) => {
  const { ref, state, getCalendarProps, getDateInputProps, getDialogProps, getTriggerProps } = useDatePicker<T>(props);

  return (
    <div className={fontSans.className}>
      <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-900">
        <div className="flex flex-col gap-4">
          <Primitives.DateInput {...getDateInputProps} ref={ref} endContent={<CalendarButton {...getTriggerProps} />} />
          {state.isOpen ? (
            <div {...getDialogProps}>
              <Primitives.Calendar {...getCalendarProps} visibleMonths={1} weekdayStyle="short" withPicker />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default DatePicker;
