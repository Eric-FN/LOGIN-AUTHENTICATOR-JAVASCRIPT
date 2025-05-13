
📁 Project: Session Validation with LocalStorage

🧠 Description:
This project implements a simple login and logout logic using LocalStorage to store user data. Upon login, user information is fetched from a mock API (JSONPlaceholder) and stored in the browser. The UI dynamically displays details of the logged-in user such as name, email, username, company, phone, and website. When the user logs out, the data is removed from LocalStorage.

🚀 Features:
- Login using mock data from the JSONPlaceholder API
- Logout functionality with LocalStorage data removal
- Dynamic display of logged-in user information
- Automatic UI update on login or logout
- Conditional display of login/logout buttons based on session status

🛠️ Technologies Used:
- HTML
- CSS
- JavaScript (ES6)
- LocalStorage
- Fetch API

📦 How to Use:
1. When the page loads, the script checks if a user is logged in.
2. If no user is logged in, the login button is shown.
3. Clicking "Login" fetches user data from the API and stores it in LocalStorage.
4. The UI updates to show the user's details.
5. Clicking "Logout" removes the user data and refreshes the UI.

🔧 Notes:
- This project simulates login functionality without a real backend.
- The API used (`https://jsonplaceholder.typicode.com/users/1`) returns static data.
- Ideal for learning and testing LocalStorage and DOM manipulation.

🧪 Future Improvements:
- Form validation for real login inputs
- Support for multiple users
- Integration with real authentication (JWT, OAuth, etc.)
- Improved UI styling

  
