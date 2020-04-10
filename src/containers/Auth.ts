import { userAuthorize } from "./../redux/action/user";
import { AppState } from "./../redux/store/index";
import { AppActionsType } from "./../types/action";
import { ThunkDispatch } from "redux-thunk";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Auth from "../components/Auth";

const mapStateToProps = (state: AppState) => ({
  userInfo: state.userReducer.info,
  loading: state.userReducer.loading,
  error: state.userReducer.error
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActionsType>
) => ({
  userAuthorize: bindActionCreators(userAuthorize, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(Auth);
