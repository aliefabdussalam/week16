import { useState } from "react";
import NavbarItem from "../components/navbar";
import Footer from "../components/footer";
import "../css/details.css";
import axios from "axios";
import { useHistory } from "react-router";

const Details = () => {
  const data = localStorage.getItem("details");
  const obj = JSON.parse(data);
  const [details] = useState(obj);
  const token = localStorage.getItem('token')
  const history = useHistory()
  const handleEdit = (id) => {
    history.push(`/edit/${id}`);
  };
  const handleadd = (id) => {
    history.push(`/add/${id}`);
  };
const removePrd=()=>{
  const id = details.id
  const headers={
    headers: {
      token: token
    }
  }
  axios.delete(`http://localhost:8800/product/${id}`,headers)
  .then( history.push(`/product`))
  .catch((err)=>{
    alert(err)
  })
}
const loginStatus = localStorage.getItem('isLogin')

  
  return (
    <div>
      <div className="border-bottom navbarDetails">
        <NavbarItem  isLogin= {loginStatus} />
      </div>
      <section className="container-fluid details">
       
        <div className="row justify-content-lg-between infoDeliv">
          <div className="col-lg-4 ms-lg-5 mt-lg-5 mt-3 left">
            <img src={`http://localhost:8800/upload/${details.image}`} alt="detail"/>
            
          </div>

          <div className="col-lg-7 col-12 mt-2 mt-4 right">
            <div className="row infoProd">
              <h1 className="fw-bold col-lg-8 text-center titleProduct">{details.name}</h1>
              <p className="mt-5 col-lg-8 description">{details.description}</p>
              <p className="mt-5 col-lg-5 timeDeliv">Delivery only on <span className="fw-bold" style={{color: '#553220'}}>{details.delivery_days}</span> at <span className="fw-bold" style={{color: '#553220'}}>{details.delivery_time}</span>
              </p>

            

              <div className="col-lg-8 mt-lg-5 mt-5 handleAdd">
                <div className="btn-group-vertical">
                  <button type="button"  className="btn add" onClick={() => handleEdit(details.id)}>edit</button>
                  <button type="button" onClick={removePrd} className="btn ask mt-4">delete</button>
                  <button type="button"  className="btn add mt-4" onClick={() => handleadd(details.id)}>add product</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

     

      <footer className="footDetails">
          <Footer />
      </footer>
    </div>
  );
};

export default Details;