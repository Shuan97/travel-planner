import {
  format,
  getDay,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parseISO,
} from "date-fns";
import React from "react";
import { classNames } from "../../utils/common";

const colStartClasses = [
  "col-start-7",
  "col-start-1",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
];

const CalendarCell = ({
  meetings,
  day,
  dayIdx,
  selectedDay,
  setSelectedDay,
  firstDayCurrentMonth,
}: any) => {
  return (
    <div
      key={day.toString()}
      className={classNames(
        dayIdx === 0 && colStartClasses[getDay(day)],
        "py-1.5"
      )}
    >
      <button
        type='button'
        onClick={() => setSelectedDay(day)}
        className={classNames(
          isEqual(day, selectedDay) && "text-white",
          !isEqual(day, selectedDay) && isToday(day) && "text-red-500",
          !isEqual(day, selectedDay) &&
            !isToday(day) &&
            isSameMonth(day, firstDayCurrentMonth) &&
            "",
          !isEqual(day, selectedDay) &&
            !isToday(day) &&
            !isSameMonth(day, firstDayCurrentMonth) &&
            "text-gray-400",
          isEqual(day, selectedDay) && isToday(day) && "bg-red-500",
          isEqual(day, selectedDay) &&
            !isToday(day) &&
            "bg-slate-400 dark:bg-gray-900",
          !isEqual(day, selectedDay) &&
            "hover:bg-slate-200 dark:hover:bg-slate-600",
          (isEqual(day, selectedDay) || isToday(day)) && "font-semibold",
          meetings.some(
            // TODO - any
            (meeting: any) =>
              isSameDay(parseISO(meeting.startDatetime), day) &&
              meeting.name === "Jarek Matura"
          ) && "bg-green-400 dark:bg-green-800",
          "mx-auto flex h-10 w-10 items-center justify-center rounded-full"
        )}
      >
        <time dateTime={format(day, "yyyy-MM-dd")}>{format(day, "d")}</time>
      </button>

      <div className='flex justify-center flex-wrap space-x-px mt-1'>
        {/* TODO - any */}
        {meetings.map((meeting: any) => {
          if (isSameDay(parseISO(meeting.startDatetime), day))
            return (
              <div
                key={meeting.id}
                className='w-1.5 h-1.5 rounded-full bg-sky-500 hover:bg-sky-700'
              ></div>
            );
        })}
      </div>
    </div>
  );
};

export default CalendarCell;
