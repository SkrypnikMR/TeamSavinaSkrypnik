import { connect } from 'react-redux';
import { loginStore } from 'src/Store/login/selectors';
import { setLoginValue, sendLoginRequest, setValue } from 'src/Store/login/actions';
import { Dispatch } from 'redux';
import Login from './Login.jsx';
import { ApplicationState } from '../../store/types';
import { TLoginPayload } from '../../store/login/types';

const mapStateToProps = (state: ApplicationState) => ({ fields: loginStore(state) });

const mapDispatchToProps = (dispatch: Dispatch) => ({
    setLoginValue: (payload: TLoginPayload) => dispatch(setLoginValue(payload)),
    sendLoginRequest: () => dispatch(sendLoginRequest()),
    setValue: (payload: TLoginPayload) => dispatch(setValue(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
