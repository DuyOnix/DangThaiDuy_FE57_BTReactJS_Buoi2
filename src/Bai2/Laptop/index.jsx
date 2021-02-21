import React, { Component } from "react";
import LaptopItem from "../LaptopItem";

class Laptop extends Component {
  renderLaptops = () => {
    const LaptopUI = this.props.data.map((item) => {
      return (
        <div
          key={item.id}
          className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3"
        >
          <div className="container">
            <LaptopItem data={item} />
          </div>
        </div>
      );
    });
    return LaptopUI;
  };
  render() {
    return (
      <div>
        <section
          id="laptop"
          className="container-fluid pt-5 pb-5 bg-light text-dark"
        >
          <h1 className="text-center">BEST LAPTOP</h1>
          <div className="row">{this.renderLaptops()}</div>
        </section>
      </div>
    );
  }
}

export default Laptop;
