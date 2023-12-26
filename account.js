  function showSignupForm() {
            document.getElementById('loginForm').style.display = 'none';
            document.getElementById('signupForm').style.display = 'block';
        }

        function showLoginForm() {
            document.getElementById('loginForm').style.display = 'block';
            document.getElementById('signupForm').style.display = 'none';
        }

        function login() {
            var username = document.getElementById('loginUsername').value;
            var password = document.getElementById('loginPassword').value;

            // Perform validation, for example:
            if (username === '' || password === '') {
                alert('Please enter both username and password');
                return false; // Prevent form submission
            }

            // Your login logic here (can be an AJAX request to the server)

            return true; // Allow form submission
        }

        function signup() {
            var username = document.getElementById('signupUsername').value;
            var password = document.getElementById('signupPassword').value;

            // Perform validation, for example:
            if (username === '' || password === '') {
                alert('Please enter both username and password');
                return false; // Prevent form submission
            }

            // Your signup logic here (can be an AJAX request to the server)

            return true; // Allow form submission
        }