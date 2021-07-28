import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import SingleRoom from './SingleRoom';
import { joinRoom, playWithBot, subscribeRoom } from '../../store/game/actions';

const mapDispatchToProps = (dispatch:Dispatch) => ({
    joinRoom: (payload: string) => dispatch(joinRoom(payload)),
    subscribeRoom: (payload: string) => dispatch(subscribeRoom(payload)),
    playWithBot: (payload: string) => dispatch(playWithBot(payload)),
});

export default connect(null, mapDispatchToProps)(SingleRoom);
