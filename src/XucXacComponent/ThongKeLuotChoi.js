import React, { Component } from "react";

export default class ThongKeLuotChoi extends Component {
  renderThongKeLuotChoi = () => {
    return this.props.thongKe.map((luotChoi) => {
      return (
        <tr>
          <td>{luotChoi.soLuotChoi}</td>
          <td>{this.props.handleLuaChon()}</td>
          <td>{luotChoi.ketQua}</td>
          <td>{luotChoi.soBanThang}</td>
        </tr>
      );
    });
  };
  render() {
    let {} = this.props;
    return (
      <div>
        <div>
          {/* Button trigger modal */}
          <button
            type="button"
            className="btn btn-success"
            data-toggle="modal"
            data-target="#exampleModal"
            onClick={() => {
              this.props.handleThongKe();
            }}
          >
            Thống kê
          </button>
          {/* Modal */}
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Các lượt đã chơi
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <table>
                    <thead>
                      <td>Luợt</td>
                      <td>Bạn chọn</td>
                      <td>Kết quả</td>
                      <td>Chung cuộc</td>
                    </thead>
                    <tbody>{this.props.renderThongKeLuotChoi()}</tbody>
                  </table>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-dismiss="modal"
                  >
                    Thoát
                  </button>
                  <button
                    type="button"
                    className="btn btn-success"
                    data-dismiss="modal"
                  >
                    Chơi tiếp
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
