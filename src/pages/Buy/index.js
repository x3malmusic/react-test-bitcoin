import { connect } from "react-redux";
import Buy from "./Buy";
import { bitcoinPrice } from "../../constants";
import { buyBitcoin } from "../../redux-store/actions";

const mapStateToProps = ({ user: { bitCoinRatio } }) => ({
  bitcoinPrice,
  currentBitCoinPrice: bitCoinRatio * bitcoinPrice
});

const mapDispatchToProps = (dispatch) => ({
  buy: () => dispatch(buyBitcoin()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Buy);