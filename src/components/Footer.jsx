function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center py-4">
        <div className="max-w-7xl mx-auto px-6 py-4 text-center text-sm text-white">
        © {new Date().getFullYear()} CampusConnect. All rights reserved.
      </div>
      </footer>
  );
}

export default Footer;