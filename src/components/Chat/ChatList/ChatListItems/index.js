import { connect } from 'react-redux';
import ChatListItems from './ChatListItems.jsx';
import { setValue, readAllMessagesInRoom, resetUnreadCount } from '/src/Store/chat/actions';
import { currentRoomName } from '/src/Store/chat/selectors';

const mapStateToProps = state => ({
    currentRoomName: currentRoomName(state),
});
const mapDispatchToProps = dispatch => ({
    setValue: payload => dispatch(setValue(payload)),
    readAllMessagesInRoom: payload => dispatch(readAllMessagesInRoom(payload)),
    resetUnreadCount: payload => dispatch(resetUnreadCount(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatListItems);
