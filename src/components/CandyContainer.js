import React from "react";
import { connect } from "react-redux";
import { buyCandy } from "../redux";

const CandyContainer = props => {
  return (
    <div>
      <h2>Number of candies - {props.numOfCandies}</h2>
      <button onClick={props.buyCandy}>Buy ice cream</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    numOfCandies: state.candy.numOfCandies
  };
};

const mapDispatchToProps = dispatch => {
  return {
    buyCandy: () => dispatch(buyCandy())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CandyContainer);
