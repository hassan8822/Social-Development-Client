
import { AuthContext } from "../../Povider/AuthProvider";


import { use, useEffect,  useState } from "react";

import { Link } from "react-router";
import { SlLocationPin } from "react-icons/sl";

const JoinedEvent = () => {
  const { user } = use(AuthContext);

  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/joinedevents/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          
          setEvents(data);
        });
    }
  }, [user]);

 const filteredEvents = events.filter((event) =>
  event.title.toLowerCase().includes(search.toLowerCase()));



  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="w-11/12 max-w-7xl mx-auto">

        <div className="bg-linear-to-r from-blue-600 to-purple-600 rounded-2xl text-white p-8 mb-8 shadow-lg">
          <h2 className="text-3xl font-bold">My Joined Events</h2>
          <p className="mt-2 text-blue-100">
            Keep track of all the events you've joined.
          </p>

          <div className="mt-6 inline-block bg-white/20 backdrop-blur-md px-5 py-3 rounded-xl">
            <p className="text-sm">Total Joined Events</p>
            <h3 className="text-3xl font-bold">{events.length}</h3>
          </div>
        </div>

        <div className="mb-8">
          <input
            type="text"
            placeholder="Search by event title..."
            className="input input-bordered w-full md:w-96"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {filteredEvents.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-xl shadow">
            <h2 className="text-2xl font-bold">
              No Joined Events Found
            </h2>

            <p className="text-gray-500 mt-2">
              Join an event and it will appear here.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <div
                key={event._id}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={event.thumbnail}
                    alt={event.title}
                    className="h-56 w-full object-cover group-hover:scale-110 transition duration-500"
                  />

                  <div className="absolute top-4 left-4 bg-white rounded-lg px-3 py-2 shadow">
                    <p className="text-xs text-gray-500">Date</p>
                    <p className="font-bold text-blue-600">
                      {new Date(event.eventDate).toLocaleDateString()}
                    </p>
                  </div>

                  <span className="absolute top-4 right-4 badge badge-success">
                    Joined
                  </span>
                </div>

                <div className="p-5">
                  <h2 className="text-xl font-bold mb-3">
                    {event.title}
                  </h2>

                  <p className="flex items-center gap-2 text-gray-600 mb-2">
                    <SlLocationPin />
                    {event.location}
                  </p>

                  <p className="text-sm text-blue-600 font-semibold mb-5">
                    {event.eventType}
                  </p>
                <Link to="/manageevent">
           <button className="btn border-2 font-semibold btn-outline btn-success">
             Manage My Events
           </button>
            </Link>


                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default JoinedEvent;