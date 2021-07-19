import { connect } from 'react-redux';
import RoomsContainer from './RoomsContainer';
import { ApplicationState } from '../../store/types';
import { getRooms, getUserLogin } from '../../store/game/selectors';

const mapStateToProps = (state: ApplicationState) => ({
    rooms: getRooms(state),
    userLogin: getUserLogin(state),
});

export default connect(mapStateToProps)(RoomsContainer);
