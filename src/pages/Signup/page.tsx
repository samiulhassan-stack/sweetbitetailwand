import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar/page'

export default function Signup() {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    alert('Account Created Successfully!')
  }

  return (
    <>
      <Navbar />

      <div className="auth-page">
        <div className="auth-box">
          <h1>Create Account</h1>
          <p>Join SweetBite family 🍩</p>

          <form onSubmit={handleSubmit}>

            <div>
              <label>Full Name</label>
              <input type="text" placeholder="Enter full name" required />
            </div>

            <div>
              <label>Email</label>
              <input type="email" placeholder="Enter email" required />
            </div>

            <div>
              <label>Password</label>
              <input type="password" placeholder="Create password" required />
            </div>

            <div>
              <label>Confirm Password</label>
              <input type="password" placeholder="Confirm password" required />
            </div>

            <button type="submit">Signup</button>

            <p>
              Already have an account?{' '}
              <Link to="/login">Login</Link>
            </p>

          </form>
        </div>
      </div>
    </>
  )
}