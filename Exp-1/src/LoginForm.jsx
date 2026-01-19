import { useState } from 'react'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showRoleSelection, setShowRoleSelection] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)
  const [error, setError] = useState('')

  const handleSubmit = async () => {
    setIsSubmitting(true)
    setError('')

    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Basic validation
    if (!email || !password) {
      setError('Please enter email and password')
      setIsSubmitting(false)
      return
    }
    
    // Show role selection after successful login
    setShowRoleSelection(true)
    setIsSubmitting(false)
  }

  const handleRoleSelection = (role) => {
    setCurrentUser({ email, name: email.split('@')[0], role })
    setIsLoggedIn(true)
    setShowRoleSelection(false)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setCurrentUser(null)
    setEmail('')
    setPassword('')
    setError('')
    setShowRoleSelection(false)
  }

  const handleEdit = (item) => {
    if (currentUser.role !== 'admin') {
      alert('Access Denied: You do not have permission to edit')
      return
    }
    alert(`Editing ${item}`)
  }

  const handleDelete = (item) => {
    if (currentUser.role !== 'admin') {
      alert('Access Denied: You do not have permission to delete')
      return
    }
    alert(`Deleting ${item}`)
  }

  const handleCreate = () => {
    if (currentUser.role !== 'admin') {
      alert('Access Denied: You do not have permission to create')
      return
    }
    alert('Creating new item')
  }

  // Role Selection Screen
  if (showRoleSelection) {
    return (
      <div style={{
        minHeight: '100vh',
        width: '100vw',
        background: 'linear-gradient(to bottom right, #1e3a8a, #1e40af, #2563eb)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        margin: 0,
        position: 'fixed',
        top: 0,
        left: 0
      }}>
        <div style={{ width: '100%', maxWidth: '500px' }}>
          <div style={{
            background: '#1f2937',
            borderRadius: '8px',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
            padding: '32px',
            border: '1px solid #374151'
          }}>
            <h2 style={{
              fontSize: '28px',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '8px',
              color: 'white'
            }}>
              Select Your Role
            </h2>
            <p style={{
              textAlign: 'center',
              color: '#9ca3af',
              fontSize: '14px',
              marginBottom: '32px'
            }}>
              Choose how you want to access the system
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {/* Admin Role Card */}
              <div
                onClick={() => handleRoleSelection('admin')}
                style={{
                  background: '#374151',
                  border: '2px solid #4b5563',
                  borderRadius: '8px',
                  padding: '24px',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = '#dc2626'
                  e.currentTarget.style.background = '#4b5563'
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = '#4b5563'
                  e.currentTarget.style.background = '#374151'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    background: '#dc2626',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '20px',
                    marginRight: '16px'
                  }}>
                    👑
                  </div>
                  <div>
                    <h3 style={{ margin: 0, color: 'white', fontSize: '18px', fontWeight: '600' }}>
                      Admin
                    </h3>
                    <p style={{ margin: '4px 0 0 0', color: '#9ca3af', fontSize: '12px' }}>
                      Full Access
                    </p>
                  </div>
                </div>
                <p style={{ margin: 0, color: '#d1d5db', fontSize: '14px', lineHeight: '1.5' }}>
                  Create, read, update, and delete all items. Full system control.
                </p>
              </div>

              {/* User Role Card */}
              <div
                onClick={() => handleRoleSelection('user')}
                style={{
                  background: '#374151',
                  border: '2px solid #4b5563',
                  borderRadius: '8px',
                  padding: '24px',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = '#2563eb'
                  e.currentTarget.style.background = '#4b5563'
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = '#4b5563'
                  e.currentTarget.style.background = '#374151'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    background: '#2563eb',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '20px',
                    marginRight: '16px'
                  }}>
                    👤
                  </div>
                  <div>
                    <h3 style={{ margin: 0, color: 'white', fontSize: '18px', fontWeight: '600' }}>
                      User
                    </h3>
                    <p style={{ margin: '4px 0 0 0', color: '#9ca3af', fontSize: '12px' }}>
                      View Only
                    </p>
                  </div>
                </div>
                <p style={{ margin: 0, color: '#d1d5db', fontSize: '14px', lineHeight: '1.5' }}>
                  View and read items only. No modification permissions.
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                setShowRoleSelection(false)
                setIsSubmitting(false)
              }}
              style={{
                width: '100%',
                marginTop: '24px',
                padding: '12px',
                background: 'transparent',
                border: '1px solid #4b5563',
                color: '#9ca3af',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '14px'
              }}
              onMouseOver={(e) => {
                e.target.style.background = '#374151'
                e.target.style.color = 'white'
              }}
              onMouseOut={(e) => {
                e.target.style.background = 'transparent'
                e.target.style.color = '#9ca3af'
              }}
            >
              Back to Login
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Login Screen
  if (!isLoggedIn) {
    return (
      <div style={{
        minHeight: '100vh',
        width: '100vw',
        background: 'linear-gradient(to bottom right, #1e3a8a, #1e40af, #2563eb)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        margin: 0,
        position: 'fixed',
        top: 0,
        left: 0
      }}>
        <div style={{ width: '100%', maxWidth: '448px' }}>
          <div style={{
            background: '#1f2937',
            borderRadius: '8px',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
            padding: '32px',
            border: '1px solid #374151',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <h2 style={{
              fontSize: '30px',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '32px',
              color: 'white'
            }}>
              Welcome Back
            </h2>

            {error && (
              <div style={{
                width: '100%',
                padding: '12px',
                marginBottom: '16px',
                background: '#dc2626',
                color: 'white',
                borderRadius: '6px',
                textAlign: 'center',
                fontSize: '14px'
              }}>
                {error}
              </div>
            )}
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <label 
                  htmlFor="email" 
                  style={{
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#d1d5db',
                    marginBottom: '8px',
                    textAlign: 'center'
                  }}
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    background: '#374151',
                    border: '1px solid #4b5563',
                    borderRadius: '8px',
                    color: 'white',
                    fontSize: '16px',
                    outline: 'none'
                  }}
                  placeholder="you@example.com"
                  onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                  onBlur={(e) => e.target.style.borderColor = '#4b5563'}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <label 
                  htmlFor="password" 
                  style={{
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#d1d5db',
                    marginBottom: '8px',
                    textAlign: 'center'
                  }}
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') handleSubmit()
                  }}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    background: '#374151',
                    border: '1px solid #4b5563',
                    borderRadius: '8px',
                    color: 'white',
                    fontSize: '16px',
                    outline: 'none'
                  }}
                  placeholder="••••••••"
                  onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                  onBlur={(e) => e.target.style.borderColor = '#4b5563'}
                />
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <label style={{ display: 'flex', alignItems: 'center' }}>
                  <input
                    type="checkbox"
                    style={{
                      width: '16px',
                      height: '16px',
                      marginRight: '8px',
                      cursor: 'pointer'
                    }}
                  />
                  <span style={{ fontSize: '14px', color: '#d1d5db' }}>Remember me</span>
                </label>
                
                <button 
                  onClick={() => alert('Password reset functionality')}
                  style={{
                    fontSize: '14px',
                    color: '#60a5fa',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textDecoration: 'none'
                  }}
                  onMouseOver={(e) => e.target.style.color = '#93c5fd'}
                  onMouseOut={(e) => e.target.style.color = '#60a5fa'}
                >
                  Forgot password?
                </button>
              </div>

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                style={{
                  width: '100%',
                  background: isSubmitting ? '#1e40af' : '#2563eb',
                  color: 'white',
                  fontWeight: '600',
                  padding: '12px',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  fontSize: '16px',
                  transition: 'all 0.2s'
                }}
                onMouseOver={(e) => {
                  if (!isSubmitting) e.target.style.background = '#1d4ed8'
                }}
                onMouseOut={(e) => {
                  if (!isSubmitting) e.target.style.background = '#2563eb'
                }}
              >
                {isSubmitting ? 'Signing in...' : 'Sign In'}
              </button>
            </div>

            <div style={{ marginTop: '24px', textAlign: 'center' }}>
              <p style={{ color: '#9ca3af', fontSize: '14px' }}>
                Don't have an account?{' '}
                <button 
                  onClick={() => alert('Sign up functionality')}
                  style={{
                    color: '#60a5fa',
                    fontWeight: '500',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '14px'
                  }}
                  onMouseOver={(e) => e.target.style.color = '#93c5fd'}
                  onMouseOut={(e) => e.target.style.color = '#60a5fa'}
                >
                  Sign up
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Dashboard Screen (After Login)
  return (
    <div style={{
      minHeight: '100vh',
      width: '100vw',
      background: '#f3f4f6',
      margin: 0,
      position: 'fixed',
      top: 0,
      left: 0,
      overflowY: 'auto'
    }}>
      {/* Header */}
      <div style={{
        background: 'white',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        padding: '16px 32px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div>
          <h1 style={{ margin: 0, fontSize: '24px', color: '#111827' }}>Dashboard</h1>
          <p style={{ margin: '4px 0 0 0', fontSize: '14px', color: '#6b7280' }}>
            Welcome, {currentUser.name}
          </p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{
            padding: '8px 16px',
            background: currentUser.role === 'admin' ? '#dc2626' : '#2563eb',
            color: 'white',
            borderRadius: '6px',
            fontSize: '12px',
            fontWeight: '600',
            textTransform: 'uppercase'
          }}>
            {currentUser.role}
          </div>
          <button
            onClick={handleLogout}
            style={{
              padding: '8px 16px',
              background: '#374151',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '500'
            }}
            onMouseOver={(e) => e.target.style.background = '#4b5563'}
            onMouseOut={(e) => e.target.style.background = '#374151'}
          >
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ padding: '32px' }}>
        {/* Permissions Info */}
        <div style={{
          background: currentUser.role === 'admin' ? '#dcfce7' : '#dbeafe',
          border: `1px solid ${currentUser.role === 'admin' ? '#86efac' : '#93c5fd'}`,
          padding: '16px',
          borderRadius: '8px',
          marginBottom: '24px'
        }}>
          <h3 style={{
            margin: '0 0 8px 0',
            color: currentUser.role === 'admin' ? '#166534' : '#1e40af',
            fontSize: '16px'
          }}>
            Your Permissions
          </h3>
          <p style={{
            margin: 0,
            color: currentUser.role === 'admin' ? '#166534' : '#1e40af',
            fontSize: '14px'
          }}>
            {currentUser.role === 'admin' 
              ? '✓ You have full access: Create, Read, Update, Delete'
              : '✓ You have view-only access: Read only'
            }
          </p>
        </div>

        {/* Action Buttons */}
        {currentUser.role === 'admin' && (
          <div style={{ marginBottom: '24px' }}>
            <button
              onClick={handleCreate}
              style={{
                padding: '12px 24px',
                background: '#16a34a',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '600'
              }}
              onMouseOver={(e) => e.target.style.background = '#15803d'}
              onMouseOut={(e) => e.target.style.background = '#16a34a'}
            >
              + Create New Item
            </button>
          </div>
        )}

        {/* Data Table */}
        <div style={{
          background: 'white',
          borderRadius: '8px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          overflow: 'hidden'
        }}>
          <div style={{
            padding: '16px 24px',
            borderBottom: '1px solid #e5e7eb'
          }}>
            <h2 style={{ margin: 0, fontSize: '18px', color: '#111827' }}>Data Items</h2>
          </div>
          
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#f9fafb' }}>
                <th style={{ padding: '12px 24px', textAlign: 'left', fontSize: '12px', fontWeight: '600', color: '#6b7280', textTransform: 'uppercase' }}>Item</th>
                <th style={{ padding: '12px 24px', textAlign: 'left', fontSize: '12px', fontWeight: '600', color: '#6b7280', textTransform: 'uppercase' }}>Description</th>
                <th style={{ padding: '12px 24px', textAlign: 'right', fontSize: '12px', fontWeight: '600', color: '#6b7280', textTransform: 'uppercase' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {['Item 1', 'Item 2', 'Item 3'].map((item, index) => (
                <tr key={index} style={{ borderTop: '1px solid #e5e7eb' }}>
                  <td style={{ padding: '16px 24px', color: '#111827', fontSize: '14px' }}>{item}</td>
                  <td style={{ padding: '16px 24px', color: '#6b7280', fontSize: '14px' }}>Description for {item}</td>
                  <td style={{ padding: '16px 24px', textAlign: 'right' }}>
                    <button
                      onClick={() => alert(`Viewing ${item}`)}
                      style={{
                        padding: '6px 12px',
                        background: '#2563eb',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '12px',
                        marginRight: '8px'
                      }}
                    >
                      View
                    </button>
                    <button
                      onClick={() => handleEdit(item)}
                      style={{
                        padding: '6px 12px',
                        background: currentUser.role === 'admin' ? '#f59e0b' : '#d1d5db',
                        color: currentUser.role === 'admin' ? 'white' : '#6b7280',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: currentUser.role === 'admin' ? 'pointer' : 'not-allowed',
                        fontSize: '12px',
                        marginRight: '8px'
                      }}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item)}
                      style={{
                        padding: '6px 12px',
                        background: currentUser.role === 'admin' ? '#dc2626' : '#d1d5db',
                        color: currentUser.role === 'admin' ? 'white' : '#6b7280',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: currentUser.role === 'admin' ? 'pointer' : 'not-allowed',
                        fontSize: '12px'
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}