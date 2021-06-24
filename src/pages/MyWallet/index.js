import { connect } from "react-redux";
import MyWallet from "./MyWallet";
import { deposit, withdraw } from "../../redux-store/actions";

const mapStateToProps = ({ user: { userBitcoins } }) => ({
  userBitcoins
});

const mapDispatchToProps = (dispatch) => ({
  deposit: () => dispatch(deposit()),
  withdraw: () => dispatch(withdraw()),
})

export default connect(mapStateToProps, mapDispatchToProps)(MyWallet);