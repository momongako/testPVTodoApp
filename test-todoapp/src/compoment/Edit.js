import './CssEdit.css';
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Edit = () => {
    const params = useParams();
    const [product, setProduct] = useState([]);
    let navigate = useNavigate();
    useEffect(() => {
        let product_url =
            "https://62e7ba7b93938a545bd7d018.mockapi.io/testTodoApp/" + params.id;

        fetch(product_url)
            .then((response) => response.json())
            .then((data) => {

                setProduct(data);
            });

    }, []);
    const handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        let data = { ...product };
        data[name] = value;
        setProduct(data);
        console.log(">>> new product : ", product)
    };


    const saveProduct = () => {
        let method = "POST";
        let id = "";
        if (product.id) {
            method = "PUT";
            id = product.id;
        }

        const requestOptions = {
            method: method,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(product),
        };
        fetch(
            "https://62e7ba7b93938a545bd7d018.mockapi.io/testTodoApp/" + id,
            requestOptions
        )
            .then((response) => response.json())
            .then((data) => {
                navigate('/')
                console.log(">>check dataEdit ", data);
            });
    };
    console.log('>>> check  product data: ', product)
    return (
        <>
            <div className="signup-form">


                <form action="" method="post">
                    <h2>{product.length > 0 ? "Add New" : "Edit"} </h2>
                    <p>Please fill in this form to create an account!</p>
                    <hr />
                    <div className="form-group">
                        <div className="input-group">
                            <span className="input-group-addon"><i className="fa fa-user" />ID : {product.id} </span>

                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <span className="input-group-addon"><i className="fa fa-user" /></span>
                            <input type="text" value={product.FirstName} onChange={(event) => handleChange(event)}
                                className="form-control" name="FirstName" placeholder="First Name" required="required" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <span className="input-group-addon"><i className="fa fa-paper-plane" /></span>
                            <input type="text" value={product.LastName} onChange={(event) => handleChange(event)}
                                className="form-control" name="LastName" placeholder="Last Name" required="required" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <span className="input-group-addon"><i className="fa fa-lock" /></span>
                            <input type="email" value={product.Email} onChange={(event) => handleChange(event)}
                                className="form-control" name="Email" placeholder="Email" required="required" />
                        </div>
                    </div>
                    <div className="form-group">
                        <button type="button" onClick={() => saveProduct()} className="btn btn-primary btn-lg">Save</button>
                    </div>
                </form>




            </div>

        </>
    )
}
export default Edit;