import { connect } from 'react-redux';
import { changeModalVisibility } from 'src/Store/modals/actions';
import CreateRoomsView from './CreateRoomsView.jsx';

const mapDispatchToProps = dispatch => ({
    changeModalVisibility: payload => dispatch(changeModalVisibility(payload)),
});

export default connect(null, mapDispatchToProps)(CreateRoomsView);
