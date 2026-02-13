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

  //  Auth check + fetch
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

  //  Search
  useEffect(() => {
    const lower = search.toLowerCase();
    setFilteredStudents(
      students.filter(
        s =>
          s.studentName.toLowerCase().includes(lower) ||
          s.studentNumber.toLowerCase().includes(lower)
      )
    );
  }, [search, students]);

  // Sort
  const handleSort = (key) => {
    const direction =
      sortConfig.key === key && sortConfig.direction === "asc" ? "desc" : "asc";

    const sorted = [...filteredStudents].sort((a, b) =>
      a[key] < b[key] ? (direction === "asc" ? -1 : 1) :
      a[key] > b[key] ? (direction === "asc" ? 1 : -1) : 0
    );

    setFilteredStudents(sorted);
    setSortConfig({ key, direction });
  };

  // Toast
  const showToast = (message, type = "success", undoId = null) => {
    setToast({ message, visible: true, type, undoId });
    setTimeout(() => setToast({ message: "", visible: false, type, undoId: null }), 5000);
  };

  // Delete
  const handleDelete = async (id) => {
    const student = students.find(s => s.id === id);
    if (!student || !window.confirm(`Delete ${student.studentName}?`)) return;

    setDeletedStudent(student);
    setStudents(students.filter(s => s.id !== id));
    setFilteredStudents(filteredStudents.filter(s => s.id !== id));

    showToast(`Deleted ${student.studentName}`, "success", id);

    const res = await deleteStudent(id);
    if (!res.ok) {
      setStudents(prev => [...prev, student]);
      setFilteredStudents(prev => [...prev, student]);
      showToast("Delete failed", "error");
    }
  };

  // Undo
  const handleUndo = async () => {
    if (!deletedStudent) return;

    setStudents(prev => [...prev, deletedStudent]);
    setFilteredStudents(prev => [...prev, deletedStudent]);

    await restoreStudent(deletedStudent);
    setDeletedStudent(null);
    setToast({ message: "", visible: false });
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-6 py-6">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">All Students</h1>

        <input
          className="border px-4 py-2 rounded w-80 mb-4"
          placeholder="Search..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        <div className="bg-white shadow rounded-lg overflow-x-auto">
          <table className="min-w-full border">
            <thead className="bg-gray-100">
              <tr>
                <th onClick={() => handleSort("studentName")} className="cursor-pointer p-3 border">Name</th>
                <th onClick={() => handleSort("studentNumber")} className="cursor-pointer p-3 border">Student Number</th>
                <th className="p-3 border">Role</th>
                <th className="p-3 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map(s => (
                <tr key={s.id} className="hover:bg-gray-50">
                  <td className="p-3 border">{s.studentName}</td>
                  <td className="p-3 border">{s.studentNumber}</td>
                  <td className="p-3 border">{s.role}</td>
                  <td className="p-3 border">
                    <button
                      onClick={() => handleDelete(s.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {toast.visible && (
          <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow">
            {toast.message}
            {toast.undoId && (
              <button onClick={handleUndo} className="underline ml-2">Undo</button>
            )}
          </div>
        )}
      </div>
    </Layout>
  );
}

export default AdminStudents;

