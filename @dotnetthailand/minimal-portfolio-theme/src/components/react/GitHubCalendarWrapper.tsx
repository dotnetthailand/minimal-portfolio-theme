import { useEffect, useRef, useState } from "react";
import GitHubCalendar from "react-github-calendar";
import type { Activity } from "react-github-calendar";
import { subMonths } from 'date-fns';

// import { Tooltip } from 'react-tooltip'
// import 'react-tooltip/dist/react-tooltip.css'
/*
  const renderBlock = (block: BlockElement, activity: Activity) =>
    cloneElement(block, {
      'data-tooltip-id': 'react-tooltip',
      'data-tooltip-html': `${activity.count} activities on ${activity.date}`,
    });
*/

export default function GitHubCalendarWrapper() {
  const [isClient, setIsClient] = useState(false);
  const calendarRef = useRef<HTMLDivElement>(null);

  const selectLastHalfYear = (activities: Activity[]) => {

    const today = new Date();
    const fromDate = subMonths(today, 6);

    const filteredAcitities = activities.filter(activity => {
      const activityDate = new Date(activity.date);
      return (activityDate.getTime() >= fromDate.getTime());
    });

    const calendarElement = calendarRef.current!;
    calendarElement.style.display = 'flex';
    return filteredAcitities;

  };


  useEffect(() => {
    const calendarElement = calendarRef.current!;
    calendarElement.style.display = 'none';
    setIsClient(true)

  }, []);

  // https://github.com/grubersjoe/react-github-calendar/issues/66#issuecomment-2280213874
  // https://github.com/grubersjoe/react-activity-calendar
  // https://grubersjoe.github.io/react-activity-calendar/?path=/docs/react-activity-calendar--docs
  // https://grubersjoe.github.io/react-github-calendar/

  // https://github.com/Bloggify/github-calendar
  // https://grubersjoe.github.io/react-github-calendar/
  // https://github.com/grubersjoe/react-activity-calendar


  const labels = { totalCount: '{{count}} contributes in last 6 months' };
  // calendar use flex direction:column
  const style = { alignItems: 'start' };


  return (
    <div ref={calendarRef} >
      {isClient
        ? <GitHubCalendar style={style} username="aaronamm" colorScheme={'light'} blockSize={8} labels={labels} transformData={selectLastHalfYear} transformTotalCount={false} loading={false} />
        : <></>
      }
    </div>
  )
}
