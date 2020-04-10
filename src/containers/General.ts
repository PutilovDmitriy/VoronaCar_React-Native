import { AppState } from "./../redux/store/index";
import { connect } from "react-redux";
import General from "../components/General";

const mapStateToProps = (state: AppState) => ({
  authorized: state.userReducer.authorized
});

export default connect(mapStateToProps)(General);
