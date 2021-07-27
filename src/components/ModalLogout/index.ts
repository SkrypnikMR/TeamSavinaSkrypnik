import { Dispatch } from 'redux';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import ModalLogout from './ModalLogout';
import { exitGame } from '../../store/game/actions';

const mapDispatchToProps = (dispatch: Dispatch) => ({ exitGame: () => dispatch(exitGame()) });

export default connect(null, mapDispatchToProps)(withRouter(ModalLogout));
