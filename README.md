React + Vite login system with role-based access control (Admin/User).
Features

Login with email/password
Role selection (Admin/User)
Dashboard with permission-based actions
Responsive UI with modern design

Tech Stack

React 18+ (useState hooks)
Vite (dev server & build tool)
JavaScript ES6+
Inline CSS

Installation
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
