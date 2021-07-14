import { connect } from 'react-redux';
import { changeModalVisibility } from 'src/store/modals/actions';
import CreateRoomsView from './CreateRoomsView.jsx';

const mapDispatchToProps = dispatch => ({
    changeModalVisibility: payload => dispatch(changeModalVisibility(payload)),
});

export default connect(null, mapDispatchToProps)(CreateRoomsView);
