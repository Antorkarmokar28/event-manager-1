import PropTypes from 'prop-types';
import { CiLocationOn } from 'react-icons/ci';
import { MdOutlineAirlineSeatReclineExtra } from 'react-icons/md';
import { SlCalender } from 'react-icons/sl';
import { Link } from 'react-router-dom';
const Events = ({ aEvents }) => {
    const { id, image_thumbnail, date, location, title, seat } = aEvents || {};
    return (
        <div className='bg-slate-100 font-poppins'>
            <figure>
                <img src={image_thumbnail} alt="event thumnail images" />
            </figure>
            <div className='bg-blue-900 w-32 justify-center flex gap-3 items-center py-2 rounded-r-lg relative bottom-10'>
                <MdOutlineAirlineSeatReclineExtra className='text-slate-50 text-2xl font-bold' />
                <p className='text-slate-200'>
                    {seat}
                </p>
            </div>
            <div className='px-6 pb-6 -mt-6'>
                <div className='flex justify-between mb-6'>
                    <h4 className='flex gap-3 items-center'>
                        <SlCalender className='text-blue-900 font-extralight' />
                        {date}
                    </h4>
                    <h4 className='flex gap-3 items-center'>
                        <CiLocationOn className='text-blue-900 font-extralight w-5 h-5' />
                        {location}
                    </h4>
                </div>
                <h4 className='text-slate-800 mb-6 text-3xl font-semibold'>
                    {title}
                </h4>
                <Link to={`/aEvents/${id}`} className='text-xl font-bold text-blue-900 underline'>
                    View Details
                </Link>
            </div>
        </div>
    );
};
Events.propTypes = {
    aEvents: PropTypes.object,
}
export default Events;