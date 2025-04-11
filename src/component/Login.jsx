import React from 'react'

function Login() {
  return (
    <div>Login
<div>
<form>
      
  <div>
    <label>Email address</label>
    <input type="email" id="email1" aria-describedby="emailHelp" placeholder="Enter email" />
  
  </div>
  <div>
    <label>Password</label>
    <input type="password"  id="pass1" placeholder="Password" />
  </div>
  
  <button type="submit">Login</button>
</form>

</div>

    </div>
  )
}

export default Login