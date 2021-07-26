import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { logOut } from '../../../store/game/actions';

import HeaderControlPanel from './HeaderControlPanel';

const mapDispatchToProps = (dispatch:Dispatch) => ({
    logout: (payload: string) => dispatch(logOut(payload)),
});

export default connect(null, mapDispatchToProps)(withRouter(HeaderControlPanel));
