import React, { Component } from "react";

class LaptopItem extends Component {
  render() {
    return (
      <div>
        <div className="card bg-light" style={{ width: 300 }}>
          <img
            className="card-img-top"
            src={this.props.data.img}
            alt="Card image"
            style={{ maxWidth: "100%", height: 250 }}
          />
          <div className="card-body text-center">
            <h4 className="card-title text-center">{this.props.data.name}</h4>
            <p className="card-text">{this.props.data.desc}</p>
            <a href="#" className="btn btn-primary mr-1">
              Detail
            </a>
            <a href="#" className="btn btn-danger">
              Cart
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default LaptopItem;
