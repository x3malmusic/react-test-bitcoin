import { connect } from "react-redux";
import Sell from "./Sell";
import { bitcoinPrice } from "../../constants";
import { sellBitcoin } from "../../redux-store/actions";

const mapStateToProps = ({ user: { userBitcoins, bitCoinRatio } }) => ({
  userBitcoins,
  bitcoinPrice,
  currentBitCoinPrice: bitCoinRatio * bitcoinPrice
});

const mapDispatchToProps = (dispatch) => ({
  sell: () => dispatch(sellBitcoin()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Sell);