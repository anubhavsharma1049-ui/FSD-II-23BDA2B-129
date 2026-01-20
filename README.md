**React + Vite login system with role-based access control (Admin/User).**

*Features:-*

Login with email/password
Role selection (Admin/User)
Dashboard with permission-based actions
Responsive UI with modern design

<img width="1318" height="790" alt="Screenshot 2026-01-20 at 12 29 36 PM" src="https://github.com/user-attachments/assets/bab43192-96c1-481f-bf84-4896309f03bf" />

<img width="1110" height="767" alt="Screenshot 2026-01-20 at 12 30 08 PM" src="https://github.com/user-attachments/assets/e0900b2d-26fd-43df-81a4-8b43746bcacb" />

<img width="1450" height="739" alt="Screenshot 2026-01-20 at 12 30 22 PM" src="https://github.com/user-attachments/assets/70d8efb6-6b50-42b6-bbd6-5b8087cccbfc" />

*Tech Stack:-*

React 18+ (useState hooks)
Vite (dev server & build tool)
JavaScript ES6+
Inline CSS

*Installation:-*
bash# Create Vite project
npm create vite@latest fsd_login -- --template react
cd fsd_login

# Install dependencies
npm install

# Add LoginForm.jsx to src/ folder
# Update App.jsx:
import LoginForm from './LoginForm'
function App() {
  return <LoginForm />
}
export default App

# Run development server
npm run dev
App runs at http://localhost:5173/
Commands
bashnpm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
How It Works
Flow: Login → Role Selection → Dashboard
Permissions:

Admin: Create, Read, Update, Delete
User: Read only

State: Uses useState for email, password, auth status, user role, and errors.
Key Functions
javascripthandleSubmit()          // Process login
handleRoleSelection()   // Set role
handleLogout()          // Clear session
handleEdit/Delete()     // Admin-only (checks role)
Customization
Backend API:
javascriptconst response = await fetch('YOUR_API/login', {
  method: 'POST',
  body: JSON.stringify({ email, password })
})
