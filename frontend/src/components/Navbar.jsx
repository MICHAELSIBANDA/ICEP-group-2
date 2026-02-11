import { Link, useNavigate } from "react-router-dom";

function Navbar({ userRole }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Brand */}
        <Link
          to="/dashboard"
          className="text-2xl font-bold text-blue-600"
        >
          CampusConnect
        </Link>

        {/* Menu */}
        <ul className="flex gap-6 items-center">

          {userRole === "student" && (
            <>
              <li>
                <Link to="/dashboard" className="relative text-gray-700 hover:text-blue-600 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
>
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/support" className="relative text-gray-700 hover:text-blue-600 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
>
                  Support
                </Link>
              </li>
              <li>
                <Link to="/feedback" className="relative text-gray-700 hover:text-blue-600 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
>
                  Feedback
                </Link>
              </li>
            </>
          )}

          {userRole === "admin" && (
            <>
              <li>
                <Link to="/admin-dashboard" className="relative text-gray-700 hover:text-blue-600 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
>
                  Admin Dashboard
                </Link>
              </li>
              <li>
                <Link to="/admin-announcements" className="relative text-gray-700 hover:text-blue-600 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
>
                  Announcements
                </Link>
              </li>
            </>
          )}

          <li>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
