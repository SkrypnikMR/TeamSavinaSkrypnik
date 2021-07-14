import { connect } from 'react-redux';
import { getModalDataByType } from 'src/store/modals/selectors';
import { changeModalVisibility } from 'src/store/modals/actions';
import InviteUsersView from './InviteUsersView.jsx';

const mapStateToProps = (state, ownProps) => ({
    modalData: getModalDataByType(state, ownProps),
});

const mapDispatchToProps = dispatch => ({
    changeModalVisibility: payload => dispatch(changeModalVisibility(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InviteUsersView);
