import { CiLocationOn } from "react-icons/ci";
import { MdOutlineAirlineSeatReclineExtra } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { Link, useLoaderData, useParams } from "react-router-dom";

const ViewDetails = () => {
    const eventDetails = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const eventDetail = eventDetails?.events?.find(eventDetail => eventDetail.id === idInt);
    const { image_thumbnail, date, location, title, seat, description } = eventDetail || {};
    return (
        <div className="container mx-auto mt-10 mb-10">
            <div className='bg-slate-100 font-poppins'>
                <figure>
                    <img className="w-full" src={image_thumbnail} alt="event thumnail images" />
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
                    <p className="text-sm font-bold text-slate-700 mb-6 text-justify">
                        {description}
                    </p>
                    <Link to={`/ticket`} className='text-xl font-bold text-blue-900 underline'>
                        Book Now
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;