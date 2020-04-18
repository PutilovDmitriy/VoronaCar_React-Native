import { Car } from "./../types/Car";
import { getCarInfo } from "../redux/action/car";
import { AppState } from "../redux/store/index";
import { AppActionsType } from "../types/action";
import { ThunkDispatch } from "redux-thunk";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Home from "../components/Home";

const sortByDate = (data: Car[]) => {
  return data.sort((a, b) => (a.lastService > b.lastService ? 1 : -1));
};

const mapStateToProps = (state: AppState) => ({
  carData: sortByDate(state.carReducer.info),
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
