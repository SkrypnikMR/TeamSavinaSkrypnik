import { connect } from 'react-redux';
import CreateRoomsView from './CreateRoomsView.jsx';
import { createNewRoom } from '/src/Store/chat/actions';
import { changeModalVisibility } from '../../../../../Store/modals/actions';

const mapDispatchToProps = dispatch => ({
    createNewRoom: payload => dispatch(createNewRoom(payload)),
    changeModalVisibility: payload => dispatch(changeModalVisibility(payload)),
});

export default connect(null, mapDispatchToProps)(CreateRoomsView);
