import React, { Component } from "react";
import { connect } from "react-redux";
import { luaChonAction } from "./redux/actions/xucXacActions";
import { TAI, XIU } from "./redux/contants/constants";

let btnStylye = {
  padding: "40px",
  fontSize: "40px",
  borderRadius: "16px",
  border: "none",
  cursor: "pointer",
};

let imgSize = {
  width: "80px",
  height: "80px",
};

class GameXucXac extends Component {
  renderImgXucXac = () => {
    return this.props.mangXucXac?.map((item, index) => {
      return <img src={item.img} key={index} alt="" style={imgSize} />;
    });
  };

  render() {
    return (
      <div className="container">
        <h2 className="display-3 mb-5">Game Xúc Xắc</h2>

        <div className="d-flex justify-content-between align-items-center mb-5">
          <button
            style={btnStylye}
            className="btn-danger cursor"
            onClick={() => {
              this.props.handleLuaChon(TAI);
            }}
          >
            Tài
          </button>
          <div>{this.renderImgXucXac()}</div>
          <button
            style={btnStylye}
            className="btn-dark cursor"
            onClick={() => {
              this.props.handleLuaChon(XIU);
            }}
          >
            Xỉu
          </button>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return { mangXucXac: state.xucXacReducer.mangXucXac };
};

let mapDispatchToProps = (dispatch) => {
  return {
    handleLuaChon: (luaChon) => {
      dispatch(luaChonAction(luaChon));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameXucXac);
