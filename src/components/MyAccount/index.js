import { connect } from 'react-redux';
import MyAccount from './MyAccount.jsx';
import { userInfo, changeUser } from '../../Store/user/selectors';
import { changeUserData, setNewUserData } from '../../Store/user/actions';

const mapStateToProps = state => ({ userInfo: userInfo(state), changeUser: changeUser(state) });
const mapDispatchToProps = dispatch => ({
    changeUserData: payload => dispatch(changeUserData(payload)),
    setNewUserData: () => dispatch(setNewUserData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyAccount);
