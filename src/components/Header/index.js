import { connect } from "react-redux";
import Header from "./Header";
import { bitcoinPrice } from "../../constants";

const mapStateToProps = ({ user: { userMoney, userBitcoins, bitCoinRatio } }) => ({
  userMoney,
  userBitcoins,
  bitCoinPrice: bitCoinRatio * bitcoinPrice
})

export default connect(mapStateToProps, null)(Header)