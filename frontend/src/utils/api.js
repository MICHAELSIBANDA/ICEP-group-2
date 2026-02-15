const API_BASE = `https://icep-group-2.onrender.com/api`;

const authHeaders = () => ({
  Authorization: `Bearer ${localStorage.getItem("token")}`,
  "Content-Type": "application/json"
});

// Get all students (ADMIN)
export const getAllStudents = async () => {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/students`, {
    headers: authHeaders()
  });
  return res.json();
};

// Delete student (ADMIN)
export const deleteStudent = async (id) => {
  return fetch(`${process.env.REACT_APP_API_URL}/api/students/${id}`, {
    method: "DELETE",
    headers: authHeaders()
  });
};

// Restore student (ADMIN)
export const restoreStudent = async (student) => {
  return fetch(`${process.env.REACT_APP_API_URL}/api/students/restore`, {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify(student)
  });
};

