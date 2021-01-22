import React, { useEffect, useState } from "react";
import { Form, Button, Container, Spinner } from "react-bootstrap";
import { getCategories } from "../api/categoriesApi";
//
const AddProductForm = (props) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const callMeNow = async () => {
      await fetchProducts();
    };

    callMeNow();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    const allCategories = await getCategories();
    setCategories(allCategories);
    setLoading(false);
  };

  return (
    <div className="product-form">
      <Container>
        <Form onSubmit={props.onHandleSubmit}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              id="name"
              type="text"
              placeholder="Name"
              value={props.product.name}
              onChange={props.fillForm}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
              id="description"
              as="textarea"
              rows={2}
              value={props.product.description}
              onChange={props.fillForm}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Brand</Form.Label>
            <Form.Control
              id="brand"
              type="text"
              placeholder="Brand Name"
              value={props.product.brand}
              onChange={props.fillForm}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Price</Form.Label>
            <Form.Control
              id="price"
              type="number"
              placeholder="name@example.com"
              value={props.product.price}
              onChange={props.fillForm}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Category</Form.Label>
            <Form.Control
              id="category"
              type="text"
              value={props.product.category}
              onChange={props.fillForm}
            >
              {/* {props.product.loading ? (
                <Spinner animation="border" role="status">
                  <span className="sr-only">Loading...</span>
                </Spinner>
              ) : (
                <>
                  {categories.map((category) => (
                    <option>{category.name}</option>
                  ))}
                </>
              )} */}
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.File
              id="imageUrl"
              label="Example file input"
              onChange={props.imageForm}
            />
          </Form.Group>
          {props.modified ? (
            <Button variant="primary" type="submit">
              Update
            </Button>
          ) : (
            <Button variant="primary" type="submit">
              Submit
            </Button>
          )}
        </Form>
      </Container>
    </div>
  );
};

export default AddProductForm;
