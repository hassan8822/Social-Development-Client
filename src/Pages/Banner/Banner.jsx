import { FaArrowRight } from "react-icons/fa";


const Banner = () => {
    return (
       

    <div className = "hero min-h-[80vh] py-16 px-20 bg-linear-to-r from-green-50 to-blue-50 overflow-hidden">
      <div className="hero-content flex-col lg:flex-row-reverse max-w-7xl">

      
        <div className="relative">
          <img
            src="/src/assets/social work.png.jpg"
            alt="Volunteer"
            className="w-6xl rounded-3xl shadow-2xl"
          />

         
        </div>

    
        <div>
          <span className="text-green-600 font-semibold">
            Together For Change
          </span>

          <h1 className="text-5xl md:text-4xl font-bold mt-3">
            Empowering Communities,
            <br />
            One Event At A Time
          </h1>

          <p className="py-6 text-gray-600 max-w-xl">
            Join social service events, connect with volunteers,
            and make a meaningful impact in your local community.
          </p>

          <div className="flex gap-4">
            <button className="btn btn-success text-white">
              Explore Events
              <FaArrowRight />
            </button>

            <button className="btn border-2 font-semibold btn-outline btn-success">
              Create Event
            </button>
          </div>

        
          </div>
        </div>
      </div>
    
  );
};





export default Banner;