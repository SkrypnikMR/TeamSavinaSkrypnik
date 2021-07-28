import { connect } from 'react-redux';
import { ApplicationState } from '../../store/types';
import { getUserLogin } from '../../store/game/selectors';
import Hello from './Hello';

const mapStateToProps = (store: ApplicationState) => ({ userLogin: getUserLogin(store) });

export default connect(mapStateToProps)(Hello);
