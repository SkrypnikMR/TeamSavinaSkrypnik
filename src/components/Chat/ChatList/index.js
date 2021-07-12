import { connect } from 'react-redux';
import ChatList from './ChatList.jsx';
import { rooms } from '/src/Store/chat/selectors';
import { changeModalVisibility } from '/src/Store/modals/actions';

const mapStateToProps = state => ({ rooms: rooms(state) });
const mapDispatchToProps = dispatch => ({
    changeModalVisibility: payload => dispatch(changeModalVisibility(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);
