import { connect } from 'react-redux';
import { setRegistrationValue, sendRegistrationRequest } from '../../store/registration/actions';
import { registrationStore } from '../../store/registration/selectors';
import Registration from './Registration';
import { TStore } from '../../store/allStoreTypes/types';

const mapStateToProps = (state: TStore) => ({ fields: registrationStore(state) });

const mapDispatchToProps = dispatch => ({
    setRegistrationValue: payload => dispatch(setRegistrationValue(payload)),
    sendRegistrationRequest: () => dispatch(sendRegistrationRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
