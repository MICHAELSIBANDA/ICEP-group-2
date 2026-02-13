import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="relative min-h-screen flex flex-col">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/campus-connect-students.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col min-h-screen">

        {/* Navbar */}
        <nav className="bg-transparent text-white px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">CampusConnect</h1>
          <div className="space-x-4">
            <Link
              to="/login"
              className="px-4 py-2 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-blue-600 transition"
            >
              Register
            </Link>
          </div>
        </nav>

        {/* Hero Section */}
        <main className="flex-1 flex items-center justify-center px-6">
          <div className="max-w-4xl text-center bg-white/40 backdrop-blur-md p-10 rounded-2xl shadow-xl">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Welcome to CampusConnect
            </h2>
            <p className="text-gray-800 text-lg mb-8">
              A centralized digital platform that connects students with
              academic support services, campus announcements, and feedback
              systems, all in one place.
            </p>

            <div className="flex justify-center gap-4">
              <Link
                to="/register"
                className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700"
              >
                Get Started
              </Link>
              <Link
                to="/login"
                className="px-6 py-3 bg-gray-200 text-gray-800 rounded-xl font-semibold hover:bg-gray-300"
              >
                Login
              </Link>
            </div>
          </div>
        </main>

        {/* Features Section */}
        <section className="bg-white/50 py-8 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-6 border rounded-xl shadow-sm text-center
              transition transform hover:-translate-y-2
              hover:bg-gray-100 hover:shadow-lg cursor-pointer">
              <h3 className="text-xl font-semibold mb-2">Academic Support</h3>
              <p className="text-gray-800">
                Request tutoring and consultations directly from the platform.
              </p>
            </div>

            <div className="p-6 border rounded-xl shadow-sm text-center
              transition transform hover:-translate-y-2
              hover:bg-gray-100 hover:shadow-lg cursor-pointer">
              <h3 className="text-xl font-semibold mb-2">Campus Announcements</h3>
              <p className="text-gray-800">
                Stay updated with important campus news and events.
              </p>
            </div>

            <div className="p-6 border rounded-xl shadow-sm text-center
              transition transform hover:-translate-y-2
              hover:bg-gray-100 hover:shadow-lg cursor-pointer">
              <h3 className="text-xl font-semibold mb-2">Feedback System</h3>
              <p className="text-gray-800">
                Share your feedback to help improve student services.
              </p>
            </div>

          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white text-center py-4">
          <p className="text-sm">
            © {new Date().getFullYear()} CampusConnect | Student Services Platform
          </p>
        </footer>

      </div>
    </div>
  );
}

export default Home;
