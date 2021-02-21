import React, { Component } from "react";
import "./style.scss";
class GuessNumber extends Component {
  //Tạo ngẫu nhiên 1 số từ 0 đến 100
  guessNumber = Math.round(Math.random() * 100);
  state = {
    temp: null,
    guessHist: [],
  };

  getGuessNumber = () => {
    let CloneGuessHist = [...this.state.guessHist];
    let numGet = document.getElementById("doanSo").value;
    CloneGuessHist.push(numGet);
    this.setState({
      temp: numGet,
      guessHist: CloneGuessHist,
    });
  };
  Guess = () => {
    if (this.state.temp != null) {
      if (this.state.temp < this.guessNumber)
        return <p>Số vừa đoán nhỏ hơn số cần tìm</p>;
      else if (this.state.temp > this.guessNumber)
        return <p>Số vừa đoán lớn hơn số cần tìm</p>;
      else {
        return (
          <div>
            <p>Chúc mừng bạn đã đoán trúng số</p>
            {this.renderGuessHistory()};
          </div>
        );
      }
    }
    return null;
  };
  createRowHistory = () => {
    const RowsUI = this.state.guessHist.map((item, i) => {
      return (
        <tr>
          <td colSpan="100%">
            Lần đoán thứ {i + 1} : {item}
          </td>
        </tr>
      );
    });
    return RowsUI;
  };
  renderGuessHistory = () => {
    if (this.state.guessHist.length > 0) {
      return (
        <table>
          <th colSpan="100%">Lịch sử đoán</th>
          {this.createRowHistory()}
        </table>
      );
    }
  };
  render() {
    return (
      <div>
        <div className="container bai1">
          <div className="form-group w-50 mt-3">
            <input id="doanSo" placeholder="Nhập số đoán" type="number"></input>
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
