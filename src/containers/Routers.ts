import { voronaPlusOil } from "./../redux/action/vorona";
import { AppState } from "./../redux/store/index";
import { connect } from "react-redux";
import Routers from "../components/Routers";
import { ThunkDispatch } from "redux-thunk";
import { AppActionsType } from "../types/action";
import { bindActionCreators } from "redux";
import { voronaGetValue } from "../redux/action/vorona";
import { serviceCar } from "../redux/action/car";

const mapStateToProps = (state: AppState) => ({
  valueOil: state.voronaReducer.value,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActionsType>
) => ({
  getValueOil: bindActionCreators(voronaGetValue, dispatch),
  voronaPlus: bindActionCreators(voronaPlusOil, dispatch),
  serviceCar: bindActionCreators(serviceCar, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Routers);
