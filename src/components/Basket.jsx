import React, { Component } from "react";
import { ListGroup, Button, Image } from "react-bootstrap";
import { removeItemFromBasket } from "../api/productsApi";

export default class Basket extends Component {
  state = {
    basket: [],
    total: 0,
  };

  componentDidMount() {
    let total = this.props.basket.slice(this.props.basket.length - 1)[0]
      .totalPrice;
    let basket = this.props.basket.slice(0, this.props.basket.length - 1);
    this.setState({ total, basket });
  }

  componentDidUpdate(prevProp) {
    if (this.props.basket !== prevProp.basket) {
      let total = this.props.basket.slice(this.props.basket.length - 1)[0]
        .totalPrice;
      let basket = this.props.basket.slice(0, this.props.basket.length - 1);
      this.setState({ total, basket }, () => console.log(basket));
    }
  }

  removeItem = async (product) => {
    await removeItemFromBasket(product.product.id, "");
    this.props.handleModified();
  };

  render() {
    return (
      <div>
        {this.state.basket ? (
          <ListGroup>
            {this.state.basket.map((product, index) => (
              <ListGroup.Item
                key={index}
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Image
                  src={product.product.img}
                  roundedCircle
                  style={{ display: "flex", height: "30px" }}
                />
                <p>Quantity: {product.quantity}</p>
                <p>Name: {product.product.name}</p>
                <p>Price: {product.product.price}</p>
                <Button onClick={() => this.removeItem(product)}>
                  Remove Item
                </Button>
              </ListGroup.Item>
            ))}
            <ListGroup.Item>
              Total: {Math.floor(this.state.total * 100) / 100}
            </ListGroup.Item>
          </ListGroup>
        ) : (
          <h3>Empty Basket</h3>
        )}
      </div>
    );
  }
}
