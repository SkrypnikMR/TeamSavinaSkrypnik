import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import Logo from './Logo.jsx';
import { setValue } from '../../../Store/user/actions';

const mapDispatchToProps = dispatch => ({ setValue: payload => dispatch(setValue(payload)) });

export default connect(null, mapDispatchToProps)(withRouter(Logo));
