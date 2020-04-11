import { getCarInfo } from "../redux/action/car";
import { AppState } from "../redux/store/index";
import { AppActionsType } from "../types/action";
import { ThunkDispatch } from "redux-thunk";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Home from "../components/Home";

const mapStateToProps = (state: AppState) => ({
  carData: state.carReducer.info,
  loading: state.carReducer.loading,
  error: state.carReducer.error,
  user: state.userReducer.info,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActionsType>
) => ({
  getCarInfo: bindActionCreators(getCarInfo, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
