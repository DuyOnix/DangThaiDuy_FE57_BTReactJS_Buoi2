import React, { Component } from "react";

class Promotion extends Component {
  renderPromotions = () => {
    const PromotionUI = this.props.data.map((item, i) => {
      return (
        <div key={i} className="col-xs-12 col-sm-12 col-md-4">
          <div className="container">
            <img src={item} alt style={{ maxWidth: "100%" }} />
          </div>
        </div>
      );
    });
    return PromotionUI;
  };
  render() {
    return (
      <div>
        <section id="promotion" className="container-fluid pt-5 pb-5">
          <h1 className="text-center text-white">PROMOTION</h1>
          <div className="container bg-light pt-5 pb-5">
            <div className="row">{this.renderPromotions()}</div>
          </div>
        </section>
      </div>
    );
  }
}

export default Promotion;
