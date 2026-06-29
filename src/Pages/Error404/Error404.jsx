import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-linear-to-r from-green-100 via-white to-green-100 flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-green-600">404</h1>

        <p className="text-6xl mt-2">😢</p>

        <h2 className="text-4xl font-bold mt-4">
          Page Not Found
        </h2>

        <p className="text-gray-600 mt-3 max-w-lg mx-auto">
          Sorry, the page you're looking for doesn't exist or has been removed.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 border border-green-600 text-green-600 rounded-lg hover:bg-green-600 hover:text-white transition"
          >
            Go Back
          </button>

          <Link to="/">
            <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;