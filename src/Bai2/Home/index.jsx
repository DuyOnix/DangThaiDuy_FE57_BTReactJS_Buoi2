import React, { Component } from "react";
import Carousel from "../Carousel";
import Header from "../Header";
import Laptop from "../Laptop";
import Promotion from "../Promotion";
import SmartPhone from "../SmartPhone";
import sp1 from "../../assets/img/sp_iphoneX.png";
import sp2 from "../../assets/img/sp_note7.png";
import sp3 from "../../assets/img/sp_vivo850.png";
import sp4 from "../../assets/img/sp_blackberry.png";
import lap1 from "../../assets/img/lt_macbook.png";
import lap2 from "../../assets/img/lt_rog.png";
import lap3 from "../../assets/img/lt_hp.png";
import lap4 from "../../assets/img/lt_lenovo.png";
import pro1 from "../../assets/img/promotion_1.png";
import pro2 from "../../assets/img/promotion_2.png";
import pro3 from "../../assets/img/promotion_3.jpg";
class Home extends Component {
  smartPhone = [
    {
      id: 1,
      img: sp1,
      name: "iPhone X",
      desc:
        "iPhone X features a new all-screen design. Face ID, which makes your face your password",
    },
    {
      id: 2,
      img: sp2,
      name: "Galaxy Note7",
      desc:
        "The Galaxy Note7 comes with a perfectly symmetrical design for good reason",
    },
    {
      id: 3,
      img: sp3,
      name: "Vivo",
      desc:
        "A young global smartphone brand focusing on introducing perfect sound quality",
    },
    {
      id: 4,
      img: sp4,
      name: "Blackberry",
      desc:
        "BlackBerry is a line of smartphones, tablets, and services originally designed",
    },
  ];

  laptop = [
    {
      id: 1,
      img: lap1,
      name: "MACBOOK",
      desc:
        "The MacBook is a brand of notebook computers manufactured by Apple Inc",
    },
    {
      id: 2,
      img: lap2,
      name: "ASUS ROG",
      desc:
        "the Asus ROG Strix Flare is the latest addition to Asus' lineup of ROG branded devices",
    },
    {
      id: 3,
      img: lap3,
      name: "HP OMEN",
      desc:
        "A young global smartphone brand focusing on introducing perfect sound quality",
    },
    {
      id: 4,
      img: lap4,
      name: "LENOVO THINKPAD",
      desc:
        "The ThinkPad X1 Carbon is a high-end notebook computer released by Lenovo in 2012",
    },
  ];

  promotion = [pro1, pro2, pro3];
  render() {
    return (
      <div className="bg-dark">
        <Header />
        <Carousel />
        <SmartPhone data={this.smartPhone} />
        <Laptop data={this.laptop} />
        <Promotion data={this.promotion} />
      </div>
    );
  }
}

export default Home;
