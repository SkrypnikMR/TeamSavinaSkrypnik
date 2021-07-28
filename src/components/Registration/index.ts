import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { setRegistrationValue, sendRegistrationRequest } from '../../store/registration/actions';
import { registrationStore } from '../../store/registration/selectors';
import Registration from './Registration';
import { ApplicationState } from '../../store/types';
import { TRegistartionPayload } from '../../store/registration/types';

const mapStateToProps = (state: ApplicationState) => ({ fields: registrationStore(state) });

const mapDispatchToProps = (dispatch: Dispatch) => ({
    setRegistrationValue: (payload: TRegistartionPayload) => dispatch(setRegistrationValue(payload)),
    sendRegistrationRequest: () => dispatch(sendRegistrationRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
