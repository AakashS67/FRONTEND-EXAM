import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <>
          
                <div className="row d-flex justify-content-center align-items-center bg-light">
                    <div className="col-3">
                        <h1>Shopify</h1>
                    </div>
                    <div className="col-9 d-flex justify-content-center">
                        <ul className="nav navbar navbar-default">
                            <li className=" nav-item"><Link className="nav-link" to="/"> Home</Link></li>
                            <li className=" nav-item"><Link className="nav-link" to="/products">Product</Link></li>
                        </ul>
                    </div>
               

            </div>
        </>
    )
}

export default Navbar