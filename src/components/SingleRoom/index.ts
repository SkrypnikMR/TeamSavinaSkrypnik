import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import SingleRoom from './SingleRoom';
import { joinRoom, playWithBot } from '../../store/game/actions';

const mapDispatchToProps = (dispatch:Dispatch) => ({
    joinRoom: (payload: string) => dispatch(joinRoom(payload)),
    playWithBot: (payload: string) => dispatch(playWithBot(payload)),
});

export default connect(null, mapDispatchToProps)(SingleRoom);
