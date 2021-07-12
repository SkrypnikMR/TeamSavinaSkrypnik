import { connect } from 'react-redux';
import Login from './Login.jsx';
import { setLoginValue, sendLoginRequest, setValue } from '/src/Store/login/actions';
import { loginStore } from '/src/Store/login/selectors';

const mapStateToProps = state => ({ fields: loginStore(state) });

const mapDispatchToProps = dispatch => ({
    setLoginValue: payload => dispatch(setLoginValue(payload)),
    sendLoginRequest: () => dispatch(sendLoginRequest()),
    setValue: payload => dispatch(setValue(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
