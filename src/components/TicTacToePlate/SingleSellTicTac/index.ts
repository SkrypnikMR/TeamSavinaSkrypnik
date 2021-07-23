import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import SingleSellTicTac from './SingleSellTicTac';
import { doTicStep } from '../../../store/game/actions';
import { getTicStatus } from '../../../store/game/selectors';

const mapStateToProps = (store, ownProps) => ({ status: getTicStatus(store, ownProps.id) });


const mapDispatchToProps = (dispatch : Dispatch) => ({ doStep: (payload: string) => dispatch(doTicStep(payload)) });

export default connect(mapStateToProps, mapDispatchToProps)(SingleSellTicTac);
