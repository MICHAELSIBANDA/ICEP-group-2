const BASE_URL = "http://localhost:3001";

export const getAllStudents = async () => {
  const token = localStorage.getItem("token");
  const res = await fetch(`${BASE_URL}/api/students`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
};

export const deleteStudent = async (studentId) => {
  const token = localStorage.getItem("token");
  return fetch(`${BASE_URL}/api/students/${studentId}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const restoreStudent = async (student) => {
  const token = localStorage.getItem("token");
  return fetch(`${BASE_URL}/api/students/restore/${student.id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(student),
  });
};
