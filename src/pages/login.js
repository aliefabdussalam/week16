import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import Footer from "../components/footer";
import "../css/login.css";

const Login = () => {
    const [user, setUser] = useState({
        emailAddress: "",
        password: "",
      })
      
      const setData=(event)=>{
        setUser({
          ...user,
          [event.target.name]: event.target.value
        })
      }
      const history = useHistory();
      const submitLogin = (e) => {
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_API_URL}login`,user)
         .then((response) => {
            const token = response.data.data
            localStorage.setItem("token", token)
            localStorage.setItem('isLogin', "true")
          history.push('/product')
          console.log(response)
        }).catch((err) => {
          alert("email/password salah")
          console.log(err)
        })
      }
    return(
        <div>
        
            <div class="row">
                <div class="img col-lg-6" >
                    <img src="https://github.com/aliefabdussalam/week5/blob/main/login/img/robert-bye-95vx5QVl9x4-unsplash%202.png?raw=true" alt=""></img>
                </div>
                <div class="col-lg-6 col-sm-12">
                    <section class="content">
                    <div class="navbar">
                    <div class="logo">
                  <img src="https://github.com/aliefabdussalam/week5/blob/main/landingpage/img/coffee%201.png?raw=true" alt="https://github.com/aliefabdussalam/week5/blob/main/landingpage/img/coffee%201.png?raw=true"></img>
                  <h1>Coffee Shop</h1>
                    </div>
                    <div class="action-login">
                    <a> Login </a>
                    </div>
                    </div>
                    <div class="form" onSubmit={submitLogin}>
                <div class="input_email">
                      <h1>Email Adress :</h1>
                      <input 
                      class="form-control col-10 mx-auto" 
                      type="text" 
                      placeholder="Email adress" 
                      aria-label=".form-control-lg example"
                      onChange={setData} 
                      name="emailAddress"
                      value={user.emailAddress}></input>
                </div>
                <div class="password">
                    <h1>Password :</h1>
                    <input 
                    class="form-control col-10 mx-auto" 
                    type="password" 
                    placeholder="Enter your password" 
                    aria-label=".form-control-lg example"
                    onChange={setData} 
                    name="password"
                    value={user.password}></input>
                </div>
                <div class="forgot_password" >
                    <h1 href="">Forgot password?</h1>  
                </div>
            </div>
            <div class="d-grid gap-2 col-11 mx-auto">
                <button class="btn btn-secondary" type="button" onClick={submitLogin}>Login</button>
                <button class="btn google btn-secondary" type="button">Login with Google</button>
                <a class="dont">Don’t have an account?</a>
                <Link to="/signup" class="btn signbtn btn-secondary col-12" type="button">Sign up here</Link>
              </div>
                    </section>
                </div>
              
        </div>
        <Footer />
        </div>
    )
}

export default Login