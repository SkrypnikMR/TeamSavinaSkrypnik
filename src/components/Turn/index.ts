import { connect } from 'react-redux';
import Turn from './Turn';
import { getStepOrderSelector, getUserLogin } from '../../store/game/selectors';

const mapStateToProps = store => ({
    turn: getStepOrderSelector(store),
    login: getUserLogin(store),
});

export default connect(mapStateToProps)(Turn);
