import React from 'react';
import { useNavigate } from 'react-router-dom';
import users from "../assets/user.json";


function loginComponent() {
  const navigate = useNavigate();
  const handleLogin = () => {
    const email = document.getElementById("inputEmail").value;
    const password = document.getElementById("inputPassword").value;
    // console.log("Users ", users);
    for(let user in users){
      if(users[user].email === email && users[user].password === password){
        console.log("Login success");
        navigate('/about');
        break;
      } else if(users[user].email !== email || users[user].password !== password){
        alert("Wrong password or email")
        console.log("Login fail, wrong email or password");
        break;
      }
    }
  };

  return (
    <>
      <div className='login-wrapper'>
        <h4>Email: </h4>
        <input id="inputEmail" placeholder="Email" />
        <h4>Password: </h4>
        <input id="inputPassword" type="password" placeholder="Password" />
        <button id="buttonLogin" onClick={handleLogin}>Login</button>
      </div>
    </>
  );
}

export default loginComponent;
