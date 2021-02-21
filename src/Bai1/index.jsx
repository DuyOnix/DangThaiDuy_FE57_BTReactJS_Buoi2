import React, { Component } from "react";
import "./style.scss";
class GuessNumber extends Component {
  //Tạo ngẫu nhiên 1 số từ 0 đến 100
  guessNumber = Math.round(Math.random() * 100);
  state = {
    temp: null,
    guessArray: [],
  };

  getGuessNumber = () => {
    let cloneArray = [...this.state.guessArray];
    let number = document.getElementById("guessNumber").value;
    cloneArray.push(number);
    this.setState({
      temp: number,
      guessArray: cloneArray,
    });
  };
  Guess = () => {
    if (this.state.temp != null) {
      if (this.state.temp < this.guessNumber)
        return <p>Số nhập vào nhỏ hơn số cần tìm</p>;
      else if (this.state.temp > this.guessNumber)
        return <p>Số nhập vào lớn hơn số cần tìm</p>;
      else {
        return (
          <div>
            <p>Chúc mừng bạn đã đoán trúng số</p>
            {this.renderTable()};
          </div>
        );
      }
    }
    return null;
  };
  createTable = () => {
    const RowsUI = this.state.guessArray.map((item, i) => {
      return (
        <tr>
          <td colSpan="100%">
            Lần {i + 1} : {item}
          </td>
        </tr>
      );
    });
    return RowsUI;
  };
  renderTable = () => {
    if (this.state.guessArray.length > 0) {
      return (
        <table>
          <th colSpan="100%">Lịch sử đoán</th>
          {this.createTable()}
        </table>
      );
    }
  };
  render() {
    return (
      <div>
        <div className="container guessContainer">
          <div className="form-group w-50 mt-3">
            <input id="guessNumber" placeholder="Nhập số" type="number"></input>
            <button
              onClick={this.getGuessNumber}
              className="btn btn-success ml-2"
            >
              Đoán
            </button>
          </div>
          {this.Guess()}
        </div>
      </div>
    );
  }
}

export default GuessNumber;
