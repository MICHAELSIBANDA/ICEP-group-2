const API_BASE = `${import.meta.env.VITE_API_URL}/api`;

const authHeaders = () => ({
  Authorization: `Bearer ${localStorage.getItem("token")}`,
  "Content-Type": "application/json"
});

// Get all students (ADMIN)
export const getAllStudents = async () => {
  const res = await fetch(`${API_BASE}/students`, {
    headers: authHeaders()
  });
  return res.json();
};

// Delete student (ADMIN)
export const deleteStudent = async (id) => {
  return fetch(`${API_BASE}/students/${id}`, {
    method: "DELETE",
    headers: authHeaders()
  });
};

// Restore student (ADMIN)
export const restoreStudent = async (student) => {
  return fetch(`${API_BASE}/students/restore`, {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify(student)
  });
};

