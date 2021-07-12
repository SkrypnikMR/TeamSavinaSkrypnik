import { connect } from 'react-redux';
import ChatDisplay from './ChatDisplay.jsx';
import { userEmail } from '/src/Store/user/selectors';
import { messages, currentRoomName } from '/src/Store/chat/selectors';

const mapStateToProps = state => ({
    messages: messages(state),
    currentRoomName: currentRoomName(state),
    currentUser: userEmail(state),
});

export default connect(mapStateToProps)(ChatDisplay);
