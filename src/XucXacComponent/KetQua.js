import React, { Component } from "react";
import { connect } from "react-redux";
import { playGameAction, resetGameAction } from "./redux/actions/xucXacActions";

let fontSize = {
  fontSize: "40px",
  margin: "15px",
};

class KetQua extends Component {
  render() {
    let { luaChon, soBanThang, soLuotChoi } = this.props;
    return (
      <div className="container">
        {luaChon && <h4>Kết quả:</h4>}
        {luaChon && (
          <h3 className="text-success" style={fontSize}>
            Bạn đã chọn: {luaChon}
          </h3>
        )}
        {/* {luaChon || <h1>Bạn chưa chọn</h1>} */}
        <h3 className="text-danger" style={fontSize}>
          Bạn đã thắng: {soBanThang}
        </h3>
        <h3 className="text-dark" style={fontSize}>
          Bạn đã chơi: {soLuotChoi}
        </h3>
        <div className="mb-3">
          <button
            className="btn btn-success mx-2"
            onClick={() => {
              this.props.handlePlay();
            }}
          >
            Play game
          </button>
          <button
            className="btn btn-success mx-2"
            onClick={() => {
              this.props.handleReset();
            }}
          >
            Reset game
          </button>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    // xucXac: state.xucXacReducer,
    luaChon: state.xucXacReducer.luaChon,
    soBanThang: state.xucXacReducer.soBanThang,
    soLuotChoi: state.xucXacReducer.soLuotChoi,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    handlePlay: () => {
      dispatch(playGameAction());
    },
    handleReset: () => {
      dispatch(resetGameAction);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(KetQua);
