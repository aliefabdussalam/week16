import NavbarItem from "../components/navbar"
import Footer from "../components/footer"
import "../css/home.css";

const Home = () => {
    const loginStatus = localStorage.getItem('isLogin')
    console.log(loginStatus)
    return(
        <div>
           
                <NavbarItem isLogin= {loginStatus}/>
        
            <main>
            <div class="maincontent container-fluid p-0 m-0">
            <div class="jumbotron">
              <h1>Start Your Day with Coffee and Good Meals</h1>      
              <p>We provide high quality beans, good taste, and healthy meals made by love just for you. Start your day with us for a bigger smile!</p>
              <a href="../productpage/productpage.html"><button>Get Started</button></a>
            </div> 
            </div>
            
            </main>
            <section class="container-fluid">
            <img className="img-fluid" src="https://github.com/aliefabdussalam/week5/blob/main/landingpage/img/35744%201.png?raw=true" alt=""></img>
      <div class="desc  ">
     
        <h2>We Provide Good Coffee and Healthy Meals</h2>
    
            <p>You can explore the menu that we provide with fun and have their own taste and make your day better.</p>
        <ul>
            <li>High quality beans</li>
            <li>Healthy meals, you can request the ingredients</li>
            <li>Chat with our staff to get better experience for ordering</li>
            <li>Free member card with a minimum purchase of IDR 200.000.</li>
        </ul>
    </div>
            </section>
            <div>
             <Footer />
            </div>
        </div>
        
    )
}

export default Home