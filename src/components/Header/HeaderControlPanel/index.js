import { withRouter } from 'react-router';
import HeaderControlPanel from './HeaderControlPanel.jsx';
import { connect } from 'react-redux';
import { setValue } from '/src/Store/user/actions';
import { userThemeMode, userNotifSettings } from '/src/Store/user/selectors';
import { logOutAction } from '/src/Store/chat/actions';
import { onlineUsersCount } from '/src/Store/chat/selectors';

const mapStateToProps = state => ({
    onlineUsersCount: onlineUsersCount(state),
    themeMode: userThemeMode(state),
    userNotifSettings: userNotifSettings(state),
});
const mapDispatchToProps = dispatch => ({
    setValue: payload => dispatch(setValue(payload)),
    logOut: () => dispatch(logOutAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(HeaderControlPanel));
