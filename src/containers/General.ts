import { startShift, finishShift } from "./../redux/action/shift";
import { AppState } from "./../redux/store/index";
import { connect } from "react-redux";
import General from "../components/General";
import { ThunkDispatch } from "redux-thunk";
import { AppActionsType } from "../types/action";
import { bindActionCreators } from "redux";
import { voronaGetValue } from "../redux/action/vorona";
import { loginLogout, loginSuccess } from "../redux/action/user";

const mapStateToProps = (state: AppState) => ({
  authorized: state.userReducer.authorized,
  userId: state.userReducer.info.id,
  shiftId: state.shiftReducer.info.shiftId,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActionsType>
) => ({
  getValueOil: bindActionCreators(voronaGetValue, dispatch),
  loginSuccess: bindActionCreators(loginSuccess, dispatch),
  logout: bindActionCreators(loginLogout, dispatch),
  shiftStart: bindActionCreators(startShift, dispatch),
  shiftFinish: bindActionCreators(finishShift, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(General);
