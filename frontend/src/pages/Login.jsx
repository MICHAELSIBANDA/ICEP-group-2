import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [studentNumber, setStudentNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");

  if (!studentNumber || !password) {
    setError("Please enter your student number and password.");
    return;
  }

  try {
    const response = await fetch(
      `https://icep-group-2.onrender.com/api/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          studentNumber,
          password
        })
      }
    );

    const data = await response.json();

    if (!response.ok) {
      setError(data.message || "Login failed");
      return;
    }

    // Save JWT token
    localStorage.setItem("token", data.token);

    // Decode token to check role & then Redirect to dashboard
 
    const payload = JSON.parse(atob(data.token.split(".")[1]));

    if (payload.role === "admin") {
      navigate("/admin-dashboard");
    } else {
      navigate("/dashboard");
    }

  } catch (error) {
    setError("Unable to connect to the server");
  }
};


return (
  <div className="min-h-screen relative flex items-center justify-center px-4">
    
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/campus-connect-students.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
    </div>

    {/* Login Card */}
    <div className="relative z-10 bg-white/60 backdrop-blur-md w-full max-w-md p-8 rounded-xl shadow-xl">
      
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
        CampusConnect Login
      </h1>

      {error && (
        <div className="bg-red-100 text-red-700 p-3 rounded mb-4 text-sm">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Student Number
          </label>
          <input
            type="text"
            value={studentNumber}
            onChange={(e) => setStudentNumber(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g. 223456789"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>

      <div>
        <p className="text-center text-sm text-gray-800 mt-6">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            Register here
          </Link>
        </p>
      </div>



    </div>
  </div>
);

}

export default Login;
