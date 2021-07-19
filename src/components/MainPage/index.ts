import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { getSockJSConnection } from '../../store/game/actions';
import MainPage from './MainPage';

const mapDispatchToProps = (dispatch: Dispatch) => ({
    getSockJSConnection: () => dispatch(getSockJSConnection()),
});

export default connect(null, mapDispatchToProps)(MainPage);
