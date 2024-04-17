import moment from 'moment';

const DateConverter = ({ mongoDate }) => {
    const convertMongoDate = (mongoDateStr) => {
        const mongoDate = moment.utc(mongoDateStr);
        const formattedDate = mongoDate.format('MM/DD/YYYY HH:mm');
        return formattedDate;
    };

    const formattedDate = convertMongoDate(mongoDate);

    return (
        <div>
            <p>{formattedDate}</p>
        </div>
    );
}

export default DateConverter;