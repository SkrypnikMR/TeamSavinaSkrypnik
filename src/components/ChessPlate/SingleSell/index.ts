import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import SingleSell from './SingleSell';
import { getTicStatus, getPossibleStepPosition } from '../../../store/game/selectors';
import { ApplicationState } from '../../../store/types';
import { getPosibleStep } from '../../../store/game/actions';

const mapStateToProps = (store: ApplicationState, props) => ({
    status: getTicStatus(store, props.id),
    position: getPossibleStepPosition(store, props.id),
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
    getPosibleStep: (payload: string) => dispatch(getPosibleStep(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleSell);
