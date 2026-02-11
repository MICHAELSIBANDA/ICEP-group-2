import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { getUserFromToken } from "../utils/auth";

function Layout({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const decodedUser = getUserFromToken();

    if (!decodedUser) {
      navigate("/login");
      return;
    }
    setUser(decodedUser);
  }, [navigate]);

  if (!user) {
    return null; 
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar userRole={user.role} />

      <main className="flex-grow max-w-7xl mx-auto px-6 py-8">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
