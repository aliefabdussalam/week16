import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../css/navbar.css";
import "bootstrap/dist/css/bootstrap.min.css"
import {
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem, Container, Input
} from 'reactstrap';

const NavbarItem = ({isLogin}) =>{

  const [isOpen,setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen);
  const history = useHistory();

  const logOut = () => {
      localStorage.removeItem('isLogin')
      localStorage.removeItem('token')
      history.push('/')
  }
  return (
    <div className="navbar p-0">
      <nav class="navbar navbar-expand-lg navbar-light bg-white mt-0">
        <div class="logo">
        <img src="https://github.com/aliefabdussalam/week5/blob/main/landingpage/img/coffee%201.png?raw=true" alt=""></img>
            <h1>
            Coffe Shop
            </h1>
        </div>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <Link class="nav-link" to="/">Home</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/product">Product</Link>
            </li> 
            <li class="nav-item">
              <Link class="nav-link" to="#">Your Cart</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" href="#">History</Link>
            </li>
          </ul>
          <div class="secondary-menu">
          {
                            isLogin !== 'true'?(
                                <div className="d-flex align-items-center  ">
                                    <NavItem className="me-1 fw-bold">
                                            <Link className='text-decoration-none text-dark me-3' to ='/login'>Login</Link>
                                    </NavItem>
                                    <NavItem>
                                            <Link className='btn text-dark cursor rounded-pill bgyellow ' to ='/register'>SignUp</Link>
                                    </NavItem> 
                                </div>
                            ):(
                                <div className='d-flex align-items-center '>
                                    <Input className = 'p-1 fs15' placeholder='Search' type="text" name=""/>
                                    <div className="chat">
                                        <div className="notif">
                                            <p>1</p>
                                        </div>
                                        <img src="https://image.flaticon.com/icons/png/512/1380/1380370.png" alt="" />
                                    </div>
                                    
                                        <UncontrolledDropdown nav inNavbar >
                                            <DropdownToggle nav >
                                                <div className="image">
                                                    <img src="http://railsgirls.com/images/cluj/anonim.png" alt='' />
                                                </div>
                                            </DropdownToggle>
                                            <DropdownMenu right>
                                                <DropdownItem onClick={logOut}>
                                                    LogOut
                                                </DropdownItem>
                                            </DropdownMenu>
                                        </UncontrolledDropdown>
                                    
                                </div>
                            )
                        }
         </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarItem;