import { connect } from 'react-redux';
import { getSockJSConnection } from '../../store/game/actions';

import MainPage from './MainPage';

const mapDispatchToProps = dispatch => ({
    getSockJSConnection: () => dispatch(getSockJSConnection()),
});

export default connect(null, mapDispatchToProps)(MainPage);
