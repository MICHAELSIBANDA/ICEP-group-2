// Minimal auth utilities used by pages/Dashboard.jsx
export function isStudentLoggedIn() {
  try {
    const t = !!localStorage.getItem('studentToken');
    console.debug('[auth] isStudentLoggedIn ->', t);
    return t;
  } catch (e) {
    return false;
  }
}

export function logoutStudent() {
  try {
    console.debug('[auth] logoutStudent');
    localStorage.removeItem('studentToken');
  } catch (e) {
    // ignore
  }
}

// helper to set a token (useful for testing)
export function loginStudent(token = 'dummy-token') {
  try {
    console.debug('[auth] loginStudent token=', token);
    localStorage.setItem('studentToken', token);
  } catch (e) {
    // ignore
  }
}
