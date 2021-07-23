import { connect } from 'react-redux';
import GameZone from './GameZone';
import { getActualRoomGameType } from '../../store/game/selectors';

const mapStateToProps = store => ({ gameType: getActualRoomGameType(store) });

export default connect(mapStateToProps)(GameZone);
