import { connect } from 'react-redux';
import ChatControlPanel from './ChatControlPanel.jsx';
import { setValue, sendNewMessage } from '/src/Store/chat/actions';
import { newMessage } from '/src/Store/chat/selectors';

const mapStateToProps = state => ({
    messageInputValue: newMessage(state),
});

const mapDispatchToProps = dispatch => ({
    onChangeInput: payload => dispatch(setValue(payload)),
    sendNewMessage: () => dispatch(sendNewMessage()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatControlPanel);
