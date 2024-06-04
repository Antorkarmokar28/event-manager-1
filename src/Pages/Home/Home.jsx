import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Events from "../../components/Events/Events";
import { useState } from "react";

const Home = () => {
    const conferencesEvents = useLoaderData();
    const [dataLenght, setDataLenght] = useState([4]);
    return (
        <div>
            <Banner></Banner>
            <div className="container mx-auto mt-28 mb-28 font-poppins px-4">
                <h5 className="text-center text-2xl font-bold text-blue-900 mb-6">Event</h5>
                <h1 className="text-center text-3xl md:text-5xl mb-6 font-bold">POPULAR EVENT</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {
                        conferencesEvents?.events.slice(0, dataLenght).map(aEvent => <Events key={aEvent?.id} aEvents={aEvent}></Events>)
                    }
                </div>
                <div className={`mt-10 text-center ${dataLenght === conferencesEvents.lenght ? 'hidden' : ''}`}>
                    <button onClick={()=> setDataLenght(conferencesEvents.lenght)} className="px-4 py-2 rounded bg-blue-900 text-slate-200 font-poppins text-xl font-semibold">See All Events</button>
                </div>
            </div>
        </div>
    );
};

export default Home;