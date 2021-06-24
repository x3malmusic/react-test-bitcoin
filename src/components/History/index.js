import { connect } from "react-redux";
import History from "./History";

const mapStateToProps = ({ history: { messages } }) => ({
  messages,
})

export default connect(mapStateToProps, null)(History)