import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


const Product = () => {

    const [product, setProduct] = useState([]);
    const [counter, setCounter] = useState(1);

    const getData = async (id) => {
       await fetch(`http://localhost:8000/products?_limit=5&_page=${counter}`)
            .then((res) => res.json())
            .then((res) => setProduct(res))
            .then((res) => console.log(res))
            .catch((res) => console.log(res))
    }
    useEffect(() => {
        getData();
    }, [counter])

   const handlePrev = ()=>{
    return setCounter (counter - 1);
 }

 const handleNext = ()=>{
    return setCounter (counter + 1);
 }
    return (
        <>
            <h1>Products</h1>

            {
                product.map((item, key) => (
                    <div key={key} className="">
                        <div className="row d-flex justify-content-center align-item-start">
                            <div className="col-3">
                                <div className="card">
                                    <div className="card-body">
                                        <img className="img-fluid" src={item.img} />
                                    </div>
                                    <div className="card-footer">
                                        <h6 className="badge bg-warning">{item.date}</h6>
                                        <h3>{item.name}</h3>
                                        <p>This is a Cap</p>
                                        <h6><Link to="/cap">  Read More</Link> </h6>
                                        <div className="row bg-secondary d-flex justify-content-center align-items-cener mt-3">
                                            <div className="col-3 mt-3">
                                                <img className="img-fluid rounded-circle" src="https://cdn.vectorstock.com/i/1000x1000/30/54/user-icon-vector-2933054.webp" alt="" />
                                            </div>
                                            <div className="col-9">
                                                <h6>Posted By</h6>
                                                <p>{item.publisher}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }

<button className="btn btn-primary" onClick={handlePrev} disabled={counter == 1}>Prev</button>
<input className="text-center" type="text" value={counter}/>
<button className="btn btn-primary" onClick={handleNext}>Next</button>
        </>
    )
}

export default Product