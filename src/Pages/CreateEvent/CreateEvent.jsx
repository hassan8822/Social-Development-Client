import { use, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { AuthContext } from "../../Povider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";


const CreateEvent = () => {
    const {user} = use(AuthContext)
    const [eventDate, setEventDate] = useState(new Date ())
   const navigate = useNavigate();
    const handleCreateEvent = (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const description = e.target.description.value;
        const eventType = e.target.eventType.value;
        const thumbnail = e.target.thumbnail.value;
        const location  = e.target.location.value;
        const eventData = {
          title, description, eventType, thumbnail, location, eventDate,
         
        createdBy: user?.email,
        };

        fetch("http://localhost:3000/events", {
          method: "POST",
          headers: {
            "content-type" : "application/json"
          },
          body: JSON.stringify(eventData),
        })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
             Swal.fire({
            title: "Success!",
            text: "Event Created Successfully",
            icon: "success",
        });

         e.target.reset();
         setEventDate(new Date());
         navigate("/upcomingevents") ;
      }
    });
  }  

    
    return (
        <div className="max-w-3xl mx-auto my-10">
        <h2 className="text-3xl font-bold text-center mb-8">Create Event</h2>
         <form onSubmit={handleCreateEvent} className="space-y-4 bg-base-200 p-6 rounded-xl">
            <h2 className="font-bold">Title</h2>
            <input type="text" name="title" placeholder="Event Title" 
            className="input input-bordered w-full" required/>
              <h2 className="font-bold ">Description</h2>
              <textarea
                 name="description"
                  placeholder="Event Description"
                  className="textarea textarea-bordered w-full"
                  required >


              </textarea>

              <select  name="eventType"
                className="select select-bordered w-full"
                  required>
                    <option value="">Select Event Type</option>
                    <option value="CleanUp">CleanUp</option>
                    <option value="Plantation">Plantation</option>
                    <option value="Donation">Donation</option>
                    <option value="Food Distribution">Food Distribution</option>

                     </select>
                       <input
                       type="url" name="thumbnail"
                        placeholder="Thumbnail Image URL"
                      className="input input-bordered w-full"  required
                                       
                         />
                    <input
                      type="text" name="location" placeholder="Event Location"
                      className="input input-bordered w-full"  required
         
                        />
                      <div>
                      
                        <label className="font-semibold block mb-2">Event Date </label>
                        <DatePicker className="input input-bordered w-full" selected={eventDate} 
                        onChange={(date) => {
                            setEventDate(date);
                        }} minDate={new Date()}
                        >     
                        </DatePicker>
                      </div>

                        <input  className="input input-bordered w-full bg-gray-100"
                  type="email" value={user?.email || ""}
                readOnly
         
        />
        <div className="flex gap-5">
            <button  className="btn btn-primary " type="submit" >
          Create Event
        </button>
         <button  className="btn btn-soft" type="button"  onClick={() => navigate(-1)} >
          Cancel
        </button>

        </div>
        


      </form>   
        </div>
    );
};

export default CreateEvent;