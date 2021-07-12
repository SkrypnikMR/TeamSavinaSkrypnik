import { connect } from 'react-redux';
import Chat from './Chat.jsx';
import { userInit, userToken } from '../../Store/user/selectors.js';
import { init } from '../../Store/chat/actions';

const mapStateToProps = state => ({
    userInit: userInit(state),
    userToken: userToken(state),
});
const mapDispatchToProps = dispatch => ({ init: () => dispatch(init()) });

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
