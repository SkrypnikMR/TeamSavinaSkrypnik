import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { setValue } from 'src/Store/user/actions';
import { userThemeMode, userNotifSettings } from 'src/Store/user/selectors';
import HeaderControlPanel from './HeaderControlPanel';

const mapStateToProps = state => ({
    themeMode: userThemeMode(state),
    userNotifSettings: userNotifSettings(state),
});
const mapDispatchToProps = dispatch => ({
    setValue: payload => dispatch(setValue(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(HeaderControlPanel));
