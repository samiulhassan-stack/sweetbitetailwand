import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar/page'

export default function Login() {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    alert('Login Successful!')
  }

  return (
    <>
      <Navbar />

      <div className="auth-page">
        <div className="auth-box">
          <h1>Login</h1>
          <p>Welcome back to SweetBite 🍰</p>

          <form onSubmit={handleSubmit}>

            <div>
              <label>Email</label>
              <input type="email" placeholder="Enter email" required />
            </div>

            <div>
              <label>Password</label>
              <input type="password" placeholder="Enter password" required />
            </div>

            <button type="submit">Login</button>

            <p>
              Don't have an account?{' '}
              <Link to="/signup">Signup</Link>
            </p>

          </form>
        </div>
      </div>
    </>
  )
}