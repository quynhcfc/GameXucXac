import React, { Component } from "react";
import { connect } from "react-redux";

class ChucMung extends Component {
  render() {
    return <div></div>;
  }
}

let mapStateToProps = (state) => {
  return {
    xucXac: state.xucXacReducer,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    handleModal: () => {
      dispatch({
        type: "Modal",
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChucMung);
