import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { getSockJSConnection, disconnect } from '../../store/game/actions';
import MainPage from './MainPage';

const mapDispatchToProps = (dispatch: Dispatch) => ({
    getSockJSConnection: () => dispatch(getSockJSConnection()),
    disconnect: () => dispatch(disconnect()),
});

export default connect(null, mapDispatchToProps)(MainPage);
