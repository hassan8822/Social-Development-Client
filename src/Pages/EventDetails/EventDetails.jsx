import { use } from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";

import { AuthContext } from "../../Povider/AuthProvider";


const EventDetails = () => {
    const event = useLoaderData();
    const {user} =use(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleJoinEvent = () => {
      if (!user) {
        navigate("/login", {
          state: location.pathname,
        });
        return;
      }

      Swal.fire({
        icon: "success",
        title: "Successfully Joined!",
        text: "Thank you for joining this event.",
      });
    };

    return (
        <div className="max-w-7xl mx-auto py-10 px-4 ">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                <div className="lg:col-span-2">
                    <img className="w-full h-[300] object-cover rounded-xl"
             src={event.thumbnail} alt="" />

                 <h1 className="text-3xl font-bold mt-6">{event.title}</h1>
                       <div className="divider"></div>
                      <h2 className="text-2xl font-semibold mb-4">
                  Event Description</h2> 

                      <p className="mt-4 text-gray-600">{event.description}</p>  

                </div>


                <div className="space-y-6">

         <div className="bg-base-200 p-6 rounded-xs">
        <h3 className="text-2xl font-bold mb-5">
          Event Schedule
        </h3>

        <p>
          <span className="font-semibold">Date:</span>{" "}
          {new Date(event.eventDate).toLocaleDateString()}
        </p>

          <p >
          <span className="font-semibold">Location:</span> {event.location}
        </p>
            <p>
          <span className="font-semibold" >Type:</span> {event.eventType}
        </p>

            </div>
            <div className="divider"></div>


            <div className="bg-base-200 p-6 rounded-xl">
                  <h3 className="text-2xl font-bold mb-5">
          Organizer Details
        </h3>

          <p><span className="font-semibold">Name:</span> Volunteer Hub</p>
        <p><span className="font-semibold">Email: </span>{event.email}</p>
        <p><span className="font-semibold">Phone: </span> +880 123456789</p>

            </div>

  <div className="divider"></div>

     <div className=" p-6">
     <h3 className="text-2xl font-semibold">Event Guidelines</h3>
    <ul className="list-disc ml-6 mt-2">
     <li>Arrive 15 minutes early.</li>
     <li>Bring a water bottle.</li>
     <li>Follow volunteer instructions.</li>
     <li>Maintain cleanliness.</li>
     </ul>
     </div>

          
  <div className="divider"></div>


             <div className="bg-base-200 p-6 rounded-xl">
        <h3 className="text-2xl font-bold mb-4">
          Map Location
        </h3>

        <a
          href={`https://www.google.com/maps/search/${event.location}`}
          target="_blank"
          rel="noreferrer"
          className="btn btn-outline w-full"
        >
          Open in Maps
        </a>
      </div>
         
      <button onClick={handleJoinEvent} className="btn border-2 font-semibold btn-outline btn-success">
        Join Event
      </button>
    </div>
    </div>
    </div>


            
      
    );
};

export default EventDetails;