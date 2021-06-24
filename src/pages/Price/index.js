import { connect } from "react-redux";
import Price from "./Price";
import { bitcoinPrice } from "../../constants";
import { increaseBitcoinPrice, decreaseBitcoinPrice } from "../../redux-store/actions";

const mapStateToProps = ({ user: { bitCoinRatio } }) => ({
  bitcoinPrice,
  currentBitCoinPrice: bitCoinRatio * bitcoinPrice
});

const mapDispatchToProps = (dispatch) => ({
  increase: () => dispatch(increaseBitcoinPrice()),
  decrease: () => dispatch(decreaseBitcoinPrice()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Price);