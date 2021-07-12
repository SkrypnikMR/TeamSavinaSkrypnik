import Search from './Search.jsx';
import { connect } from 'react-redux';
import { filterByRoomName } from '/src/Store/chat/selectors';
import { setValue } from '/src/Store/chat/actions';

const mapStateToProps = state => ({
    filterByRoomName: filterByRoomName(state),
});
const mapDispatchToProps = dispatch => ({
    setValue: payload => dispatch(setValue(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
