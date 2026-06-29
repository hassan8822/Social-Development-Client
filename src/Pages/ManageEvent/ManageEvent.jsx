import { use, useEffect, useState } from "react";
import { AuthContext } from "../../Povider/AuthProvider";
import { Link } from "react-router";
import Swal from "sweetalert2";


const ManageEvent = () => {
    const {user} =use(AuthContext);
    const [events, setEvents] =useState([]);

    useEffect(() => {
        if(user?.email){
            fetch(`http://localhost:3000/myevents/${user.email}`)
          .then((res) => res.json())
          .then((data) => setEvents(data));
        }
    },[user]);

    const handleDelete = (_id) => {
         Swal.fire({
      title: "Are you sure?",
      text: "This event will be deleted.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Delete",})
      .then((result) => {
        if(result.isConfirmed){
          fetch(`http://localhost:3000/events/${_id}`, {
            method: "DELETE",
          })
          .then((res) => res.json())
          .then((data) => {
            if(data.deletedCount > 0){
               Swal.fire("Deleted!", "Event deleted successfully.", "success");
             const remaining = events.filter(
              (event) => event._id !== _id
             );

             setEvents(remaining);
            }
          });
        }
      });

    }

    return (
        <div className="w-11/12 mx-auto py-10">
                <h2 className="text-3xl font-bold mb-8 text-center">
        Manage My Events
      </h2>
       {
        events.length === 0 ? (
              <div className="text-center py-20">
            <h2 className="text-2xl font-bold">
              No Events Created Yet
            </h2>
          </div> ) : (
              <div className="overflow-x-auto">

            <table className="table">

              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Type</th>
                  <th>Location</th>
                  <th>Date</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>

                {
                  events.map((event) => (
                    <tr key={event._id}>

                      <td>
                        <img
                          src={event.thumbnail}
                          className="w-20 h-14 object-cover rounded"
                        />
                      </td>

                      <td>{event.title}</td>

                      <td>{event.eventType}</td>

                      <td>{event.location}</td>

                      <td>
                        {new Date(event.eventDate).toLocaleDateString()}
                      </td>

                      <td className="space-x-2">

                        <div className="flex items-center gap-5">
                            <Link to={`/updateevents/${event._id}`}>
                          <button className="btn btn-outline btn-success w-25">
                            Update
                          </button>
                        </Link>

                        
<button  onClick={() => handleDelete(event._id)}
  class="flex justify-center items-center gap-2 w-28 h-12 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-linear-to-r from-[#fb7185] via-[#e11d48] to-[#be123c] hover:shadow-xl hover:shadow-red-500 hover:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185]"
>
  <svg viewBox="0 0 15 15" class="w-5 fill-white">
    <svg
      class="w-6 h-6"
      stroke="currentColor"
      stroke-width="1.5"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
        stroke-linejoin="round"
        stroke-linecap="round"
      ></path>
    </svg>
    Button
  </svg>
</button>


                        </div>

                      



{/*                   
                        <button
                          onClick={() => handleDelete(event._id)}
                          className="btn btn-sm btn-error"
                        >
                          Delete
                        </button> */}

                      </td>

                    </tr>
                  ))
         

                
        
       }
       </tbody>
       </table>
            
        </div>
    )
}
</div>
    );
};

export default ManageEvent;