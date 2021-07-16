import { connect } from 'react-redux';

import { setRegistrationValue, sendRegistrationRequest } from 'src/store/registration/actions';
import { registrationStore } from 'src/store/registration/selectors';
import Registration from './Registration.jsx';

const mapStateToProps = state => ({ fields: registrationStore(state) });

const mapDispatchToProps = dispatch => ({
    setRegistrationValue: payload => dispatch(setRegistrationValue(payload)),
    sendRegistrationRequest: payload => dispatch(sendRegistrationRequest(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
