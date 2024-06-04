import { SlCalender } from "react-icons/sl";
import moment from 'moment';
const Banner = () => {
    return (
        <div className="hero min-h-screen bg-hero bg-cover font-poppins">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h2 className="text-center flex items-center gap-6 mb-6 text-xl md:text-2xl font-semibold  md:font-bold"><SlCalender />{moment().format("dddd, MMMM Do YYYY")}</h2>
                    <h1 className="mb-5 text-3xl md:text-5xl leading-16 font-medium md:font-bold">EVENT,MEETUPS & CONFERENCES</h1>
                    <p className="mb-5">Sure, could you please specify the topic or industry you are interested in? That way, I can provide more relevant event</p>
                    <button className="bg-blue-900 hover:bg-blue-800 px-5 py-2 rounded-lg text-white">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;