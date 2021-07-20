import { connect } from 'react-redux';
import { createRoom } from 'src/Store/game/actions';
import { Dispatch } from 'redux';
import ModalCreateRoom from './ModalCreateRoom';

const mapDispatchToProps = (dispatch:Dispatch) => ({
    createRoom: (payload: string) => dispatch(createRoom(payload)),
});

export default connect(null, mapDispatchToProps)(ModalCreateRoom);
