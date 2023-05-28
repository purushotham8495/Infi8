document.addEventListener('DOMContentLoaded', function() {
    var loginForm = document.getElementById('login_Form');
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
  
      // Get username and password values
      var username = document.getElementById('email').value;
      var password = document.getElementById('password').value;
  
      // Call the authentication function
      authenticateUser(email, password);
    });
  });
  
  function authenticateUser(email, password) {
    // Simulate authentication logic
    if (email === 'student@gmail.com' && password === 'student123') {
      alert('Student logged in successfully!');
      // Perform further actions for student login
    } else if (email === 'faculty@gmail.com' && password === 'faculty123') {
      alert('Faculty logged in successfully!');
      // Perform further actions for faculty login
    } else if (email === 'staff@gmail.com' && password === 'staff123') {
      alert('Staff logged in successfully!');
      // Perform further actions for staff login
    } else {
      alert('Invalid username or password!');
    }
  }