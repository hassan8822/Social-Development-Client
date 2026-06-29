import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateEvents = () => {
  const event = useLoaderData();


  const handleUpdate = (e) => {
    e.preventDefault();

    const form = e.target;

    const updatedEvent = {
      thumbnail: form.thumbnail.value,
      title: form.title.value,
      eventType: form.eventType.value,
      eventDate: form.eventDate.value,
      location: form.location.value,
      description: form.description.value,
    };

    fetch(`http://localhost:3000/events/${event._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedEvent),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Event Updated Successfully",
          });
        }
      });
  };

  return (
    <div className="max-w-3xl mx-auto my-10">
      <h2 className="text-3xl font-bold text-center mb-8">
        Update Event
      </h2>

      <form onSubmit={handleUpdate} className="space-y-5">

        
        <input
          type="text"
          name="title"
          defaultValue={event.title}
          placeholder="Event Title"
          className="input input-bordered w-full"
        />

        <input
          type="text"
          name="thumbnail"
          defaultValue={event.thumbnail}
          placeholder="Thumbnail URL"
          className="input input-bordered w-full"
        />



        

        <select
          name="eventType"
          defaultValue={event.eventType}
          className="select select-bordered w-full"
        >
          <option>Cleanup</option>
          <option>Plantation</option>
          <option>Donation</option>
          <option>Social Service</option>
        </select>

        <input
          type="date"
          name="eventDate"
          defaultValue={event.eventDate?.slice(0, 10)}
          className="input input-bordered w-full"
        />

        <input
          type="text"
          name="location"
          defaultValue={event.location}
          placeholder="Location"
          className="input input-bordered w-full"
        />

        <textarea
          name="description"
          defaultValue={event.description}
          className="textarea textarea-bordered w-full"
          placeholder="Description"
        ></textarea>

        <button className="btn btn-primary w-full">
          Update Event
        </button>

      </form>
    </div>
  );
};

export default UpdateEvents;