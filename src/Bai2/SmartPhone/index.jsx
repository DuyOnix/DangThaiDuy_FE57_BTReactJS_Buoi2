import React, { Component } from "react";
import SmartPhoneItem from "../SmartPhoneItem";

class SmartPhone extends Component {
  renderSmartPhones = () => {
    const SmartPhoneUI = this.props.data.map((item) => {
      return (
        <div
          key={item.id}
          className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3"
        >
          <div className="container">
            <SmartPhoneItem data={item} />
          </div>
        </div>
      );
    });
    return SmartPhoneUI;
  };
  render() {
    return (
      <div>
        <section id="smartphone" className="container-fluid pt-5 pb-5">
          <h1 className="text-white text-center">BEST SMARTPHONE</h1>
          <div className="row">{this.renderSmartPhones()}</div>
        </section>
      </div>
    );
  }
}

export default SmartPhone;
