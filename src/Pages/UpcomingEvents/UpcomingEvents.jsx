
import { useEffect, useState } from "react";
import { SlLocationPin } from "react-icons/sl";
import { Link } from "react-router";

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/events")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const upcomingEvents = events.filter((event) => {
    const eventDate = new Date(event.eventDate)
    eventDate.setHours(0, 0, 0, 0);
    return eventDate >= today
  });



  return (
    <section className="py-16 bg-gray-50">

  
    <div className="max-w-7xl mx-auto px-4 md:px-12">
    <div className="text-center mb-12">


        
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
        Upcoming Events
      </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-3 rounded-full"></div>
      </div>
           <h2 className="  font-bold text-blue-500">
  Upcoming Events ({upcomingEvents.length})
</h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {upcomingEvents.map((event) => (
          <div
            key={event._id}
            className="group relative overflow-hidden rounded-xl shadow-lg  cursor-pointer h-64"
          >
       
      
              <img
                src={event.thumbnail}
                alt={event.title}
                className="h-full w-full  object-cover group-hover:scale-110 transition-transform duration-500"
              />

                <div className="absolute inset-0 bg-black/20"></div>

<div className="absolute inset-0 bg-linear from-black/95 via-black/70
 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end">
  

  <div className="w-full flex items-end justify-between gap-3">
    

    <div className="flex flex-col text-amber-400">
      <h2 className="text-base font-bold leading-tight">{event.title}</h2>
      <p className="text-xs opacity-90 my-0.5">{event.eventType}</p>
      <p className="text-xs flex items-center gap-1 mt-0.5">
        <SlLocationPin className="inline-block shrink-0" />
        <span>{event.location}</span>
      </p>
    </div>


    <div className="flex flex-col items-end gap-2 shrink-0">
      <p className="text-xs text-amber-400 flex items-center gap-1 ">
        <span>📅</span> <span>{new Date(event.eventDate).toLocaleDateString()}</span>
      </p>
      <Link
        to={`/event/${event._id}`}
        className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-1.5 rounded-lg font-medium transition-colors whitespace-nowrap shadow-md"
      >
        View Event
      </Link>
    </div>

  </div>

</div>
        
        </div>
        ))}
      </div>

 
      {upcomingEvents.length === 0 && (
        <p className="text-center mt-10 text-gray-500">
          No upcoming events found
        </p>
      )}
    </div>
   </section>
  );
};

export default UpcomingEvents;