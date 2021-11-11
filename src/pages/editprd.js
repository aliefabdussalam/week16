import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Footer from "../components/footer";
import { Button, Col, Form, FormGroup, Label, Input } from "reactstrap";
import "../css/edit.css";
import NavbarItem from "../components/navbar";
import axios from "axios";

const Edit = () => {
  const { id } = useParams();
  const token = localStorage.getItem('token')
  const data = localStorage.getItem("details");
  const obj = JSON.parse(data);
  const [details] = useState(obj);
  


  // eslint-disable-next-line array-callback-return
  // eslint-disable-next-line eqeqeq
  
  console.log(details)
  
  const [edit, setEdit] = useState({
    name: details.product,
    image: details.image,
    description: details.description,
    // stock: dataFill.stock,
    // discount: dataFill.discount,
    // category: dataFill.id_category,
    price: details.price,
  });
  
  const changeHandler = (e) => {
    setEdit({
      ...edit,
      [e.target.name]: e.target.value,
    });
  };
  const changeHandlerImage = (e) => {
    setEdit({
      ...edit,
      image: e.target.files[0],
      imagePreview: URL.createObjectURL(e.target.files[0]),
    });
  };

  const history = useHistory();

  const handleSubmitSave = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("productName", edit.name);
    formData.append("image", edit.image);
    formData.append("description", edit.description);
    formData.append("stock", edit.stock);
    formData.append("discount", edit.discount);
    formData.append("category_id", edit.category);
    formData.append("size", edit.size);
    formData.append("price", edit.price);

    axios.put(`${process.env.REACT_APP_API_URL}product/${id}`,formData, { headers: { token }})
      .then((res) => {
        alert(res.data.message);
        history.push(`/product`)
      })
      .catch((error) => {
        alert(error);
      });
  };

  const handleCancel = () => {
    history.push(`/details/${id}`);
  };

  
  const loginStatus = localStorage.getItem('isLogin')

  return (
    <div>
      <div className="border-bottom navbarDetails">
        <NavbarItem isLogin= {loginStatus}/>
      </div>
      <div className=" container-fluid mt-5 mb-5 formEdit">
        <Form className="edit" onSubmit={handleSubmitSave}>
          <FormGroup row>
            <Label for="name" sm={2} className="mb-3 name">
              Name :
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="name"
                value={edit.name}
                id="name"
                placeholder="Name Products"
                onChange={changeHandler}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="image" sm={2} className="mb-3">
              Image :
            </Label>
            <Col sm={10}>
              <Input
                type="file"
                name="image"
                id="image"
                onChange={changeHandlerImage}
              />
            </Col>
          </FormGroup>
          <FormGroup className="mb-3" row>
            <Label for="text" sm={2}>
              Description :
            </Label>
            <Col sm={10} className="inputDesc">
              <Input
                type="textarea"
                name="description"
                id="text"
                value={edit.description}
                style={{ height: "100px" }}
                onChange={changeHandler}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="stock" sm={2} className="mb-3">
              Stock :
            </Label>
            <Col sm={10}>
              <Input
                type="number"
                name="stock"
                id="stock"
                value={edit.stock}
                placeholder="Stock"
                onChange={changeHandler}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="discount" sm={2} className="mb-3">
              Discount :
            </Label>
            <Col sm={10}>
              <Input
                type="number"
                name="discount"
                id="discount"
                placeholder="Discount"
                value={edit.discount}
                onChange={changeHandler}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="price" sm={2} className="mb-3">
              Price :
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="price"
                id="price"
                value={edit.price}
                placeholder="exp 10000"
                onChange={changeHandler}
              />
            </Col>
          </FormGroup>
          <FormGroup>
            <Label for="category">Category :</Label>
            <Input
              type="select"
              defaultValue={edit.category}
              name="category"
              id="category"
              style={{ width: "50%", marginLeft: "20px", marginTop: "20px" }}
              onChange={changeHandler}
            >
              <option>Select</option>
              <option value="1">Coffee</option>
              <option value="2">Non Coffee</option>
              <option value="3">Foods</option>
              <option value="4">Add-on</option>
            </Input>
          </FormGroup>
          <FormGroup check row className="d-flex mt-3 handleBtn">
            <Col className="btnGroup">
              <Button
                type="submit"
                onClick={handleSubmitSave}
                className="fw-bold me-5 save"
              >
                Save Product
              </Button>
              <Button
                type="button"
                onClick={handleCancel}
                className="fw-bold cancel"
              >
                Cancel
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
      <footer className="footEdit">
        <Footer />
      </footer>
    </div>
  );
};

export default Edit;