import GitHubCalendar from 'react-github-calendar';
import './Calendar.css';


import type { Activity } from 'react-github-calendar';

const selectFromJanToCurrent = (contributions: Activity[]): Activity[] => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();

    return contributions.filter((activity: Activity) => {
        const date = new Date(activity.date);
        return (
            date.getFullYear() === currentYear &&
            date.getMonth() <= currentMonth
        );
    });
};

function Calendar() {
    return (

        <div className='calendar-container'>

            <GitHubCalendar
                username="ig-imanish"
                transformData={selectFromJanToCurrent}
                style={{ color: 'white' }}
                labels={{
                    totalCount: '{{count}} contributions in the year',
                }}
            />
        </div>
    );
}

export default Calendar;