import { connect } from 'react-redux';
import Turn from './Turn';
import { getStepOrder, getUserLogin } from '../../store/game/selectors';

const mapStateToProps = store => ({
    turn: getStepOrder(store),
    login: getUserLogin(store),
});

export default connect(mapStateToProps)(Turn);
