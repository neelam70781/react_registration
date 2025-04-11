import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
function Registration() {
  return (
    <div>Registration
      <div>
      <form>
      <div>
    <label>Name</label>
    <input type="text" id="name1" aria-describedby="emailHelp" placeholder="Enter email" />
  
  </div>
  <div>
    <label>Email address</label>
    <input type="email" id="email1" aria-describedby="emailHelp" placeholder="Enter email" />
  
  </div>
  <div>
    <label>Password</label>
    <input type="password"  id="pass1" placeholder="Password" />
  </div>
  
  <button type="submit">Submit</button>
</form>
      </div>
    </div>
  )
}

export default Registration