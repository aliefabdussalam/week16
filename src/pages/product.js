import { useState, useEffect, createContext } from "react";
import { useHistory} from "react-router-dom";
import NavbarItem from "../components/navbar";
import CardPrd from '../components/CardPrd'
import Footer from "../components/footer";
import "../css/product.css";
import axios from "axios";
require('dotenv').config();

export const DataContext = createContext()

const Products = () => {
  // eslint-disable-next-line no-unused-vars
  const [promo, setPromo] = useState([
    {
      id: "pc1",
      image:
      "https://github.com/aliefabdussalam/week5/blob/main/productpage/img/image%2046.png?raw=true",
        name: "HAPPY MOTHER’S DAY!",
      description: "Get one of our favorite menu for free!",
    },
    {
      id: "pc2",
      image:
        "https://github.com/aliefabdussalam/week5/blob/main/productpage/img/image%2043.png?raw=true",
      name: "Get a cup of coffee for free on sunday morning",
      description: "Only at 7 to 9 AM",
    },
    {
      id: "pc3",
      image:
      "https://github.com/aliefabdussalam/week5/blob/main/productpage/img/image%2046.png?raw=true",
      name: "HAPPY MOTHER’S DAY!",
      description: "Get one of our favorite menu for free!",
    },
    {
      id: "pc4",
      image:
        "https://github.com/aliefabdussalam/week5/blob/main/productpage/img/image%2045.png?raw=true",
      name: "HAPPY HALLOWEEN!",
      description:
        "Do you like chicken wings? Get 1 free only if you buy pinky promise",
    },
  ]);

 

  const [products, setProducts] = useState([]);

  const history = useHistory()
 
  const token = localStorage.getItem('token')
  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_API_URL}product`, { headers: { token }})
    .then((response)=>{
      const data = response.data.data.data
      setProducts(data);
      console.log('masuk')
    }).catch((err)=>{
      console.log(err)
    })
  }, [])
  

  const handleDetails = (id)=>{
    history.push(`/details/${id}`)
    // eslint-disable-next-line array-callback-return
    products.map((e) => {
      if (e.id === id) {
        const detailsPoducts = JSON.stringify(e)
        localStorage.setItem("details", detailsPoducts )
      }
    })
  }
  const [search, setSearch]= useState("")
  const changeSearch=(event)=>{
    setSearch(event.target.value)
  }
  const handleSubmit = (data) =>{  
      data.preventDefault() 
      setSearch(data)
      axios.get(`${process.env.REACT_APP_API_URL}product?search=${search}`, {headers: {token: token} })
      .then((response)=>{
        setProducts(response.data.data.data)
      }).catch((err)=>{
        alert(err)
      })
    
}
  
  return (
    <div>
      <div className="navbarProducts border-bottom">
        <NavbarItem isLogin='true'/>
      </div>
      <section className="container-fluid promo">
        <div className="row">
          <div className="col-lg-4 border-end cardPromo">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-12 pt-4 text-center d-none d-lg-block d-xl-none">
                <h4>Promo Today</h4>
                <small>
                  Coupons will be updated every weeks. Check them out !
                </small>
              </div>
              <div className="row d-md-flex flex-md-column d-flex flex-column justify-content-lg-center align-items-lg-center col-lg-10 pt-5 testiCard">                
                {promo.map((e, i) => (
                  <div key={i} id={e.id} className="card mb-3 mx-md-2 mx-2" style={{borderRadius:"25px"}}>
                    <div className="row g-0">
                      <div className="col-md-4 col-4">
                        <img
                          src={e.image}
                          style={{ margin: "5px"}}
                          alt="pict"
                        />
                      </div>
                      <div className="col-md-8 col-8">
                        <div className="card-body ps-0">
                          <p className="card-text fw-bold fs-6">
                            {e.name}
                            <br />
                            <small className="text fw-normal">
                              {e.description}
                            </small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="row justify-content-center align-items-center ms-lg-0 ms-md-0 ms-2">
                  <button className="btn rounded-pill fw-bold fs-6 mt-5 p-3 apply">
                    Apply Coupon
                  </button>
                </div>

                <div className="row justify-content-lg-center align-content-lg-center ms-lg-5 mt-lg-5 ps-md-5 align-items-md-center pb-md-5 mt-4 terms">
                  <p className="fw-bold ps-lg-1 titleTerms">Terms and Condition</p>
                  <ol className="row d-flex align-items-lg-center ms-lg-5 ms-md-5 ms-3">
                    <li>You can only apply 1 coupon per day </li>
                    <li>It only for dine in </li>
                    <li>Buy 1 get 1 only for new user</li>
                    <li>Should make member card to apply coupon</li>
                  </ol>
              </div>
          </div>

          <div className="col-lg-7 col-md-12 product">
            
          <form onSubmit={handleSubmit} className='d-flex justify-content-center'>
                        <input type="text" onChange={changeSearch} value={search} name="search" placeholder="Cari Product" className='form-control w-75 me-2 mt-3'/>
                        <button type="submit" className='btn btn-success'>Search</button>
                    </form>     
            <div className="container-fluid mt-lg-5 mt-md-5 ms-lg-5 ms-md-0 menuProduct">
              <div className="row itemProduct">
              <DataContext.Provider value={products}>
                <CardPrd handleDetails={handleDetails}/>
              </DataContext.Provider>
              </div>
              
            </div>
          </div>
        </div>
      </section>
      
      <footer className="footProducts">
          <Footer />
      </footer>
    </div>
  );
};

export default Products;