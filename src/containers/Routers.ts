import { voronaPlusOil, voronaMinusOil } from "./../redux/action/vorona";
import { AppState } from "./../redux/store/index";
import { connect } from "react-redux";
import Routers from "../components/Routers";
import { ThunkDispatch } from "redux-thunk";
import { AppActionsType } from "../types/action";
import { bindActionCreators } from "redux";
import { voronaGetValue } from "../redux/action/vorona";
import { serviceCar } from "../redux/action/car";
import { updateShift } from "../redux/action/shift";

const mapStateToProps = (state: AppState) => ({
  valueOil: state.voronaReducer.value,
  shiftId: state.shiftReducer.info.shiftId,
  user: state.userReducer.info,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActionsType>
) => ({
  getValueOil: bindActionCreators(voronaGetValue, dispatch),
  voronaPlus: bindActionCreators(voronaPlusOil, dispatch),
  voronaMinus: bindActionCreators(voronaMinusOil, dispatch),
  serviceCar: bindActionCreators(serviceCar, dispatch),
  shiftUpdate: bindActionCreators(updateShift, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Routers);
