import { useContext } from "react"
import { DataContext } from "../pages/product"

const CardPrd = ({handleDetails}) => {
    
    const context = useContext(DataContext)
    
    return(
        <div className="row">
            {
            context.map((e, i) => (
            <div key={i} className="col-lg-3 col-md-4 col-6 py-lg-3 py-md-3 py-3 prod">
              <div
                className="card bg-white border-0 shadow-lg rounded"
                style={{width: '156px', height: '215px'}}
                onClick={()=> handleDetails(e.id)}
              >
              <img
                src={`http://localhost:8800/upload/${e.image}`}
                    className="card-img-top rounded-circle position-absolute ms-3"
                    style={{width: '120px', height: '120px'}}
                    alt="Produk"
                />
                {/* <div
                  className={e.discount === 0 ? 'd-none' : 'discount'}
                >
                  {e.discount}%
                </div> */}
                <div className="card-body mt-lg-5 mt-md-5 mt-4">
                  <p id={e.id} className="col-lg-9 col-md-8 col-12 text-center ms-lg-3 ms-md-4  fw-bold fs-5 mb-5">
                    {e.product}
                  </p>
                  <span className="fw-bold ms-lg-4 ms-md-4 ms-2">
                    IDR {e.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
    )
}

export default CardPrd