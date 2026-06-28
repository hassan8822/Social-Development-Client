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

                        <Link to={`/updateevent/${event._id}`}>
                          <button className="btn btn-sm btn-info">
                            Update
                          </button>
                        </Link>

                        <button
                          onClick={() => handleDelete(event._id)}
                          className="btn btn-sm btn-error"
                        >
                          Delete
                        </button>

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