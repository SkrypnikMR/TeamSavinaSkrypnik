import { connect } from 'react-redux';
import { loginStore } from 'src/Store/login/selectors';
import { setLoginValue, sendLoginRequest, setValue } from 'src/Store/login/actions';
import Login from './Login.jsx';

const mapStateToProps = state => ({ fields: loginStore(state) });

const mapDispatchToProps = dispatch => ({
    setLoginValue: payload => dispatch(setLoginValue(payload)),
    sendLoginRequest: () => dispatch(sendLoginRequest()),
    setValue: payload => dispatch(setValue(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
