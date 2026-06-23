const Newsletter = () => {
  return (
    <section className="py-20 bg-green-600 text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">

        <h2 className="text-4xl font-bold mb-4">
          Stay Updated
        </h2>

        <p className="text-lg mb-8 text-green-100">
          Subscribe to receive updates about upcoming social service events,
          volunteer opportunities, and community activities.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full md:w-96 text-black"
          />

          <button className="btn border-2 font-semibold btn-outline btn-white">
            Subscribe
          </button>
        </div>

      </div>
    </section>
  );
};

export default Newsletter;