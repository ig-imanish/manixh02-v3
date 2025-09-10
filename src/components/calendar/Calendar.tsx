import GitHubCalendar from 'react-github-calendar';
import './Calendar.css';

function Calendar() {
    return (

        <div className='calendar-container'>

            <GitHubCalendar
                username="ig-imanish"
                style={{ color: 'white' }}
            />
        </div>
    );
}

export default Calendar;