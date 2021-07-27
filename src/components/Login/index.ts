import { connect } from 'react-redux';

import { loginStore } from '../../store/login/selectors';
import { setLoginValue, sendLoginRequest, setValue } from '../../store/login/actions';
import Login from './Login';

const mapStateToProps = (state) => ({ fields: loginStore(state) });

const mapDispatchToProps = (dispatch) => ({
    setLoginValue: (payload) => dispatch(setLoginValue(payload)),
    sendLoginRequest: () => dispatch(sendLoginRequest()),
    setValue: (payload) => dispatch(setValue(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
