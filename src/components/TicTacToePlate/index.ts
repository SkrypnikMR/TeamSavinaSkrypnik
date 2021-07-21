import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import TicTacToePlate from './TicTacToePlate';
import { deleteRoom } from '../../store/game/actions';

const mapDispatchToProps = (dispatch: Dispatch) => ({ deleteRoom: () => dispatch(deleteRoom()) });

export default connect(null, mapDispatchToProps)(TicTacToePlate);
