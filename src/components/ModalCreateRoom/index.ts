import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { createRoom } from '../../store/game/actions';
import ModalCreateRoom from './ModalCreateRoom';

const mapDispatchToProps = (dispatch:Dispatch) => ({
    createRoom: (payload: string) => dispatch(createRoom(payload)),
});

export default connect(null, mapDispatchToProps)(ModalCreateRoom);
