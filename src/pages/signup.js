import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import Footer from "../components/footer";

const Signup = () => {
    const history = useHistory()
    const [form, setform] = useState({
        emailAddress:"",
        password:"",
        numberPhone:"",
    })
    const changeInput = (e) => {
        setform({
            ...form,
            [e.target.name]: e.target.value

        })
    }

    const handleSubmit = (e) => {
        e.preventDefault() 
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_API_URL}register`,form)
        .then((response) => {
            const token = response.data.data
            localStorage.setItem("token", token)
          history.push('/product')
            
        }).catch((err) => {
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
                    <a> Sign up </a>
                    </div>
                    </div>
                    <div class="form" onSubmit={handleSubmit}>
                <div class="input_email">
                      <h1>Email Adress :</h1>
                      <input 
                      class="form-control col-10 mx-auto" 
                      type="text" 
                      placeholder="Email adress" 
                      aria-label=".form-control-lg example"
                      onChange={changeInput} 
                      name='emailAddress' 
                      value={form.emailAddress}></input>
                </div>
                <div class="password">
                    <h1>Password :</h1>
                    <input 
                    class="form-control col-10 mx-auto" 
                    type="password" 
                    placeholder="Enter your password" 
                    aria-label=".form-control-lg example"
                    onChange={changeInput}
                    name='password'
                    value={form.password}></input>
                </div>
                <div class="input_email">
                    <h1>Phone Number :</h1>
                    <input 
                    class="form-control col-10 mx-auto" 
                    type="text" 
                    placeholder="Phone Number" 
                    aria-label=".form-control-lg example"
                    onChange={changeInput} 
                    name='numberPhone'
                    value={form.numberPhone}></input>
              </div>
            </div>
            <div class="d-grid gap-2 col-11 mx-auto">
                <button class="btn btn-secondary" type="button" onClick={handleSubmit}>Sign up</button>
                <button class="btn google btn-secondary" type="button">Sign up with Google</button>
                <a class="dont">Already have an account?</a>
                <Link to='/login' class="btn signbtn btn-secondary" type="button">Login here</Link>
              </div>
                    </section>
                </div>
              
        </div>
        <Footer />
        </div>
    )
}

export default Signup