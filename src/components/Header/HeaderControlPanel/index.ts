import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import HeaderControlPanel from './HeaderControlPanel';
import { getActualRoomId } from '../../../store/game/selectors';
import { ApplicationState } from '../../../store/types';

const mapStateToProps = (store: ApplicationState) => ({ actualRoomId: getActualRoomId(store) });

export default connect(mapStateToProps)(withRouter(HeaderControlPanel));
