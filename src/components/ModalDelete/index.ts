import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import ModalDelete from './ModalDelete';
import { exitGame } from '../../store/game/actions';

const mapDispatchToProps = (dispatch: Dispatch) => ({ exitGame: () => dispatch(exitGame()) });

export default connect(null, mapDispatchToProps)(ModalDelete);
