import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { getUserFromToken } from "../utils/auth";
import { getAllStudents, deleteStudent, restoreStudent } from "../utils/api";

function AdminStudents() {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [toast, setToast] = useState({ message: "", visible: false, type: "success", undoId: null });
  const [deletedStudent, setDeletedStudent] = useState(null);
  const navigate = useNavigate();

  // Fetch students
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return navigate("/login");

    const user = getUserFromToken(token);
    if (user.role !== "admin") return navigate("/login");

    const fetchStudents = async () => {
      const data = await getAllStudents();
      setStudents(data);
      setFilteredStudents(data);
    };
    fetchStudents();
  }, [navigate]);

  // Search filter
  useEffect(() => {
    const lowerSearch = search.toLowerCase();
    const filtered = students.filter(
      (s) =>
        s.studentName.toLowerCase().includes(lowerSearch) ||
        s.studentNumber.toLowerCase().includes(lowerSearch)
    );
    setFilteredStudents(filtered);
  }, [search, students]);

  // Sorting
  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") direction = "desc";

    const sorted = [...filteredStudents].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setFilteredStudents(sorted);
    setSortConfig({ key, direction });
  };

  // Show toast with optional undo
  const showToast = (message, type = "success", undoId = null) => {
    setToast({ message, visible: true, type, undoId });
    setTimeout(() => setToast({ message: "", visible: false, type, undoId: null }), 5000);
  };

  // Delete student
  const handleDelete = async (studentId) => {
    const student = students.find((s) => s.id === studentId);
    if (!student) return;

    if (!window.confirm(`Delete ${student.studentName}?`)) return;

    // Save full student (including password) for undo
    setDeletedStudent(student); // <-- Make sure this includes student.password!

    // Remove from state for UI
    setStudents(students.filter((s) => s.id !== studentId));
    setFilteredStudents(filteredStudents.filter((s) => s.id !== studentId));

    showToast(`Deleted ${student.studentName}`, "success", studentId);

    const response = await deleteStudent(studentId);
    if (!response.ok) {
      // If delete failed, restore immediately
      setStudents((prev) => [...prev, student]);
      setFilteredStudents((prev) => [...prev, student]);
      showToast(`Failed to delete ${student.studentName}`, "error");
      setDeletedStudent(null);
    }
  };


  // Undo deletion
  const handleUndo = async () => {
    if (!deletedStudent) return;

    // Restore full student
    setStudents((prev) => [...prev, deletedStudent]);
    setFilteredStudents((prev) => [...prev, deletedStudent]);

    // Send full student object (including password) to backend
    await restoreStudent(deletedStudent);

    setDeletedStudent(null);
    setToast({ message: "", visible: false, type: "success", undoId: null });
  };


  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-6 py-6">
        <h1 className="text-3xl font-bold mb-6">All Students</h1>

        {/* Search */}
        <div className="mb-4 flex justify-between items-center">
          <input
            type="text"
            placeholder="Search by name or student number..."
            className="border px-4 py-2 rounded w-80"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Table */}
        <div className="overflow-x-auto bg-white shadow rounded-lg">
          <table className="min-w-full border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th
                  className="text-left px-4 py-3 border cursor-pointer"
                  onClick={() => handleSort("studentName")}
                >
                  Name {sortConfig.key === "studentName" ? (sortConfig.direction === "asc" ? "▲" : "▼") : ""}
                </th>
                <th
                  className="text-left px-4 py-3 border cursor-pointer"
                  onClick={() => handleSort("studentNumber")}
                >
                  Student Number {sortConfig.key === "studentNumber" ? (sortConfig.direction === "asc" ? "▲" : "▼") : ""}
                </th>
                <th className="text-left px-4 py-3 border">Role</th>
                <th className="text-left px-4 py-3 border">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredStudents.length === 0 ? (
                <tr>
                  <td className="px-4 py-3 border" colSpan="4">
                    No students found.
                  </td>
                </tr>
              ) : (
                filteredStudents.map((student) => (
                  <tr key={student.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 border">{student.studentName}</td>
                    <td className="px-4 py-3 border">{student.studentNumber}</td>
                    <td className="px-4 py-3 border">{student.role}</td>
                    <td className="px-4 py-3 border flex gap-2">
                      <button
                        onClick={() => handleDelete(student.id)}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Toast */}
        <div className="fixed top-4 right-4 z-50">
          {toast.visible && (
            <div
              className={`transform transition-transform duration-300 ${
                toast.visible ? "translate-x-0" : "translate-x-20 opacity-0"
              } ${toast.type === "success" ? "bg-green-500" : "bg-red-500"} 
              text-white px-4 py-2 rounded shadow-lg flex items-center justify-between gap-4`}
            >
              <span>{toast.message}</span>
              {toast.undoId && (
                <button onClick={handleUndo} className="underline text-white font-bold">
                  Undo
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default AdminStudents;
