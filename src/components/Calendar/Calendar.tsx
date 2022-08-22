// https://stackblitz.com/github/samselikoff/2022-05-11-tailwind-ui-interactive-calendar?file=pages%2Findex.jsx

import { Menu, Transition } from "@headlessui/react";
import { DotsVerticalIcon } from "@heroicons/react/outline";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  isSameDay,
  parse,
  parseISO,
  startOfToday,
} from "date-fns";
import { Fragment, useState } from "react";
import { classNames } from "@/utils/common";
import { default as Cell } from "./CalendarCell";

const meetings = [
  {
    id: 1,
    name: "Leslie Alexander",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    startDatetime: "2022-05-11T13:00",
    endDatetime: "2022-05-11T14:30",
  },
  {
    id: 2,
    name: "Michael Foster",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    startDatetime: "2022-05-20T09:00",
    endDatetime: "2022-05-20T11:30",
  },
  {
    id: 3,
    name: "Dries Vincent",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    startDatetime: "2022-05-20T17:00",
    endDatetime: "2022-05-20T18:30",
  },
  {
    id: 4,
    name: "Leslie Alexander",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    startDatetime: "2022-06-09T13:00",
    endDatetime: "2022-06-09T14:30",
  },
  {
    id: 5,
    name: "Michael Foster",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    startDatetime: "2022-08-13T14:00",
    endDatetime: "2022-08-13T14:30",
  },
  {
    id: 6,
    name: "Michael Foster",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    startDatetime: "2022-08-13T14:00",
    endDatetime: "2022-08-13T14:30",
  },
  {
    id: 7,
    name: "Jarek Matura",
    imageUrl: "https://avatars.githubusercontent.com/u/35654946?v=4",
    startDatetime: "2022-08-17T14:00",
    endDatetime: "2022-08-17T14:30",
  },
  {
    id: 8,
    name: "Jarek Matura",
    imageUrl: "https://avatars.githubusercontent.com/u/35654946?v=4",
    startDatetime: "2022-08-18T14:00",
    endDatetime: "2022-08-20T14:30",
  },
  {
    id: 9,
    name: "Jarek Matura",
    imageUrl: "https://avatars.githubusercontent.com/u/35654946?v=4",
    startDatetime: "2022-08-18T16:00",
    endDatetime: "2022-08-20T16:30",
  },
  {
    id: 10,
    name: "Jarek Matura",
    imageUrl: "https://avatars.githubusercontent.com/u/35654946?v=4",
    startDatetime: "2022-08-20T16:00",
    endDatetime: "2022-08-20T16:30",
  },
  {
    id: 11,
    name: "Jarek Matura",
    imageUrl: "https://avatars.githubusercontent.com/u/35654946?v=4",
    startDatetime: "2022-08-20T16:00",
    endDatetime: "2022-08-20T16:30",
  },
  {
    id: 12,
    name: "Jarek Matura",
    imageUrl: "https://avatars.githubusercontent.com/u/35654946?v=4",
    startDatetime: "2022-08-20T16:00",
    endDatetime: "2022-08-20T16:30",
  },
  {
    id: 13,
    name: "Jarek Matura",
    imageUrl: "https://avatars.githubusercontent.com/u/35654946?v=4",
    startDatetime: "2022-08-20T16:00",
    endDatetime: "2022-08-20T16:30",
  },
  {
    id: 14,
    name: "Jarek Matura",
    imageUrl: "https://avatars.githubusercontent.com/u/35654946?v=4",
    startDatetime: "2022-08-20T16:00",
    endDatetime: "2022-08-20T16:30",
  },
  {
    id: 15,
    name: "Jarek Matura",
    imageUrl: "https://avatars.githubusercontent.com/u/35654946?v=4",
    startDatetime: "2022-08-20T16:00",
    endDatetime: "2022-08-20T16:30",
  },
  {
    id: 16,
    name: "Jarek Matura",
    imageUrl: "https://avatars.githubusercontent.com/u/35654946?v=4",
    startDatetime: "2022-08-20T16:00",
    endDatetime: "2022-08-20T16:30",
  },
  {
    id: 17,
    name: "Jarek Matura",
    imageUrl: "https://avatars.githubusercontent.com/u/35654946?v=4",
    startDatetime: "2022-08-20T16:00",
    endDatetime: "2022-08-20T16:30",
  },
  {
    id: 18,
    name: "Jarek Matura",
    imageUrl: "https://avatars.githubusercontent.com/u/35654946?v=4",
    startDatetime: "2022-08-21T16:00",
    endDatetime: "2022-08-21T16:30",
  },
];

const Calendar = () => {
  const today = startOfToday();
  const [selectedDay, setSelectedDay] = useState(today);
  const [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  const firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());

  const days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });

  function previousMonth() {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  function nextMonth() {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  const selectedDayMeetings = meetings.filter((meeting) =>
    isSameDay(parseISO(meeting.startDatetime), selectedDay)
  );

  return (
    <div className='pt-16'>
      <div className='max-w-md px-4 mx-auto sm:px-7 md:max-w-4xl md:px-6'>
        <div className='md:grid md:grid-cols-2 md:divide-x md:divide-gray-200'>
          <div className='md:pr-14'>
            <div className='flex items-center'>
              <h2 className='flex-auto font-semibold text-charcoal dark:text-gainsboro'>
                {format(firstDayCurrentMonth, "MMMM yyyy")}
              </h2>
              <button
                type='button'
                onClick={previousMonth}
                className='-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500'
              >
                <span className='sr-only'>Previous month</span>
                <ChevronLeftIcon className='w-5 h-5' aria-hidden='true' />
              </button>
              <button
                onClick={nextMonth}
                type='button'
                className='-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500'
              >
                <span className='sr-only'>Next month</span>
                <ChevronRightIcon className='w-5 h-5' aria-hidden='true' />
              </button>
            </div>
            <div className='grid grid-cols-7 mt-10 text-xs leading-6 text-center text-gray-500 dark:text-gray-400'>
              <div>Mon</div>
              <div>Tue</div>
              <div>Wed</div>
              <div>Thu</div>
              <div>Fri</div>
              <div>Sat</div>
              <div>Sun</div>
            </div>
            <div className='grid grid-cols-7 mt-2 text-sm'>
              {days.map((day: any, dayIdx: number) => (
                <Cell
                  key={dayIdx}
                  meetings={meetings}
                  day={day}
                  dayIdx={dayIdx}
                  selectedDay={selectedDay}
                  setSelectedDay={setSelectedDay}
                  firstDayCurrentMonth={firstDayCurrentMonth}
                />
              ))}
            </div>
          </div>
          <section className='mt-12 md:mt-0 md:pl-14'>
            <h2 className='font-semibold text-charcoal dark:text-gainsboro'>
              Schedule for{" "}
              <time dateTime={format(selectedDay, "yyyy-MM-dd")}>
                {format(selectedDay, "MMM dd, yyy")}
              </time>
            </h2>
            <ol className='mt-4 space-y-1 text-sm leading-6 text-gray-500 dark:text-gray-400'>
              {selectedDayMeetings.length > 0 ? (
                selectedDayMeetings.map((meeting) => (
                  <Meeting meeting={meeting} key={meeting.id} />
                ))
              ) : (
                <p>No meetings for today.</p>
              )}
            </ol>
          </section>
        </div>
      </div>
    </div>
  );
};

function Meeting({ meeting }: any) {
  const startDateTime = parseISO(meeting.startDatetime);
  const endDateTime = parseISO(meeting.endDatetime);

  return (
    <li className='flex items-center px-4 py-2 space-x-4 group rounded-xl focus-within:bg-gray-100 hover:bg-slate-200 dark:hover:bg-slate-800'>
      <img
        src={meeting.imageUrl}
        alt=''
        className='flex-none w-10 h-10 rounded-full'
      />
      <div className='flex-auto'>
        <p className='text-charcoal dark:text-gainsboro'>{meeting.name}</p>
        <p className='mt-0.5'>
          <time dateTime={meeting.startDatetime}>
            {format(startDateTime, "h:mm a")}
          </time>{" "}
          -{" "}
          <time dateTime={meeting.endDatetime}>
            {format(endDateTime, "h:mm a")}
          </time>
        </p>
      </div>
      <Menu
        as='div'
        className='relative opacity-0 focus-within:opacity-100 group-hover:opacity-100'
      >
        <div>
          <Menu.Button className='-m-2 flex items-center rounded-full p-1.5 text-gray-500 hover:text-gray-600'>
            <span className='sr-only'>Open options</span>
            <DotsVerticalIcon className='w-6 h-6' aria-hidden='true' />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          <Menu.Items className='absolute right-0 z-10 mt-2 origin-top-right bg-white rounded-md shadow-lg w-36 ring-1 ring-black ring-opacity-5 focus:outline-none'>
            <div className='py-1'>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href='#'
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Edit
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href='#'
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    Cancel
                  </a>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </li>
  );
}

export default Calendar;
