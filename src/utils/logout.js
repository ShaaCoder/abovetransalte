// utils/logout.js
export const logout = () => {
    // Remove the authToken cookie
    document.cookie = 'authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
  
    // Redirect to the login page
    window.location.href = '/login';
  };
  