import { subMonths } from 'date-fns';
// import ActivityCalendar from "react-activity-calendar";
import CalendarHeatmap, { type ReactCalendarHeatmapValue } from 'react-calendar-heatmap';
import { match, P } from "ts-pattern";

export interface Activity extends ReactCalendarHeatmapValue<string> {
  date: string;
  count: number;
}

const classForValue = (activity: ReactCalendarHeatmapValue<string> | undefined) => {
  return match(activity?.count)
    .with(1, 2, 3, () => `color-github-${activity?.count}`)
    .with(P.number.gte(4), () => `color-github-4`)
    .otherwise(() => 'color-empty');
};

type Props = {
  activities: Activity[];
}

const activitiesDurationInMonth = 6;
const endDate = new Date();
const startDate = subMonths(endDate, activitiesDurationInMonth);

export default function GitHubCalendarWrapper({ activities = [] }: Props) {

  const totalContributions = () => {
    const activitiesFromStatDate = activities.filter((activity) => {
      const date = new Date(activity.date);
      return date.getTime() >= startDate.getTime()
    });

    const contributionsCount = activitiesFromStatDate.reduce((acc, current) => {
      acc += current.count;
      return acc;
    }, 0);

    return contributionsCount;
  };

  // https://github.com/grubersjoe/react-github-calendar/issues/66#issuecomment-2280213874
  // https://github.com/grubersjoe/react-activity-calendar
  // https://grubersjoe.github.io/react-activity-calendar/?path=/docs/react-activity-calendar--docs
  // https://grubersjoe.github.io/react-github-calendar/

  // https://github.com/Bloggify/github-calendar
  // https://grubersjoe.github.io/react-github-calendar/
  // https://github.com/grubersjoe/react-activity-calendar
  // https://dev.to/andreykh/visualizing-mike-bostocks-github-contributions-calendar-how-to-create-a-js-calendar-chart-3p9m

  // https://github.com/k4rthik/git-cal
  // https://medium.com/@yuichkun/how-to-retrieve-contribution-graph-data-from-the-github-api-dc3a151b4af
  // https://blog.bitsrc.io/how-to-code-github-style-calendar-heatmap-a197f26c919e
  // https://blog.bitsrc.io/how-to-code-github-style-calendar-heatmap-a197f26c919e
  // https://haripo.github.io/react-github-contribution-calendar/
  // react-github-contribution-calendar
  // https://github.com/kevinsqi/react-calendar-heatmap

  return (
    <>
      <CalendarHeatmap
        startDate={startDate}
        endDate={endDate}
        showWeekdayLabels={true}
        classForValue={classForValue}
        values={activities}
      />
      <div>{`${totalContributions()} contributes in last ${activitiesDurationInMonth} months`}</div>
    </>
  )
}
