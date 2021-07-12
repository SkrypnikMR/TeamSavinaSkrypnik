import ModalComponent from './ModalComponent.jsx';
import { connect } from 'react-redux';
import { changeModalVisibility } from '/src/Store/modals/actions';
import { getModalVisibilityIsOpen } from '/src/Store/modals/selectors';

const mapStateToProps = (state, ownProps) => ({
    isOpen: getModalVisibilityIsOpen(state, ownProps),
});

const mapDispatchToProps = dispatch => ({
    changeModalVisibility: payload => dispatch(changeModalVisibility(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalComponent);
